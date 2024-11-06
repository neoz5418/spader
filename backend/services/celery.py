import logging

from celery import Celery
# from .cache import get_redis

# TODO: use redis as broker
celery = Celery("worker", broker='redis://localhost:6379', backend='redis://localhost:6379')

celery.conf.update(task_track_started=True)

logger = logging.getLogger(__name__)

@celery.task
def create_operation(operation):
    logger.info(operation)
    # TODO: call api to execute operation
    return True