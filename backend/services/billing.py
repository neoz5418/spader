from datetime import datetime
from uuid import UUID

from sqlalchemy import select

from dependencies import SessionDep
from routers.types import (
    BillingAccount,
    BillingRealTimeRecord,
    BillingRecord,
    BillingRecordType,
    Currency,
    ResourceUsageType,
    Workspace,
    WorkspaceAccount,
)
from services.cache import get_redis
from services.common import utcnow
from services.utils import subtract_datetimes


async def get_account(session: SessionDep, workspace: Workspace) -> WorkspaceAccount:
    cache = get_redis()
    async with cache.lock("lock:" + str(workspace.uid)):
        account = await BillingAccount.one_by_field(session, "uid", workspace.uid)
        if not account:
            account = BillingAccount(
                uid=workspace.uid, balance=0, total_top_up=0, meta_data={}
            )
            session.add(account)

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
            total_top_up=account.total_top_up,
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
        if not free:
            account.total_top_up += amount
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
    resource_type: ResourceUsageType,
    start_time: datetime,
    rate_per_hour: int,
) -> BillingRealTimeRecord:
    real_time_record = BillingRealTimeRecord(
        account=workspace.uid,
        start_time=start_time,
        end_time=datetime.min,
        rate_per_hour=rate_per_hour,
        resource_usage_type=resource_type,
        resource_id=resource_id,
    )
    session.add(real_time_record)
    return real_time_record


async def end_resource_billing_record(
    session: SessionDep,
    workspace: Workspace,
    resource_id: UUID,
    end_time: datetime,
) -> BillingRealTimeRecord:
    real_time_record = await BillingRealTimeRecord.one_by_fields(
        session,
        {
            "end_time": datetime.min,
            "resource_id": resource_id,
            "account": workspace.uid,
        },
    )
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
) -> BillingRealTimeRecord:
    real_time_record = await end_resource_billing_record(
        session, workspace=workspace, resource_id=resource_id, end_time=end_time
    )
    # TODO: load rate_per_hour from resource
    return await start_resource_billing_record(
        session,
        workspace=workspace,
        resource_id=resource_id,
        start_time=end_time,
        resource_type=real_time_record.resource_usage_type,
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
        workspace = UUID(workspace)
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
                account=workspace,
            )
            session.add(real_time_record)
            session.add(billing_record)
            # TODO: load rate_per_hour from resource
            new_real_time_record = BillingRealTimeRecord(
                account=workspace,
                start_time=end_time,
                end_time=datetime.min,
                rate_per_hour=real_time_record.rate_per_hour,
                resource_usage_type=real_time_record.resource_type,
                resource_id=real_time_record.resource_id,
            )
            session.add(new_real_time_record)
        session.add(account)

    await session.commit()
