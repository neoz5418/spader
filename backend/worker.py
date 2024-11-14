# start_worker.py
from services.celery import celery
from services.logger import setup_logging

setup_logging()

if __name__ == "__main__":
    args = ["worker", "--loglevel=INFO", "-B"]
    celery.worker_main(argv=args)
