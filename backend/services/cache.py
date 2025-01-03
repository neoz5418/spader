from redis.asyncio import ConnectionPool, Redis
from settings import get_settings

redis_pool: ConnectionPool


def init_redis():
    redis_host = get_settings().redis_host
    global redis_pool
    redis_pool = ConnectionPool.from_url(
        f"redis://{redis_host}:6379?decode_responses=True"
    )


def get_redis() -> Redis:
    global redis_pool
    return Redis.from_pool(connection_pool=redis_pool)
