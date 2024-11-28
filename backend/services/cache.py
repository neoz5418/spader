from functools import lru_cache

import redis.asyncio as redis

from settings import get_settings


@lru_cache
def get_redis() -> redis.Redis:
    redis_host = get_settings().redis_host
    pool = redis.ConnectionPool.from_url(
        f"redis://{redis_host}:6379?decode_responses=True"
    )
    return redis.Redis(connection_pool=pool)
