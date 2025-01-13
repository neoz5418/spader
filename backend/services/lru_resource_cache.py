from sqlmodel import select
from uuid import UUID

from routers.types import BillingLease, GPUType, Zone
from async_lru import alru_cache


@alru_cache
async def get_zone_display_name(session, zone_name):
    zone = await Zone.one_by_field(session, "name", zone_name)
    return zone.display_name


@alru_cache
async def get_gpu_type_display_name(session, gpu_type_name):
    gpu_type = await GPUType.one_by_field(session, "name", gpu_type_name)
    return gpu_type.display_name


@alru_cache
async def get_resource_lease(session, resource_id: UUID) -> BillingLease:
    stmt = (
        select(BillingLease)
        .where(BillingLease.resource_id == resource_id)
        .order_by(BillingLease.uid.desc())
        .limit(1)
    )
    result = await session.exec(stmt)
    return result.one()
