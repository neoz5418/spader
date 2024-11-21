import asyncio
import functools
import logging
from datetime import datetime, timezone

import uuid
from celery import Celery
from celery.schedules import crontab
from sqlmodel import select
from uuid import UUID

from providers.interface import ProviderInterface
from routers.types import (
    Instance,
    InstanceStatus,
    Operation,
    ResourceUsageRecord,
    ResourceUsageType,
    Workspace,
)
from services.common import utcnow
from services.db import get_session
from services.lago import get_account, send_event

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
        start_time = utcnow()
        last_record = ResourceUsageRecord(
            workspace=instance.workspace,
            zone=instance.zone,
            target_id=instance.uid,
            target_resource_type=ResourceUsageType.instance,
            start_time=start_time,
            end_time=datetime.min,
            billing_cycle_group=UUID("00000000-0000-0000-0000-000000000000"),
        )
        session.add(last_record)
        await session.commit()


@celery.task
@sync
async def check_all_user_balances():
    async for session in get_session():
        workspaces = await Workspace.all(session)
        for workspace in workspaces:
            account = get_account(workspace)
            if account.balance <= 0:
                logger.info("workspace %s balance is lower than 0", workspace.name)


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
        ws_billing_cycle_group = {}

        def get_ws_billing_cycle_group(ws, gpu_type):
            key = "ws=%s&gpu:%s" % (ws, gpu_type)
            if key not in ws_billing_cycle_group:
                ws_billing_cycle_group[key] = uuid.uuid4()
            return ws_billing_cycle_group[key]

        # It seems that Lago has some bugs. For the same workspace and the same type of GPU,
        # billing events must be combined; otherwise, individual records won’t appear in its invoice or wallet.
        ws_gpu_hours = {}
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
            need_update = False
            if last_record is None:
                start_time = instance.create_time
            elif last_record.end_time == datetime.min:
                start_time = last_record.start_time
                need_update = True
            else:
                start_time = last_record.end_time
            end_time = utcnow()
            start_time = start_time.replace(tzinfo=timezone.utc)
            hours = (end_time - start_time).seconds / 3600
            if need_update:
                last_record.end_time = end_time
                last_record.billing_cycle_group = get_ws_billing_cycle_group(
                    workspace.uid, instance.gpu_type
                )
            else:
                last_record = ResourceUsageRecord(
                    workspace=instance.workspace,
                    zone=instance.zone,
                    target_id=instance.uid,
                    target_resource_type=ResourceUsageType.instance,
                    billing_cycle_group=get_ws_billing_cycle_group(
                        workspace.uid, instance.gpu_type
                    ),
                    start_time=start_time,
                    end_time=end_time,
                )
            session.add(last_record)
            logger.info(last_record)
            if workspace.uid not in ws_gpu_hours:
                ws_gpu_hours[workspace.uid] = {}
            if instance.gpu_type not in ws_gpu_hours[workspace.uid]:
                ws_gpu_hours[workspace.uid][instance.gpu_type] = 0
            ws_gpu_hours[workspace.uid][instance.gpu_type] += hours
            await session.commit()

        for ws, gpu_hours in ws_gpu_hours.items():
            for gpu_type, hours in gpu_hours.items():
                billing_cycle_group = get_ws_billing_cycle_group(ws, gpu_type)
                send_event(billing_cycle_group, ws, gpu_type, str(hours))

    check_all_user_balances.delay()


celery.add_periodic_task(
    crontab(minute="0", hour="*"),
    # crontab(minute="*", hour="*"),
    measure_usage.s(),
    name="send all resource event to lago",
)
