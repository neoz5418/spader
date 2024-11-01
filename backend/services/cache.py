from functools import lru_cache
from fakeredis import FakeAsyncRedis as FakeRedis
from threading import Thread
import redis.asyncio as redis
import os

REDIS_HOST = os.getenv('REDIS_HOST', 'FakeRedis')

redis_fake = FakeRedis(server_type="redis")

@lru_cache
def get_redis() -> redis.Redis:
    if REDIS_HOST == 'FakeRedis':
        return redis_fake
    pool = redis.ConnectionPool.from_url(f'redis://{REDIS_HOST}:6379?decode_responses=True&health_check_interval=2&protocol=3')
    return redis.Redis(connection_pool=pool)

