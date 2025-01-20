import asyncio
import functools
import logging
from datetime import timedelta
from uuid import UUID

from celery import Celery
from celery.schedules import crontab

from providers.interface import ProviderInterface
from routers.types import (
    BillingLease,
    GPUType,
    Instance,
    LeaseStatus,
    Operation,
    OperationStatus,
    OperationType,
    ResourceType,
    Workspace,
)
from services.billing import (
    end_lease,
    get_lease,
    get_realtime_account,
    list_account_active_realtime_leases,
    list_active_realtime_leases,
    list_expired_or_in_debt_leases,
    list_completed_unmarked_leases,
    mark_completed_lease,
    renew_realtime_lease,
    start_resource_billing_record,
)
from services.common import utcnow
from services.db import get_session

# TODO: use redis as broker
celery = Celery(
    "worker", broker="redis://localhost:6379", backend="redis://localhost:6379"
)

celery.conf.update(task_track_started=True)

logger = logging.getLogger(__name__)

celery.conf.broker_connection_retry_on_startup = True


def sync(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        loop = asyncio.get_event_loop()
        return loop.run_until_complete(f(*args, **kwargs))

    return wrapper


@celery.task
@sync
async def create_instance_operation(operation_id: UUID):
    async for session in get_session():
        operation = await Operation.one_by_field(session, "uid", operation_id)
        instance = await Instance.one_by_field(session, "uid", operation.target)

        provider = ProviderInterface.get_provider("ecloud")
        await provider.create_instance(session, operation, instance)
        await instance.refresh(session)

        workspace = await Workspace.one_by_field(session, "name", instance.workspace)
        gpu_type = await GPUType.one_by_field(session, "name", instance.gpu_type)

        await start_resource_billing_record(
            session,
            account_id=workspace.uid,
            resource_id=instance.uid,
            resource_type=ResourceType.instance,
            start_time=utcnow(),
            priced_resource=gpu_type,
        )

        await session.commit()


@celery.task
@sync
async def stop_instance_operation(operation_id: UUID):
    async for session in get_session():
        operation = await Operation.one_by_field(session, "uid", operation_id)
        instance = await Instance.one_by_field(session, "uid", operation.target)

        provider = ProviderInterface.get_provider("ecloud")
        await provider.stop_instance(session, operation, instance)


@celery.task
@sync
async def start_instance_operation(operation_id: UUID):
    async for session in get_session():
        operation = await Operation.one_by_field(session, "uid", operation_id)
        instance = await Instance.one_by_field(session, "uid", operation.target)

        provider = ProviderInterface.get_provider("ecloud")
        await provider.start_instance(session, operation, instance)


@celery.task
@sync
async def delete_instance_operation(operation_id: UUID):
    async for session in get_session():
        operation = await Operation.one_by_field(session, "uid", operation_id)
        instance = await Instance.one_by_field(session, "uid", operation.target)
        workspace = await Workspace.one_by_field(session, "name", instance.workspace)

        provider = ProviderInterface.get_provider("ecloud")
        await provider.delete_instance(session, operation, instance)
        await instance.refresh(session)
        await instance.delete(session)
        await workspace.refresh(session)

        await end_lease(
            session,
            account_id=workspace.uid,
            resource_id=instance.uid,
            end_time=utcnow(),
        )


@celery.task
@sync
async def handle_realtime_lease(lease_id: UUID):
    async for session in get_session():
        await renew_realtime_lease(session=session, lease_id=lease_id)


"""
graph TD
    %% 租约和实例的初始状态
    A[Lease: active && Instance: running] -->|账户欠费| B[Lease: in_debt && Instance: terminated]
    A -->|周期租约到期| C[Lease: expired && Instance: terminated]

    %% 账户欠费的影响
    B -->|暂停2小时后| D[Lease: deleted && Instance: deleted]

    %% 周期租约到期的影响
    C -->|暂停2小时后| D

    %% 账户欠费会影响所有租约
    E[Account in arrears] -->|暂停所有租约| B
"""


@celery.task
@sync
async def pause_lease(lease_id: UUID, lease_status: LeaseStatus):
    async for session in get_session():
        lease = await get_lease(session, lease_id)
        if lease.resource_type == ResourceType.instance:
            logger.info("instance [%s] need pause", lease.resource_id)
            instance = await Instance.one_by_field(session, "uid", lease.resource_id)
            operation_creation = Operation(
                type=OperationType.stop_instance,
                workspace=instance.workspace,
                zone=instance.zone,
                create_time=utcnow(),
                target=instance.uid,
                user=UUID(int=0),
                status=OperationStatus.pending,
                progress=0,
            )
            operation = await Operation.create(session, operation_creation)
            stop_instance_operation.delay(operation.uid)
            lease.status = lease_status
            lease.end_time = utcnow()
            await lease.update(session)


@celery.task
@sync
async def delete_lease(lease_id: UUID):
    async for session in get_session():
        lease = await get_lease(session, lease_id)
        if lease.resource_type == ResourceType.instance:
            logger.info("instance [%s] need delete", lease.resource_id)
            instance = await Instance.one_by_field(session, "uid", lease.resource_id)
            operation_creation = Operation(
                type=OperationType.delete_instance,
                workspace=instance.workspace,
                zone=instance.zone,
                create_time=utcnow(),
                target=instance.uid,
                user=UUID(int=0),
                status=OperationStatus.pending,
                progress=0,
            )
            operation = await Operation.create(session, operation_creation)
            delete_instance_operation.delay(operation.uid)
            lease.status = LeaseStatus.deleted
            lease.end_time = utcnow()
            await lease.update(session)


@celery.task
@sync
async def handle_account_balance(account_id: UUID):
    async for session in get_session():
        realtime_account = await get_realtime_account(session, account_id)
        if realtime_account.balance <= 0:
            leases = await list_account_active_realtime_leases(session, account_id)
            for lease in leases:
                pause_lease.delay(lease.uid, LeaseStatus.in_debt)


@celery.task
@sync
async def measure_usage():
    async for session in get_session():
        leases = await list_active_realtime_leases(session)
        accounts = set()
        for lease in leases:
            accounts.add(lease.account)
            handle_realtime_lease.delay(lease.uid)
        for account in accounts:
            handle_account_balance.apply_async(
                args=[account],
                countdown=10,
            )


@celery.task
@sync
async def complete_lease(lease_id: UUID):
    def check_lease_next_time(lease: BillingLease):
        return complete_lease.apply_async(
            args=[lease.uid],
            eta=lease.end_time + timedelta(seconds=5),
        )

    def pause_resource_on_arrears():
        pause_lease.delay(lease_id, LeaseStatus.in_debt)

    def pause_resource_due_to_expiry():
        pause_lease.delay(lease_id, LeaseStatus.expired)

    async for session in get_session():
        await mark_completed_lease(
            session,
            lease_id=lease_id,
            check_lease_next_time=check_lease_next_time,
            pause_resource_due_to_expiry=pause_resource_due_to_expiry,
            pause_resource_on_arrears=pause_resource_on_arrears,
        )


@celery.task
@sync
async def check_leases_and_schedule_tasks():
    now = utcnow()
    after_10min = now + timedelta(minutes=10)
    two_hours_ago = now - timedelta(hours=2)
    async for session in get_session():
        leases = await list_completed_unmarked_leases(session, now)
        for lease in leases:
            complete_lease.delay(lease.uid)
        leases = await list_completed_unmarked_leases(session, after_10min)
        for lease in leases:
            complete_lease.apply_async(
                args=[lease.uid],
                eta=lease.end_time,
            )
        leases = await list_expired_or_in_debt_leases(session, two_hours_ago)
        for lease in leases:
            delete_lease.delay(lease.uid)


celery.add_periodic_task(
    crontab(minute="0", hour="*"),
    # crontab(minute="*", hour="*"),
    measure_usage.s(),
    name="send all resource event to billing",
)

celery.add_periodic_task(
    # crontab(minute="*", hour="*"),
    crontab(minute="*/10"),
    check_leases_and_schedule_tasks.s(),
    name="check leases every 10 minutes",
)
