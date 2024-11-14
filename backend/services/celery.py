import asyncio
import functools
import logging
from datetime import datetime, timezone
from sqlmodel import select
from uuid import UUID
from celery import Celery
from celery.schedules import crontab
from providers.interface import ProviderInterface
from routers.types import (
    Instance,
    InstanceStatus,
    Operation,
    ResourceUsageRecord,
    ResourceUsageType,
    Workspace,
)
from services.db import get_session
from services.lago import send_event

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


@celery.task
@sync
async def measure_usage():
    async for session in get_session():
        instances = await Instance.all_by_fields(
            session,
            {
                "status": InstanceStatus.running,
            },
        )
        for instance in instances:
            await instance.refresh(session)
            workspace = await Workspace.one_by_field(
                session, "name", instance.workspace
            )
            stmt = (
                select(ResourceUsageRecord)
                .where(ResourceUsageRecord.target_id == instance.uid)
                .order_by(ResourceUsageRecord.end_time.desc())
                .limit(1)
            )
            last_record = (await session.exec(stmt)).first()
            if last_record is None:
                start_time = instance.create_time
            else:
                start_time = last_record.end_time
            end_time = datetime.now(timezone.utc)
            start_time = start_time.replace(tzinfo=None)
            end_time = end_time.replace(tzinfo=None)
            hours = (end_time - start_time).total_seconds() / 3600
            new_record = ResourceUsageRecord(
                workspace=instance.workspace,
                zone=instance.zone,
                target_id=instance.uid,
                target_resource_type=ResourceUsageType.instance,
                start_time=start_time,
                end_time=end_time,
            )
            session.add(new_record)
            logger.info(new_record)
            send_event(new_record, workspace.uid, instance.gpu_type, str(hours))
            await session.commit()


celery.add_periodic_task(crontab(minute="0", hour="*"), measure_usage.s(), name="")
