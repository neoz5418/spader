import asyncio
import functools
import logging
from uuid import UUID

from celery import Celery
from celery.schedules import crontab

from providers.interface import ProviderInterface
from routers.types import (
    GPUType,
    Instance,
    Operation,
    ResourceType,
    Workspace,
)
from services.billing import (
    end_resource_billing_record,
    process_periodic_billing,
    start_resource_billing_record,
    get_account,
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
        return asyncio.run(f(*args, **kwargs))

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
            workspace=workspace,
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

        await end_resource_billing_record(
            session, workspace=workspace, resource_id=instance.uid, end_time=utcnow()
        )
        await session.commit()


@celery.task
@sync
async def check_all_user_balances():
    async for session in get_session():
        workspaces = await Workspace.all(session)
        for workspace in workspaces:
            account = await get_account(session, workspace)
            if account.balance <= 0:
                logger.info("workspace %s balance is lower than 0", workspace.name)
                # TODO: stop all resource


@celery.task
@sync
async def measure_usage():
    async for session in get_session():
        await process_periodic_billing(session)
        await session.commit()

    check_all_user_balances.delay()


celery.add_periodic_task(
    crontab(minute="0", hour="*"),
    # crontab(minute="*", hour="*"),
    measure_usage.s(),
    name="send all resource event to billing",
)
