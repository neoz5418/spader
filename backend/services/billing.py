import logging
import sys
from collections.abc import Callable
from contextlib import asynccontextmanager
from datetime import datetime
from typing import Optional
from uuid import UUID

from sqlmodel import select

from dependencies import SessionDep
from routers.types import (
    AutoRenewPeriod,
    BillingAccount,
    BillingCoupon,
    BillingCouponClaimLimit,
    BillingCouponClass,
    BillingCouponDistributionRule,
    BillingLease,
    BillingPeriod,
    BillingPrice,
    BillingRealTimeRecord,
    BillingRecord,
    BillingRecordType,
    CouponType,
    Currency,
    GPUType,
    Instance,
    LeaseBase,
    LeaseStatus,
    PricedResourceMixin,
    PricingDetails,
    ResourceType,
    WorkspaceAccount,
)
from redis.asyncio import Redis
from services.cache import get_redis
from services.common import (
    ErrorCouponAlreadyUsed,
    ErrorCouponMinAmountNotMet,
    ErrorCouponNotApplicableToRealTimeBilling,
    ErrorInsufficientBalance,
    ErrorInvalidArgument,
    single_column_validation_failed,
    utcnow,
)
from services.utils import subtract_datetimes

logger = logging.getLogger(__name__)


async def get_claimable_coupons(
    session: SessionDep,
    account: UUID,
) -> list[BillingCouponClass]:
    now = utcnow()
    statement = (
        select(BillingCouponClass)
        .where(BillingCouponClass.valid_from <= now)
        .where(BillingCouponClass.valid_to >= now)
        .where(
            BillingCouponClass.distribution_rule
            == BillingCouponDistributionRule.auto_registered
        )
    )

    all_coupon_classes = await session.exec(statement)
    claimable_coupon_classes = []

    for coupon_class in all_coupon_classes:
        if coupon_class.claim_limit == BillingCouponClaimLimit.unlimited:
            # 可多次领取，无需过滤
            claimable_coupon_classes.append(coupon_class)
            continue
        # 检查领取限制
        if coupon_class.claim_limit == BillingCouponClaimLimit.once_per_account:
            # 查询当前账户已领取的同类优惠券
            statement = (
                select(BillingCoupon)
                .where(BillingCoupon.account == account)
                .where(BillingCoupon.name == coupon_class.name)
            )
            claimed_coupon = (await session.exec(statement)).first()
            if claimed_coupon:
                continue
            # 每个账户仅能领取一次
            claimable_coupon_classes.append(coupon_class)
    return claimable_coupon_classes


async def claim_new_account_coupon(session: SessionDep, account: UUID):
    claimable_coupon_classes = await get_claimable_coupons(session, account)
    for coupon_class in claimable_coupon_classes:
        coupon = coupon_class.assign_coupon(account=account)
        session.add(coupon)


@asynccontextmanager
async def account_lock(cache: Redis, account_id: UUID):
    """
    A context manager for locking based on an account ID.

    Args:
        cache (Redis): The Redis cache instance.
        account_id (UUID): The account ID to lock.

    Yields:
        Lock: The acquired lock for the account.
    """
    lock = cache.lock(f"lock_account:{str(account_id)}")
    try:
        await lock.acquire()
        yield lock
    finally:
        await lock.release()


async def get_realtime_account(
    session: SessionDep, account_id: UUID
) -> WorkspaceAccount:
    cache = get_redis()
    async with account_lock(cache, account_id):
        account = await BillingAccount.one_by_field(session, "uid", account_id)
        if not account:
            account = BillingAccount(uid=account_id, balance=0, meta_data={})
            await claim_new_account_coupon(session, account=account_id)
            await account.save(session)

        real_time_records = await BillingRealTimeRecord.all_by_fields(
            session,
            {
                "end_time": datetime.min,
                "account": account_id,
            },
        )
        balance = account.balance
        end_time = utcnow()
        rate_per_hour = 0
        for r in real_time_records:
            balance -= int(r.rate_per_hour * subtract_datetimes(end_time, r.start_time))
            rate_per_hour += r.rate_per_hour
        return WorkspaceAccount(
            workspace=account_id,
            balance=balance,
            currency=Currency.CNY,
            rate_per_hour=rate_per_hour,
        )


