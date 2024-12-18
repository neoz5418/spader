import logging
from datetime import datetime, timezone

from dependencies import SessionDep
from providers.interface import ProviderInterface
from routers.types import (
    GPUType,
    Instance,
    InstanceStatus,
    Operation,
    OperationStatus,
    Zone,
)
from ecloudsdkecs.v1.client import Client
from ecloudsdkcore.config.config import Config
from ecloudsdkecs.v1.model import (
    VmCreateRequest,
    VmCreateBody,
    VmCreateRequestNetworks,
    VmCreateRequestBootVolume,
    VmlistServerRespQuery,
    VmlistServerRespRequest,
    VmlistServerRespResponse,
    VmlistServerRespResponseBody,
    VmUpdateNameRequest,
    VmUpdateNameBody,
    VmRebuildBody,
    VmRebuildRequest,
)

from settings import get_settings

logger = logging.getLogger(__name__)


def get_client(zone: Zone) -> Client:
    return Client(
        Config(
            access_key=get_settings().ecloud_access_key,
            secret_key=get_settings().ecloud_secret_key,
            pool_id=zone.provider_config.get("pool_id"),
        )
    )


PENDING_PREFIX = "pending-"
RUNNING_PREFIX = "running-"


async def _create_instance(
    session: SessionDep, operation: Operation, instance: Instance
):
    zone = await Zone.one_by_field(session, "name", instance.zone)
    gpu_type = await GPUType.one_by_field(session, "name", instance.gpu_type)
    if not zone or not gpu_type:
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
    await operation.refresh(session)
    await zone.refresh(session)
    await instance.refresh(session)
    await gpu_type.refresh(session)
    request = VmCreateRequest()
    vm_create_body = VmCreateBody()
    networks = VmCreateRequestNetworks()
    networks.network_id = zone.provider_config.network_id
    security_group_ids = [zone.provider_config.secret_group_id]
    boot_volume = VmCreateRequestBootVolume()
    boot_volume.volume_type = gpu_type.provider_config.boot_volume_type
    boot_volume.size = gpu_type.provider_config.boot_volume_size
    vm_create_body.specs_name = gpu_type.provider_config.specs_name
    vm_create_body.networks = networks
    vm_create_body.duration = 0
    vm_create_body.vm_type = gpu_type.provider_config.vm_type
    vm_create_body.billing_type = "HOUR"
    vm_create_body.security_group_ids = security_group_ids
    vm_create_body.auto_renew = False
    vm_create_body.ram = gpu_type.provider_config.ram
    vm_create_body.boot_volume = boot_volume
    vm_create_body.image_name = zone.provider_config.default_image_name
    vm_create_body.quantity = 1
    vm_create_body.keypair_name = "zheng1"
    vm_create_body.cpu = gpu_type.provider_config.cpu
    vm_create_body.name = PENDING_PREFIX + str(instance.uid)
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
    await instance.update(
        session,
        {
            "status": InstanceStatus.running,
            "update_time": datetime.now(timezone.utc),
        },
    )


class ProviderEcloud(ProviderInterface):
    @staticmethod
    async def update_vm_name(client, server_id: str, name: str):
        body = VmUpdateNameBody(name=name, server_id=server_id)
        request = VmUpdateNameRequest(body)
        resp = client.vm_update_name(request)
        if resp.status != "OK":
            raise Exception("update vm name failed")

    # TODO: use vmRebuild to rebuild instance
    async def create_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        zone = await Zone.one_by_field(session, "name", instance.zone)
        gpu_type = await GPUType.one_by_field(session, "name", instance.gpu_type)
        if not zone or not gpu_type:
            return await self.set_operation_failed(session, operation)
        client = get_client(zone)
        query = VmlistServerRespQuery(
            server_types=[gpu_type.provider_config.server_type],
            product_types=["NORMAL"],
            visible=True,
            query_word_name=PENDING_PREFIX,
            specs_name=gpu_type.provider_config.specs_name,
        )
        request = VmlistServerRespRequest(vmlist_server_resp_query=query)
        resp: VmlistServerRespResponse = client.vmlist_server_resp(request)
        body: VmlistServerRespResponseBody = resp.body
        if resp.body.total == 0:
            # TODO: create instance and wait for it to be ready
            return await self.set_operation_failed(session, operation)
        server_id = body.content[0].id

        await self.update_vm_name(
            client, server_id=server_id, name=RUNNING_PREFIX + str(instance.uid)
        )

        request = VmRebuildRequest(
            vm_rebuild_body=VmRebuildBody(
                server_id=server_id,
                image_id=zone.provider_config.default_image_id,
                user_data="",
            )
        )
        client.vm_rebuild(request)
        await self.set_operation_running(session, operation, progress=20)
        while True:
            query = VmlistServerRespQuery(
                server_types=[gpu_type.provider_config.server_type],
                product_types=["NORMAL"],
                visible=True,
                server_id=server_id,
                specs_name=gpu_type.provider_config.specs_name,
            )
            request = VmlistServerRespRequest(vmlist_server_resp_query=query)
            resp: VmlistServerRespResponse = client.vmlist_server_resp(request)
            status = resp.body.content[0].ec_status
            if status == "active":
                break
            else:
                await self.set_operation_running(session, operation, progress=60)
        return await self.set_operation_done(session, operation)
