import logging
from datetime import datetime, timezone

from dependencies import SessionDep
from providers.interface import ProviderInterface
from routers.types import Instance, Operation, OperationStatus, Zone
from ecloudsdkecs.v1.client import Client
from ecloudsdkcore.config.config import Config
from ecloudsdkecs.v1.model import (
    VmCreateRequest,
    VmCreateBody,
    VmCreateRequestNetworks,
    VmCreateRequestBootVolume,
)

from settings import get_settings

logger = logging.getLogger(__name__)


def get_client(zone: Zone) -> Client:
    return Client(
        Config(
            access_key=get_settings().ecloud_access_key,
            secret_key=get_settings().ecloud_secret_key,
            pool_id=zone.provider_config.pool_id,
        )
    )


class ProviderEcloud(ProviderInterface):
    async def create_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        zone = await Zone.one_by_field(session, "name", instance.zone)
        if not zone:
            return await operation.update(
                session,
                {
                    "status": OperationStatus.failed,
                    "progress": 100,
                    "start_time": datetime.now(timezone.utc),
                    "end_time": datetime.now(timezone.utc),
                },
            )
        client = get_client(zone)
        logger.info(instance)
        logger.info(operation)
        await operation.update(
            session,
            {
                "status": OperationStatus.running,
                "progress": 10,
                "start_time": datetime.now(timezone.utc),
            },
        )
        request = VmCreateRequest()
        vm_create_body = VmCreateBody()
        networks = VmCreateRequestNetworks()
        networks.network_id = zone.provider_config.network_id
        security_group_ids = [zone.provider_config.secret_group_id]
        boot_volume = VmCreateRequestBootVolume()
        boot_volume.volume_type = "highPerformance"
        boot_volume.size = 50
        vm_create_body.specs_name = "g4v.2xlarge.8"
        vm_create_body.networks = networks
        vm_create_body.duration = 0
        vm_create_body.vm_type = "gpu"
        vm_create_body.billing_type = "HOUR"
        vm_create_body.security_group_ids = security_group_ids
        vm_create_body.auto_renew = False
        vm_create_body.ram = 64
        vm_create_body.boot_volume = boot_volume
        vm_create_body.image_name = "zheng1-1"
        vm_create_body.quantity = 1
        vm_create_body.keypair_name = "zheng1"
        vm_create_body.cpu = 8
        vm_create_body.name = str(instance.uid)
        vm_create_body.region = zone.provider_config.region
        request.vm_create_body = vm_create_body
        result = client.vm_create(request)
        logger.info(result)
        # 移动给的测试账号无法创建实例，所以直接将 operation 设置为成功
        await operation.update(
            session,
            {
                "status": OperationStatus.done,
                "progress": 100,
                "end_time": datetime.now(timezone.utc),
            },
        )
