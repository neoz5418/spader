from functools import lru_cache

import redis.asyncio as redis
from fakeredis import FakeAsyncRedis as FakeRedis

from settings import get_settings


@lru_cache
def get_redis() -> redis.Redis:
    redis_host = get_settings().redis_host
    if redis_host == "FakeRedis":
        return FakeRedis(server_type="redis")
    pool = redis.ConnectionPool.from_url(
        f"redis://{redis_host}:6379?decode_responses=True&health_check_interval=2&protocol=3"
    )
    return redis.Redis(connection_pool=pool)
