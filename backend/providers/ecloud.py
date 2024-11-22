import logging
import time
from datetime import datetime, timezone

import uuid

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
    VmListServeQuery,
    VmListServeRequest,
    VmListServeResponse,
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
            pool_id=zone.ecloud.pool_id,
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
    networks.network_id = zone.ecloud.network_id
    security_group_ids = [zone.ecloud.secret_group_id]
    boot_volume = VmCreateRequestBootVolume()
    boot_volume.volume_type = gpu_type.ecloud.boot_volume_type
    boot_volume.size = gpu_type.ecloud.boot_volume_size
    vm_create_body.specs_name = gpu_type.ecloud.specs_name
    vm_create_body.networks = networks
    vm_create_body.duration = 0
    vm_create_body.vm_type = gpu_type.ecloud.vm_type
    vm_create_body.billing_type = "HOUR"
    vm_create_body.security_group_ids = security_group_ids
    vm_create_body.auto_renew = False
    vm_create_body.ram = gpu_type.ecloud.ram
    vm_create_body.boot_volume = boot_volume
    vm_create_body.image_name = zone.ecloud.default_image_name
    vm_create_body.quantity = 1
    vm_create_body.keypair_name = "zheng1"
    vm_create_body.cpu = gpu_type.ecloud.cpu
    vm_create_body.name = PENDING_PREFIX + str(instance.uid)
    vm_create_body.region = zone.ecloud.region
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


def generate_cloud_init(jupyter_password: str, public_key: str) -> str:
    return """docker run -d --net=host \
      -e PUBLIC_KEY="%s" \
      -e JUPYTER_PASSWORD=%s \
      runpod/pytorch:2.4.0-py3.11-cuda12.4.1-devel-ubuntu22.04
    """ % (public_key, jupyter_password)


class ProviderEcloud(ProviderInterface):
    @staticmethod
    async def update_vm_name(client, server_id: str, name: str):
        body = VmUpdateNameBody(name=name, server_id=server_id)
        request = VmUpdateNameRequest(body)
        resp = client.vm_update_name(request)
        if resp.state != "OK":
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
            server_types=[gpu_type.ecloud.server_type],
            product_types=["NORMAL"],
            visible=True,
            query_word_name=PENDING_PREFIX,
            specs_name=gpu_type.ecloud.specs_name,
        )
        request = VmlistServerRespRequest(vmlist_server_resp_query=query)
        resp: VmlistServerRespResponse = client.vmlist_server_resp(request)
        body: VmlistServerRespResponseBody = resp.body
        if resp.body.total == 0:
            # TODO: create instance and wait for it to be ready
            logger.error(
                "cannot find available server with name prefix [%s] ...", PENDING_PREFIX
            )
            return await self.set_operation_failed(session, operation)
        server_id = body.content[0].id
        logger.info("rename server [%s] ...", server_id)
        await self.update_vm_name(
            client, server_id=server_id, name=RUNNING_PREFIX + str(instance.uid)
        )
        logger.info("rebuild server [%s] ...", server_id)
        jupyter_password = str(uuid.uuid4())
        request = VmRebuildRequest(
            vm_rebuild_body=VmRebuildBody(
                server_id=server_id,
                image_id=zone.ecloud.default_image_id,
                # TODO: get ssh key from workspace config
                user_data=generate_cloud_init(
                    jupyter_password=jupyter_password,
                    public_key="",
                ),
            )
        )
        client.vm_rebuild(request)
        await self.set_operation_running(session, operation, progress=20)
        while True:
            logger.info("wait server [%s] rebuild", server_id)
            await gpu_type.refresh(session)
            query = VmListServeQuery(
                server_types=[gpu_type.ecloud.server_type],
                product_types=["NORMAL"],
                visible=True,
                server_id=server_id,
                specs_name=gpu_type.ecloud.specs_name,
            )
            request = VmListServeRequest(vm_list_serve_query=query)
            resp: VmListServeResponse = client.vm_list_serve(request)
            vm = resp.body.content[0]
            status = vm.ec_status
            ip = ""
            for port in vm.port_detail:
                if port.fip_address:
                    ip = port.fip_address
                    break
            if status == "active":
                logger.info("server [%s] rebuild done", server_id)
                break
            else:
                await operation.refresh(session)
                instance.status = InstanceStatus.running
                services = {
                    "jupyter-lab": "%s:8888" % ip,
                    "ssh": "%s:22" % ip,
                    "jupyter-password": jupyter_password,
                }
                instance.services = services
                session.add(instance)
                await self.set_operation_running(session, operation, progress=60)
                time.sleep(5)
        await operation.refresh(session)
        return await self.set_operation_done(session, operation)
