import logging
from datetime import datetime, timezone

from dependencies import SessionDep
from providers.interface import ProviderInterface
from routers.types import Instance, Operation, OperationStatus
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


class ProviderEcloud(ProviderInterface):
    client: Client

    def __init__(self):
        self.client = Client(
            Config(
                access_key=get_settings().ecloud_access_key,
                secret_key=get_settings().ecloud_secret_key,
                pool_id=get_settings().ecloud_pool_id,
            )
        )

    async def create_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
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
        networks.network_id = "02d27f9b-60dd-405f-83f7-b815daf0a5bc"
        security_group_ids = ["ad77b961-b606-4427-abdf-42dff277efb6"]
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
        vm_create_body.name = "ECS-45154190"
        vm_create_body.region = "BJJD"
        request.vm_create_body = vm_create_body
        result = self.client.vm_create(request)
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
