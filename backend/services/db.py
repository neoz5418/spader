from sqlalchemy.ext.asyncio import create_async_engine
from sqlmodel import select, SQLModel
from sqlmodel.ext.asyncio.session import AsyncSession

from routers.types import GPUType, Provider, Role, User, Workspace, Zone
from services.security import get_secret_hash
from settings import get_settings

sqlite_file_name = "database.db"
sqlite_url = f"sqlite+aiosqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_async_engine(sqlite_url, connect_args=connect_args, future=True)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(
            SQLModel.metadata.create_all,
        )


async def get_session():
    async with AsyncSession(engine) as session:
        yield session


async def init_admin_user():
    async with AsyncSession(engine) as session:
        statement = select(User).where(User.email == "admin@localhost.dev")
        user = (await session.exec(statement)).first()
        # print(user)
        if user is not None:
            return

        user = User(
            name="admin",
            email="admin@localhost.dev",
            role=Role.global_admin,
            display_name="System Default Admin",
            hashed_password=get_secret_hash(get_settings().bootstrap_password),
            phone_number="+861234567890",
        )
        session.add(user)

        workspace = Workspace(
            name=user.name,
            owner=user.name,
            display_name=user.email,
        )

        session.add(workspace)
        await session.commit()


async def init_data():
    async with AsyncSession(engine) as session:
        beijing = Zone(
            name="beijing",
            provider=Provider.ecloud,
            provider_config={
                "provider": "ecloud",
                "region": "BJJD",
                "pool_id": "CIDC-RP-29",
                "network_id": "02d27f9b-60dd-405f-83f7-b815daf0a5bc",
                "security_group_id": "ad77b961-b606-4427-abdf-42dff277efb6",
                "default_image_name": "zheng1-1",
                "default_image_id": "dcac0a39-ad40-4e93-b2a0-b2c7280f5d99",
            },
        )
        await Zone.create_or_update(session, beijing)
        # xiamen = Zone(name="xiamen", provider=Provider.ecloud)
        # jinan = Zone(name="jinan", provider=Provider.ecloud)
        # shanghai = Zone(name="shanghai", provider=Provider.ecloud)
        # guangzhou = Zone(name="guangzhou", provider=Provider.ecloud)
        # chongqing = Zone(name="chongqing", provider=Provider.ecloud)
        # xian = Zone(name="xian", provider=Provider.ecloud)
        # hohhot = Zone(name="hohhot", provider=Provider.ecloud)
        # Suzhou = Zone(name="Suzhou", provider=Provider.ecloud)
        beijing_v100 = GPUType(
            name="beijing_v100",
            display_name="NVIDIA Tesla V100",
            description="",
            gpuMemory="32GB",
            memory="64GB",
            cpu=8,
            disk_size="100GB",
            disk_type="SSD",
            zone="beijing",
            provider_config={
                "provider": "ecloud",
                "boot_volume_type": "highPerformance",
                "boot_volume_size": 50,
                "specs_name": "g4v.2xlarge.8",
                "vm_type": "gpu",
                "ram": 64,
                "cpu": 8,
                "server_type": "VM",
            },
        )
        await GPUType.create_or_update(session, beijing_v100)
