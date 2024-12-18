from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache


class Settings(BaseSettings):
    bootstrap_password: str
    jwt_secret_key: str
    redis_host: str

    smtp_host: str
    smtp_port: int
    smtp_user: str
    smtp_password: str

    ecloud_access_key: str
    ecloud_secret_key: str
    ecloud_pool_id: str

    lago_host: str
    lago_key: str
    lago_org_id: str
    lago_plan_code: str

    model_config = SettingsConfigDict(env_file=".env")


@lru_cache
def get_settings():
    return Settings()