async def top_up_account(
    session: SessionDep, account_id: UUID, amount: int, free: bool
) -> None:
    cache = get_redis()
    async with account_lock(cache, account_id):
        account = await BillingAccount.one_by_field(session, "uid", account_id)
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
            account=account_id,
        )
        session.add(record)
        session.add(account)
        await session.commit()


async def list_active_realtime_leases(session: SessionDep) -> list[BillingLease]:
    now = utcnow()
    statement = (
        select(BillingLease)
        .where(BillingLease.start_time <= now)
        .where(BillingLease.end_time >= now)
        .where(BillingLease.status == LeaseStatus.active)
        .where(BillingLease.lease_period == BillingPeriod.real_time)
    )

    return (await session.exec(statement)).all()


async def get_active_lease(
    session: SessionDep, resource_id: UUID
) -> Optional[BillingLease]:
    now = utcnow()
    statement = (
        select(BillingLease)
        .where(BillingLease.resource_id == resource_id)
        .where(BillingLease.start_time <= now)
        .where(BillingLease.end_time >= now)
        .where(BillingLease.status == LeaseStatus.active)
    )

    return (await session.exec(statement)).first()


async def start_resource_billing_record(
    session: SessionDep,
    account_id: UUID,
    resource_id: UUID,
    resource_type: ResourceType,
    start_time: datetime,
    priced_resource: PricedResourceMixin,
):
    lease = await get_active_lease(session, resource_id=resource_id)
    if not lease:
        raise Exception(
            "resource %s [%s] cannot find lease", (resource_type, resource_id)
        )
    if lease.lease_period != BillingPeriod.real_time:
        return
    price = await get_price(session, priced_resource)
    real_time_record = BillingRealTimeRecord(
        account=account_id,
        start_time=start_time,
        end_time=datetime.min,
        rate_per_hour=price.real_time,
        resource_type=resource_type,
        resource_id=resource_id,
        meta_data={
            "price_name": priced_resource.price_name,
        },
    )
    session.add(real_time_record)


async def get_resource_lease(session, resource_id: UUID) -> BillingLease:
    stmt = (
        select(BillingLease)
        .where(BillingLease.resource_id == resource_id)
        .order_by(BillingLease.uid.desc())
        .limit(1)
    )
    result = await session.exec(stmt)
    return result.one()


async def end_lease(
    session: SessionDep,
    account_id: UUID,
    resource_id: UUID,
    end_time: datetime,
):
    cache = get_redis()
    async with account_lock(cache, account_id):
        lease = await get_resource_lease(session, resource_id=resource_id)
        lease.status = LeaseStatus.deleted
        lease.end_time = end_time
        session.add(lease)
        await end_resource_billing_record(
            session=session,
            account_id=account_id,
            resource_id=resource_id,
            end_time=end_time,
        )
        await session.commit()


async def end_resource_billing_record(
    session: SessionDep,
    account_id: UUID,
    resource_id: UUID,
    end_time: datetime,
) -> BillingRealTimeRecord | None:
    real_time_record = await BillingRealTimeRecord.one_by_fields(
        session,
        {
            "end_time": datetime.min,
            "resource_id": resource_id,
            "account": account_id,
        },
    )
    if not real_time_record:
        return
    account = await BillingAccount.one_by_field(session, "uid", account_id)
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
        resource_id=resource_id,
        resource_type=real_time_record.resource_type,
        account=account_id,
        meta_data=real_time_record.meta_data,
    )
    session.add(real_time_record)
    session.add(billing_record)
    session.add(account)
    return real_time_record


async def renew_resource_billing_record(
    session: SessionDep,
    account_id: UUID,
    resource_id: UUID,
    end_time: datetime,
    priced_resource: PricedResourceMixin,
):
    cache = get_redis()
    async with account_lock(cache, account_id=account_id):
        real_time_record = await end_resource_billing_record(
            session, account_id=account_id, resource_id=resource_id, end_time=end_time
        )
        if not real_time_record:
            return
        await start_resource_billing_record(
            session,
            account_id=account_id,
            resource_id=resource_id,
            start_time=end_time,
            resource_type=real_time_record.resource_type,
            priced_resource=priced_resource,
        )
        await session.commit()


