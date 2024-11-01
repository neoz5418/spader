import os

from sqlmodel import select, SQLModel
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    create_async_engine,
)
from sqlmodel.ext.asyncio.session import AsyncSession

from routers.types import Role, User
from services.security import get_secret_hash

sqlite_file_name = "database.db"
sqlite_url = f"sqlite+aiosqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_async_engine(sqlite_url, connect_args=connect_args)

async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(
            SQLModel.metadata.create_all,
        )


async def get_session():
    async with AsyncSession(engine) as session:
        yield session


bootstrap_password = os.environ.get("BOOTSTRAP_PASSWORD", "Zhu88jie!")

async def init_admin_user():
    async with AsyncSession(engine) as session:
        statement = select(User).where(User.email == "admin@localhost")
        user = (await session.exec(statement)).first()
        # print(user)
        if user is not None:
            return

        user = User(
            name="admin",
            email="admin@localhost",
            role=Role.global_admin,
            display_name="System Default Admin",
            hashed_password= get_secret_hash(bootstrap_password),
            phone_number="+861234567890",
        )
        session.add(user)
        await session.commit()
