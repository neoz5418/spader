# start_worker.py
from services.celery import celery
from services.logger import setup_logging
from services.cache import init_redis

setup_logging()
init_redis()

if __name__ == "__main__":
    args = ["worker", "--loglevel=INFO", "-B"]
    celery.worker_main(argv=args)
