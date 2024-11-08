import asyncio
import functools
import logging
from uuid import UUID

from celery import Celery

from providers.interface import ProviderInterface
from routers.types import Instance, Operation
from services.db import get_session

# TODO: use redis as broker
celery = Celery(
    "worker", broker="redis://localhost:6379", backend="redis://localhost:6379"
)

celery.conf.update(task_track_started=True)

logger = logging.getLogger(__name__)


def sync(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        return asyncio.get_event_loop().run_until_complete(f(*args, **kwargs))

    return wrapper


@celery.task
@sync
async def create_instance_operation(operation_id: UUID):
    async for session in get_session():
        operation = await Operation.one_by_field(session, "uid", operation_id)
        instance = await Instance.one_by_field(session, "uid", operation.target)

        provider = ProviderInterface.get_provider("ecloud")
        await provider.create_instance(session, operation, instance)
