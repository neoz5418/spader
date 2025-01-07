import sys
from datetime import datetime
from typing import Optional
from uuid import UUID

from sqlalchemy import select

from dependencies import SessionDep
from routers.types import (
    BillingAccount,
    BillingCoupon,
    BillingLease,
    BillingPeriod,
    BillingPrice,
    BillingRealTimeRecord,
    BillingRecord,
    BillingRecordType,
    Currency,
    LeaseBase,
    LeaseStatus,
    PricedResourceMixin,
    ResourceType,
    Workspace,
    WorkspaceAccount,
)
from services.cache import get_redis
from services.common import (
    ErrorInsufficientBalance,
    ErrorInvalidArgument,
    single_column_validation_failed,
    utcnow,
)
from services.utils import subtract_datetimes


async def get_account(session: SessionDep, workspace: Workspace) -> WorkspaceAccount:
    cache = get_redis()
    async with cache.lock("lock:" + str(workspace.uid)):
        account = await BillingAccount.one_by_field(session, "uid", workspace.uid)
        if not account:
            account = BillingAccount(
                uid=workspace.uid, balance=0, total_top_up=0, meta_data={}
            )
            await account.save(session)
            await workspace.refresh(session)

        real_time_records = await BillingRealTimeRecord.all_by_fields(
            session,
            {
                "end_time": datetime.min,
                "account": workspace.uid,
            },
        )
        balance = account.balance
        end_time = utcnow()
        rate_per_hour = 0
        for r in real_time_records:
            balance -= int(r.rate_per_hour * subtract_datetimes(end_time, r.start_time))
            rate_per_hour += r.rate_per_hour
        return WorkspaceAccount(
            workspace=workspace.name,
            balance=balance,
            currency=Currency.CNY,
            rate_per_hour=rate_per_hour,
            # total_top_up=account.total_top_up,
        )


async def top_up_account(
    session: SessionDep, workspace: Workspace, amount: int, free: bool
) -> None:
    cache = get_redis()
    async with cache.lock("lock:" + str(workspace.uid)):
        account = await BillingAccount.one_by_field(session, "uid", workspace.uid)
        balance_before = account.balance
        account.balance += amount
        balance_after = account.balance
        # if not free:
        #     account.total_top_up += amount
        record = BillingRecord(
            type=BillingRecordType.top_up,
            amount=amount,
            billing_time=utcnow(),
            balance_before=balance_before,
            balance_after=balance_after,
            account=workspace.uid,
        )
        session.add(record)
        session.add(account)
        await session.commit()


async def start_resource_billing_record(
    session: SessionDep,
    workspace: Workspace,
    resource_id: UUID,
    resource_type: ResourceType,
    start_time: datetime,
    priced_resource: PricedResourceMixin,
) -> BillingRealTimeRecord:
    price = await get_price(session, priced_resource)
    real_time_record = BillingRealTimeRecord(
        account=workspace.uid,
        start_time=start_time,
        end_time=datetime.min,
        rate_per_hour=price.real_time,
        resource_type=resource_type,
        resource_id=resource_id,
    )
    session.add(real_time_record)
    return real_time_record


async def end_resource_billing_record(
    session: SessionDep,
    workspace: Workspace,
    resource_id: UUID,
    end_time: datetime,
) -> BillingRealTimeRecord | None:
    real_time_record = await BillingRealTimeRecord.one_by_fields(
        session,
        {
            "end_time": datetime.min,
            "resource_id": resource_id,
            "account": workspace.uid,
        },
    )
    if not real_time_record:
        return
    account = await BillingAccount.one_by_field(session, "uid", workspace.uid)
    real_time_record.end_time = end_time
    amount = -int(
        real_time_record.rate_per_hour
        * subtract_datetimes(end_time, real_time_record.start_time)
    )
    balance_before = account.balance
    balance_after = account.balance + amount
    account.balance = balance_after
    billing_record = BillingRecord(
        type=BillingRecordType.deduction,
        amount=amount,
        billing_time=end_time,
        balance_before=balance_before,
        balance_after=balance_after,
        account=workspace.uid,
    )
    session.add(real_time_record)
    session.add(billing_record)
    session.add(account)
    return real_time_record


async def renew_resource_billing_record(
    session: SessionDep,
    workspace: Workspace,
    resource_id: UUID,
    end_time: datetime,
) -> BillingRealTimeRecord | None:
    real_time_record = await end_resource_billing_record(
        session, workspace=workspace, resource_id=resource_id, end_time=end_time
    )
    if not real_time_record:
        return
    # TODO: load rate_per_hour from resource
    return await start_resource_billing_record(
        session,
        workspace=workspace,
        resource_id=resource_id,
        start_time=end_time,
        resource_type=real_time_record.resource_type,
        rate_per_hour=real_time_record.rate_per_hour,
    )


async def get_workspaces_with_active_billing(session: SessionDep) -> list[str]:
    query = (
        select(BillingRealTimeRecord.account)
        .distinct()
        .where(BillingRealTimeRecord.end_time == datetime.min)
    )
    result = await session.execute(query)
    return [row[0] for row in result.fetchall()]