async def get_workspaces_with_active_billing(session: SessionDep) -> list[str]:
    query = (
        select(BillingRealTimeRecord.account)
        .distinct()
        .where(BillingRealTimeRecord.end_time == datetime.min)
    )
    result = await session.execute(query)
    return [row[0] for row in result.fetchall()]


async def process_periodic_billing(session: SessionDep):
    leases = await list_active_realtime_leases(session)
    end_time = utcnow()
    for lease in leases:
        await lease.refresh(session)
        instance = await Instance.one_by_field(session, "uid", lease.resource_id)
        gpu_type = await GPUType.one_by_field(session, "name", instance.gpu_type)
        await renew_resource_billing_record(
            session,
            account_id=lease.account,
            resource_id=lease.resource_id,
            priced_resource=gpu_type,
            end_time=end_time,
        )


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


async def calculate_pricing_details(
    session: SessionDep,
    priced_resource: PricedResourceMixin,
    lease_base: LeaseBase,
    account: UUID,
) -> (PricingDetails, Optional[BillingCoupon]):
    coupon = await get_coupon(session, lease_base=lease_base, account=account)
    original_price = sys.maxsize
    resource_price = await get_price(session, priced_resource)
    if lease_base.lease_period == BillingPeriod.real_time:
        original_price = resource_price.real_time
        # TODO: only cash coupon support real time period
    else:
        if lease_base.lease_period == BillingPeriod.one_hour:
            original_price = resource_price.one_hour
        elif lease_base.lease_period == BillingPeriod.one_day:
            original_price = resource_price.one_day
        elif lease_base.lease_period == BillingPeriod.one_week:
            original_price = resource_price.one_week
        elif lease_base.lease_period == BillingPeriod.one_month:
            original_price = resource_price.one_month
    if (
        lease_base.lease_period == BillingPeriod.real_time
        and coupon
        and coupon.type == CouponType.discount
    ):
        raise single_column_validation_failed(
            ErrorCouponNotApplicableToRealTimeBilling(
                type="CouponNotApplicableToRealTimeBilling",
                location="coupon",
                input=lease_base.coupon,
            )
        )

    if (lease_base.lease_period != BillingPeriod.real_time) and coupon:
        # TODO: only support discount type coupon
        final_price = coupon.calculate_final_price(original_price)
        if final_price == original_price:
            raise single_column_validation_failed(
                ErrorCouponMinAmountNotMet(
                    type="CouponMinAmountNotMet",
                    location="coupon",
                    input=lease_base.coupon,
                )
            )
    else:
        final_price = original_price

    if original_price == -1:
        raise single_column_validation_failed(
            ErrorInvalidArgument(
                type="InvalidArgument",
                location="lease_period",
                input=lease_base.lease_period,
            )
        )

    return PricingDetails(
        original_price=original_price,
        final_price=final_price,
        discount_amount=original_price - final_price,
    ), coupon


