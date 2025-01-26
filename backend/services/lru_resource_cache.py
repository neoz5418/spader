from typing import Optional
from uuid import UUID

from routers.types import BillingCoupon, BillingLease, GPUType, Zone
from async_lru import alru_cache

from services.billing import get_resource_lease
from services.billing import (
    get_resource_lease,
    get_price,
)


@alru_cache
async def get_zone_display_name(session, zone_name):
    zone = await Zone.one_by_field(session, "name", zone_name)
    return zone.display_name


@alru_cache
async def get_gpu_type_display_name(session, gpu_type_name):
    gpu_type = await GPUType.one_by_field(session, "name", gpu_type_name)
    return gpu_type.display_name


@alru_cache
async def get_resource_lease_from_cache(session, resource_id: UUID) -> BillingLease:
    return await get_resource_lease(session, resource_id=resource_id)


@alru_cache
async def get_coupon(session, coupon_id: Optional[UUID]) -> Optional[BillingCoupon]:
    if not coupon_id:
        return None
    return await BillingCoupon.one_by_field(session, "uid", coupon_id)


@alru_cache
async def get_gpu_type(session, gpu_type_name: str) -> Optional[GPUType]:
    return await GPUType.one_by_field(session, "name", gpu_type_name)


@alru_cache
async def get_price_from_cache(session, lease_price: str) -> int:
    return await get_price(session, lease_price)
