from datetime import datetime

from sqlalchemy.ext.asyncio import create_async_engine
from sqlmodel import select, SQLModel
from sqlmodel.ext.asyncio.session import AsyncSession

from routers.types import (
    BillingCouponClaimLimit,
    BillingCouponClass,
    BillingCouponDistributionRule,
    BillingPrice,
    CouponType,
    Currency,
    DiskType,
    GPUType,
    Provider,
    Role,
    User,
    Workspace,
    Zone,
)
from services.security import get_secret_hash
from settings import get_settings
from services.db_accelerator import init_accelerator_types

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
    # async with engine.begin() as conn:
    #     await conn.run_sync(SQLModel.metadata.create_all)

    async with AsyncSession(engine) as session:
        beijing = Zone(
            name="beijing",
            display_name="北京区【测试不可用】",
            provider=Provider.ecloud,
            provider_config={
                "provider": "ecloud",
                "region": "BJJD",
                "pool_id": "CIDC-RP-29",
                "network_id": "02d27f9b-60dd-405f-83f7-b815daf0a5bc",
                "security_group_id": "ad77b961-b606-4427-abdf-42dff277efb6",
                "default_image_name": "base-image-1",
                "default_image_id": "e1bd4aa0-8d7e-45ec-8b82-77586cbbaf76",
            },
        )
        guangzhou = Zone(
            name="guangzhou",
            display_name="广州区",
            provider=Provider.ecloud,
            provider_config={
                "provider": "ecloud",
                "region": "N020-GD-GZNJ01",
                "pool_id": "CIDC-RP-26",
                "network_id": "30766f53-054d-4b26-ab95-a148e8e0d1fd",
                "security_group_id": "a90d5a36-0354-4160-88a6-ff884a429aac",
                "default_image_name": "base-image-6",
                "default_image_id": "1f58dab1-7843-4f22-978f-de8403289903",
            },
        )
        await Zone.create_or_update(session, beijing)
        await Zone.create_or_update(session, guangzhou)
        # xiamen = Zone(name="xiamen", provider=Provider.ecloud)
        # jinan = Zone(name="jinan", provider=Provider.ecloud)
        # shanghai = Zone(name="shanghai", provider=Provider.ecloud)
        # guangzhou = Zone(name="guangzhou", provider=Provider.ecloud)
        # chongqing = Zone(name="chongqing", provider=Provider.ecloud)
        # xian = Zone(name="xian", provider=Provider.ecloud)
        # hohhot = Zone(name="hohhot", provider=Provider.ecloud)
        # Suzhou = Zone(name="Suzhou", provider=Provider.ecloud)
        v100_price_name = "v100-cny"
        v100_price = BillingPrice(
            name=v100_price_name,
            currency=Currency.CNY,
            real_time=10000,
            one_hour=10000,
            one_day=240000,
            one_month=7200000,
            one_week=1680000,
        )
        cpu001_price_name = "cpu001-cny"
        cpu001_price = BillingPrice(
            name=cpu001_price_name,
            currency=Currency.CNY,
            real_time=3000,
            one_hour=3000,
            one_day=72000,
            one_month=2160000,
            one_week=504000,
        )
        await BillingPrice.create_or_update(session, v100_price)
        await BillingPrice.create_or_update(session, cpu001_price)
        ascend_910b_1 = GPUType(
            name="ascend_910b_1",
            display_name="Huawei Ascend 910B",
            description="",
            gpu_memory="32GB",
            memory="64GB",
            cpu=8,
            disk_size="100GB",
            disk_type=DiskType.SSD,
            zones=["beijing", "guangzhou"],
            price_name=v100_price_name,
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
            accelerator=1,
            accelerator_type="v100_pcie",
        )
        v100_1 = GPUType(
            name="v100",
            display_name="NVIDIA Tesla V100",
            description="",
            gpu_memory="32GB",
            memory="64GB",
            cpu=8,
            disk_size="100GB",
            disk_type=DiskType.SSD,
            zones=["beijing", "guangzhou"],
            price_name=v100_price_name,
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
            accelerator=1,
            accelerator_type="v100_pcie",
        )
        v100_2 = GPUType(
            name="v100_2",
            display_name="NVIDIA Tesla V100",
            description="",
            gpu_memory="32GB",
            memory="64GB",
            cpu=8,
            disk_size="100GB",
            disk_type=DiskType.SSD,
            zones=["beijing", "guangzhou"],
            price_name=v100_price_name,
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
            accelerator=2,
            accelerator_type="v100_pcie",
        )
        v100_8 = GPUType(
            name="v100_8",
            display_name="NVIDIA Tesla V100",
            description="",
            gpu_memory="32GB",
            memory="64GB",
            cpu=8,
            disk_size="100GB",
            disk_type=DiskType.SSD,
            zones=["beijing", "guangzhou"],
            price_name=v100_price_name,
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
            accelerator=8,
            accelerator_type="v100_pcie",
        )
        cpu001 = GPUType(
            name="cpu001",
            display_name="CPU Instance",
            description="",
            gpu_memory="0",
            memory="16GB",
            cpu=8,
            disk_size="100GB",
            disk_type=DiskType.SSD,
            zones=["beijing", "guangzhou"],
            price_name=cpu001_price_name,
            provider_config={
                "provider": "ecloud",
                "boot_volume_type": "highPerformance",
                "boot_volume_size": 50,
                "specs_name": "c5.large.2",
                "vm_type": "gpu",
                "ram": 16,
                "cpu": 8,
                "server_type": "VM",
            },
            accelerator=0,
        )
        await GPUType.create_or_update(session, ascend_910b_1)
        await GPUType.create_or_update(session, v100_1)
        await GPUType.create_or_update(session, v100_2)
        await GPUType.create_or_update(session, v100_8)
        await GPUType.create_or_update(session, cpu001)
        coupon_class_50_name = "new_user_50_percent_off"
        coupon_class_10_name = "new_user_10_percent_off"
        coupon_class_50 = BillingCouponClass(
            name=coupon_class_50_name,
            display_name="【新人福利】5 折优惠券",
            type=CouponType.discount,
            valid_from=datetime(year=2025, month=1, day=1),
            valid_to=datetime(year=2026, month=1, day=1),
            max_discount_value=200000,
            min_purchase=30000,
            discount_rate=50,
            distribution_rule=BillingCouponDistributionRule.auto_registered,
            claim_limit=BillingCouponClaimLimit.once_per_account,
        )
        coupon_class_10 = BillingCouponClass(
            name=coupon_class_10_name,
            display_name="【新人福利】1 折优惠券",
            type=CouponType.discount,
            valid_from=datetime(year=2025, month=1, day=1),
            valid_to=datetime(year=2026, month=1, day=1),
            max_discount_value=2000,
            min_purchase=500,
            discount_rate=10,
            distribution_rule=BillingCouponDistributionRule.auto_registered,
            claim_limit=BillingCouponClaimLimit.once_per_account,
        )
        for i in range(1, 5):
            coupon_class_50.name = coupon_class_50_name + "00" + str(i)
            coupon_class_10.name = coupon_class_10_name + "00" + str(i)
            await BillingCouponClass.create_or_update(session, coupon_class_50)
            await BillingCouponClass.create_or_update(session, coupon_class_10)
        
        # 添加加速器类型数据
        await init_accelerator_types(session)
