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
    Operation,
    ResourceType,
    Workspace,
)
from services.billing import (
    end_lease,
    list_expired_unmarked_leases,
    mark_expired_lease,
    process_periodic_billing,
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
        # TODO: add billing


@celery.task
@sync
async def start_instance_operation(operation_id: UUID):
    async for session in get_session():
        operation = await Operation.one_by_field(session, "uid", operation_id)
        instance = await Instance.one_by_field(session, "uid", operation.target)

        provider = ProviderInterface.get_provider("ecloud")
        await provider.start_instance(session, operation, instance)
        # TODO: add billing


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
async def check_all_user_balances():
    pass
    # async for session in get_session():
    #     workspaces = await Workspace.all(session)
    #     for workspace in workspaces:
    #         account = await get_account(session, workspace)
    #         if account.balance <= 0:
    #             logger.info("workspace %s balance is lower than 0", workspace.name)
    #             # TODO: stop all resource


@celery.task
@sync
async def measure_usage():
    async for session in get_session():
        await process_periodic_billing(session)
        await session.commit()

    check_all_user_balances.delay()


@celery.task
@sync
async def handle_expired_lease(lease_id: UUID):
    def callback(lease: BillingLease):
        return handle_expired_lease.apply_async(
            args=[lease.uid],
            eta=lease.end_time + timedelta(seconds=5),
        )

    async for session in get_session():
        await mark_expired_lease(session, lease_id=lease_id, callback=callback)


@celery.task
@sync
async def check_leases_and_schedule_tasks():
    now = utcnow()
    after_10min = now + timedelta(minutes=10)
    async for session in get_session():
        leases = await list_expired_unmarked_leases(session, now)
        for lease in leases:
            handle_expired_lease.delay(lease.uid)
        leases = await list_expired_unmarked_leases(session, after_10min)
        for lease in leases:
            handle_expired_lease.apply_async(
                args=[lease.uid],
                eta=lease.end_time,
            )


celery.add_periodic_task(
    crontab(minute="0", hour="*"),
    # crontab(minute="*", hour="*"),
    measure_usage.s(),
    name="send all resource event to billing",
)

celery.add_periodic_task(
    crontab(minute="*", hour="*"),
    # crontab(minute="*/10"),
    check_leases_and_schedule_tasks.s(),
    name="check leases every 10 minutes",
)