async def process_periodic_billing(session: SessionDep):
    workspaces = await get_workspaces_with_active_billing(session)
    end_time = utcnow()
    for workspace in workspaces:
        real_time_records = await BillingRealTimeRecord.all_by_fields(
            session,
            {
                "end_time": datetime.min,
                "account": workspace,
            },
        )
        account = await BillingAccount.one_by_field(session, "uid", workspace)
        for real_time_record in real_time_records:
            real_time_record.end_time = end_time
            amount = -int(
                real_time_record.rate_per_hour
                * subtract_datetimes(end_time, real_time_record.start_time)
            )
            balance_before = account.balance
            balance_after = account.balance + amount
            account.balance = balance_after
            billing_record = BillingRecord(
                type=BillingRecordType.deduction,
                amount=amount,
                billing_time=end_time,
                balance_before=balance_before,
                balance_after=balance_after,
                account=account.uid,
            )
            session.add(real_time_record)
            session.add(billing_record)
            # TODO: load rate_per_hour from resource
            new_real_time_record = BillingRealTimeRecord(
                account=account.uid,
                start_time=end_time,
                end_time=datetime.min,
                rate_per_hour=real_time_record.rate_per_hour,
                resource_type=real_time_record.resource_type,
                resource_id=real_time_record.resource_id,
            )
            session.add(new_real_time_record)
        session.add(account)

    await session.commit()


async def get_price(
    session: SessionDep, priced_resource: PricedResourceMixin
) -> BillingPrice:
    price = await BillingPrice.one_by_field(session, "name", priced_resource.price_name)
    if not price:
        raise single_column_validation_failed(
            ErrorInvalidArgument(
                type="InvalidArgument",
                location="price",
                input=priced_resource.price_name,
            )
        )
    return price


async def find_available_coupon(
    session: SessionDep, account: UUID
) -> Optional[BillingCoupon]:
    # TODO: find available coupon
    return None


async def calculate_discounted_price(
    session: SessionDep,
    priced_resource: PricedResourceMixin,
    lease_base: LeaseBase,
    workspace: Workspace,
) -> (int, Optional[BillingCoupon]):
    coupon = await get_coupon(session, lease_base=lease_base, workspace=workspace)
    expected_total_price = sys.maxsize
    resource_price = await get_price(session, priced_resource)
    if lease_base.lease_period == BillingPeriod.real_time:
        expected_total_price = resource_price.real_time
        # TODO: only cash coupon support real time period
    else:
        if lease_base.lease_period == BillingPeriod.one_hour:
            expected_total_price = resource_price.one_hour
        elif lease_base.lease_period == BillingPeriod.one_day:
            expected_total_price = resource_price.one_day
        elif lease_base.lease_period == BillingPeriod.one_week:
            expected_total_price = resource_price.one_week
        elif lease_base.lease_period == BillingPeriod.one_month:
            expected_total_price = resource_price.one_month
        if coupon:
            # TODO: only support discount coupon
            expected_total_price = coupon.calculate_discounted_price(
                expected_total_price
            )
    return expected_total_price, coupon


async def get_coupon(
    session: SessionDep,
    lease_base: LeaseBase,
    workspace: Workspace,
) -> Optional[BillingCoupon]:
    if lease_base.coupon:
        coupon = await BillingCoupon.one_by_fields(
            session,
            {
                "uid": lease_base.coupon,
                "account": workspace.uid,
            },
        )
        if not coupon:
            raise single_column_validation_failed(
                ErrorInvalidArgument(
                    type="InvalidArgument",
                    location="coupon",
                    input=lease_base.coupon,
                )
            )
    else:
        coupon = await find_available_coupon(session, account=workspace.uid)
    return coupon


async def create_lease(
    session: SessionDep,
    workspace: str,
    resource_id: UUID,
    resource_type: ResourceType,
    priced_resource: PricedResourceMixin,
    lease_base: LeaseBase,
):
    db_workspace = await Workspace.one_by_field(session, "name", workspace)
    expected_total_price, coupon = await calculate_discounted_price(
        session,
        priced_resource=priced_resource,
        lease_base=lease_base,
        workspace=db_workspace,
    )
    workspace_account = await get_account(session, db_workspace)
    if not workspace_account.check_balance(expected_total_price):
        raise ErrorInsufficientBalance(
            type="InsufficientBalance", balance=workspace_account.balance
        ).to_exception()
    start_time = utcnow()
    end_time = lease_base.calculate_end_time(start_time)
    lease = BillingLease(
        account=db_workspace.uid,
        resource_id=resource_id,
        resource_type=resource_type,
        status=LeaseStatus.active,
        start_time=start_time,
        end_time=end_time,
        lease_period=lease_base.lease_period,
        auto_renew_period=lease_base.auto_renew_period,
        coupon=coupon,
        lease_price=priced_resource.price_name,
    )
    session.add(lease)
    return