async def get_coupon(
    session: SessionDep,
    lease_base: LeaseBase,
    account: UUID,
) -> Optional[BillingCoupon]:
    if lease_base.coupon:
        coupon = await BillingCoupon.one_by_fields(
            session,
            {
                "uid": lease_base.coupon,
                "account": account,
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
        coupon = await find_available_coupon(session, account=account)
    return coupon


async def create_lease(
    session: SessionDep,
    account_id: UUID,
    resource_id: UUID,
    resource_type: ResourceType,
    priced_resource: PricedResourceMixin,
    lease_base: LeaseBase,
):
    cache = get_redis()
    async with account_lock(cache, account_id):
        pricing_details, coupon = await calculate_pricing_details(
            session,
            priced_resource=priced_resource,
            lease_base=lease_base,
            account=account_id,
        )
        account = await BillingAccount.one_by_field(session, "uid", account_id)
        if not account.check_balance(pricing_details.final_price):
            raise ErrorInsufficientBalance(
                type="InsufficientBalance", balance=account.balance
            ).to_exception()
        start_time = utcnow()
        end_time = lease_base.calculate_end_time(start_time)
        coupon_id = None
        if coupon:
            if coupon.used:
                raise single_column_validation_failed(
                    ErrorCouponAlreadyUsed(
                        type="CouponAlreadyUsed",
                        location="coupon",
                        input=lease_base.coupon,
                    )
                )
            coupon_id = coupon.uid
            coupon.used = True
            session.add(coupon)
        lease = BillingLease(
            account=account_id,
            resource_id=resource_id,
            resource_type=resource_type,
            status=LeaseStatus.active,
            start_time=start_time,
            end_time=end_time,
            lease_period=lease_base.lease_period,
            auto_renew_period=lease_base.auto_renew_period,
            coupon=coupon_id,
            lease_price=priced_resource.price_name,
        )
        if lease_base.lease_period != BillingPeriod.real_time:
            account = await BillingAccount.one_by_field(session, "uid", account_id)
            amount = pricing_details.final_price
            balance_before = account.balance
            balance_after = account.balance - amount
            account.balance = balance_after
            billing_record = BillingRecord(
                type=BillingRecordType.deduction,
                amount=-amount,
                billing_time=start_time,
                balance_before=balance_before,
                balance_after=balance_after,
                account=account.uid,
                coupon=coupon_id,
                resource_id=resource_id,
                resource_type=resource_type,
                meta_data={
                    "price_name": priced_resource.price_name,
                },
            )
            session.add(account)
            session.add(billing_record)
        session.add(lease)
        return


async def renew_lease(session: SessionDep, lease: BillingLease):
    now = utcnow()
    end_time = lease.calculate_end_time(lease.end_time)
    priced_resource = PricedResourceMixin(price_name=lease.lease_price)
    lease_base = LeaseBase(
        auto_renew_period=lease.auto_renew_period, lease_period=lease.lease_period
    )
    pricing_details, coupon = await calculate_pricing_details(
        session,
        priced_resource=priced_resource,
        lease_base=lease_base,
        account=lease.account,
    )
    coupon_id = None
    if coupon:
        coupon_id = coupon.uid
    new_lease = BillingLease(
        account=lease.account,
        resource_id=lease.resource_id,
        resource_type=lease.resource_type,
        status=LeaseStatus.active,
        start_time=lease.end_time,
        end_time=end_time,
        lease_period=BillingPeriod(lease.auto_renew_period),
        auto_renew_period=lease.auto_renew_period,
        coupon=coupon_id,
        lease_price=lease.lease_price,
    )
    cache = get_redis()
    async with account_lock(cache, lease.account):
        account = await BillingAccount.one_by_field(session, "uid", lease.account)
        amount = pricing_details.final_price
        balance_before = account.balance
        balance_after = account.balance - amount
        account.balance = balance_after
        billing_record = BillingRecord(
            type=BillingRecordType.deduction,
            amount=-amount,
            billing_time=now,
            balance_before=balance_before,
            balance_after=balance_after,
            account=account.uid,
            coupon=coupon_id,
            resource_id=lease.resource_id,
            resource_type=lease.resource_type,
            meta_data={
                "price_name": priced_resource.price_name,
            },
        )
        session.add(new_lease)
        session.add(account)
        session.add(billing_record)
        await session.commit()


async def mark_expired_lease(
    session: SessionDep, lease_id: UUID, callback: Callable[[BillingLease], None]
):
    now = utcnow()
    cache = get_redis()
    async with cache.lock("lock_lease:" + str(lease_id)):
        lease = await BillingLease.one_by_field(session, "uid", lease_id)
        if not lease:
            logger.info("lease [%s] not found", lease_id)
            return
        if lease.status == LeaseStatus.expired:
            logger.info("lease %s is expired", lease)
            return
        if lease.end_time > now:
            return callback(lease)
        logger.info("lease %s is expired", lease)
        if lease.status != LeaseStatus.expired:
            lease.status = LeaseStatus.expired
            session.add(lease)
            await session.commit()
            await session.refresh(lease)
            # TODO: check balance and stop resource
        if lease.auto_renew_period != AutoRenewPeriod.none:
            await renew_lease(session, lease)


async def list_expired_unmarked_leases(
    session: SessionDep, end_time: datetime
) -> list[BillingLease]:
    statement = (
        select(BillingLease)
        .where(BillingLease.end_time <= end_time)
        .where(BillingLease.status == LeaseStatus.active)
    )

    return (await session.exec(statement)).all()
