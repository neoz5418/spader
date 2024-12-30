import logging
import time
from datetime import datetime, timezone

import uuid

from ecloudsdkcore.param.api_params import ApiParams
from ecloudsdkecs.v1 import (
    VmListServeResponseContent,
    VmlistServerRespQuery,
    VmlistServerRespRequest,
    VmlistServerRespResponse,
    VmlistServerRespResponseBody,
    VmUpdateNameResponse,
)
from pydantic import BaseModel

from dependencies import SessionDep
from providers.interface import ProviderInterface
from routers.types import (
    GPUType,
    Instance,
    InstanceStatus,
    Operation,
    OperationStatus,
    SSHKey,
    Zone,
)
from ecloudsdkecs.v1.client import Client
from ecloudsdkcore.config.config import Config
from ecloudsdkecs.v1.model import (
    VmCreateRequest,
    VmCreateBody,
    VmCreateRequestNetworks,
    VmCreateRequestBootVolume,
    VmListServeQuery,
    VmListServeRequest,
    VmListServeResponse,
    VmUpdateNameRequest,
    VmUpdateNameBody,
    VmRebuildBody,
    VmRebuildRequest,
    VmStopPath,
    VmStopRequest,
    VmStartPath,
    VmStartRequest,
)

from services.common import utcnow
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
STOP_STATUS = "shutoff"
RUNNING_STATUS = "active"
OK_STATE = "OK"


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


def generate_cloud_init(
    jupyter_password: str, public_key: str, image: str, is_cpu_instance: bool = False
) -> str:
    gpu_flags = "" if is_cpu_instance else "--gpus all"
    return """docker run -d --restart unless-stopped --net=host %s --name default_runner \
      -e PUBLIC_KEY="%s" \
      -e JUPYTER_PASSWORD=%s \
      %s""" % (
        gpu_flags,
        public_key,
        jupyter_password,
        image,
    )


async def get_public_key(session: SessionDep, workspace: str):
    ssh_key_list = await SSHKey.all_by_field(session, "workspace", workspace)
    public_key = []
    for ssh_key in ssh_key_list:
        public_key.append(ssh_key.public_key)
    return "\n".join(public_key)


class EcloudServer(BaseModel):
    server_id: str
    status: str
    services: dict = {}


class EcloudInstance(object):
    wait_time = 2

    def __init__(self, session: SessionDep, instance: Instance):
        self.session = session
        self.instance = instance
        self.zone = None
        self.gpu_type = None
        self.client = None

    async def init(self):
        self.zone = await Zone.one_by_field(self.session, "name", self.instance.zone)
        self.gpu_type = await GPUType.one_by_field(
            self.session, "name", self.instance.gpu_type
        )
        if not self.zone:
            raise Exception("cannot find zone [%s]" % self.instance.zone)
        if not self.gpu_type:
            raise Exception("cannot find gpu_type [%s]" % self.instance.gpu_type)
        self.client = get_client(self.zone)

    async def get_vm_info(self, server_id: str = "") -> VmListServeResponseContent:
        query = VmListServeQuery(
            server_types=[self.gpu_type.ecloud.server_type],
            product_types=["NORMAL"],
            visible=True,
            server_id=server_id,
            specs_name=self.gpu_type.ecloud.specs_name,
        )
        request = VmListServeRequest(vm_list_serve_query=query)
        resp: VmListServeResponse = self.client.vm_list_serve(request)
        vm = resp.body.content[0]
        return vm

    async def wait_vm_status(
        self, server_id: str = "", except_status: str = ""
    ) -> VmListServeResponseContent:
        while True:
            logger.info("wait vm [%s] status to be [%s]", server_id, except_status)
            vm = await self.get_vm_info(server_id)
            status = vm.ec_status
            if status == except_status:
                logger.info(
                    "wait vm [%s] status to be [%s] done", server_id, except_status
                )
                return vm
            else:
                time.sleep(self.wait_time)

    async def start_vm(self, server_id: str = ""):
        vm = await self.get_vm_info(server_id)
        status = vm.ec_status
        if status == RUNNING_STATUS:
            logger.info("vm [%s] is already running", server_id)
            return
        logger.info("start vm [%s] ...", server_id)
        request = VmStartRequest(
            vm_start_path=VmStartPath(server_id=server_id),
        )
        response = self.client.vm_start(request)
        if response.state != OK_STATE:
            raise Exception("start vm [%s] failed: %s" % (server_id, response))
        await self.wait_vm_status(server_id, RUNNING_STATUS)

    async def stop_vm(self, server_id: str = ""):
        vm = await self.get_vm_info(server_id)
        status = vm.ec_status
        if status == STOP_STATUS:
            logger.info("vm [%s] is already shutoff", server_id)
            return
        logger.info("stop vm [%s] ...", server_id)
        request = VmStopRequest(
            vm_stop_query=VmStopPath(server_id=server_id),
        )
        response = self.client.vm_stop(request)
        if response.state != OK_STATE:
            raise Exception("stop vm [%s] failed: %s" % (server_id, response))
        await self.wait_vm_status(server_id, STOP_STATUS)

    async def update_vm_name(self, server_id: str, name: str):
        logger.info("rename server [%s] to [%s] ...", server_id, name)
        # 移动云不支持关机状态下修改名称，需要手动增加 API 来支持只修改名字，不修改 hostname
        body = VmUpdateNameBody(name=name, server_id=server_id)
        request = VmUpdateNameRequest(body)
        params = ApiParams(
            action="vmUpdateNameAndDescriptionWithoutHostName",
            uri="/acl/v3/server/nameAndDescriptionWithoutHostName",
            gateway_uri="/api/openapi-ecs/acl/v3/server/nameAndDescriptionWithoutHostName",
            protocol="https",
            content_type="application/json",
            method="PUT",
            request=request,
        )
        resp = self.client.api_client.excute(params, None, VmUpdateNameResponse)
        if resp.state != OK_STATE:
            raise Exception("update vm name failed: %s" % resp)

    async def place_vm(self) -> EcloudServer:
        query = VmlistServerRespQuery(
            server_types=[self.gpu_type.ecloud.server_type],
            product_types=["NORMAL"],
            visible=True,
            query_word_name=PENDING_PREFIX,
            specs_name=self.gpu_type.ecloud.specs_name,
        )
        request = VmlistServerRespRequest(vmlist_server_resp_query=query)
        resp: VmlistServerRespResponse = self.client.vmlist_server_resp(request)
        body: VmlistServerRespResponseBody = resp.body
        if resp.body.total == 0:
            # TODO: create instance and wait for it to be ready
            raise Exception(
                "cannot find available server with name prefix [%s]" % PENDING_PREFIX
            )
        vm = body.content[0]
        server_id = vm.id
        logger.info("start rename server [%s] ...", server_id)
        await self.update_vm_name(
            server_id=server_id, name=RUNNING_PREFIX + str(self.instance.uid)
        )
        return EcloudServer(server_id=server_id, status=vm.ec_status)

    async def release_vm(self, server_id):
        # TODO: rebuild this instance to default instance
        await self.update_vm_name(
            server_id=server_id, name=PENDING_PREFIX + str(self.instance.uid)
        )
        await self.stop_vm(server_id)

    async def rebuild_vm(self, server_id) -> EcloudServer:
        logger.info("start rebuild server [%s] ...", server_id)
        jupyter_password = str(uuid.uuid4())
        public_key = await get_public_key(
            self.session, workspace=self.instance.workspace
        )
        request = VmRebuildRequest(
            vm_rebuild_body=VmRebuildBody(
                server_id=server_id,
                image_id=self.zone.ecloud.default_image_id,
                user_data=generate_cloud_init(
                    jupyter_password=jupyter_password,
                    public_key=public_key,
                    image=self.instance.image,
                    is_cpu_instance=self.gpu_type.is_cpu_instance,
                ),
            )
        )
        resp = self.client.vm_rebuild(request)
        if resp.state != "OK":
            raise Exception("rebuild server [%s] failed: %s" % (server_id, resp))

        vm = await self.wait_vm_status(server_id, RUNNING_STATUS)
        ip = ""
        for port in vm.port_detail:
            if port.fip_address:
                ip = port.fip_address
                break
        services = {
            "jupyter-lab": "%s:8888" % ip,
            "jupyter-password": jupyter_password,
        }
        if public_key:
            services["ssh"] = "ssh -p 22 root@%s" % ip
        return EcloudServer(server_id=server_id, status=vm.ec_status, services=services)


class ProviderEcloud(ProviderInterface):
    async def delete_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        ei = EcloudInstance(session, instance)
        await ei.init()
        if instance.target_id:
            await ei.release_vm(instance.target_id)
        instance.status = InstanceStatus.terminated
        instance.delete_time = utcnow()
        await instance.update(session)
        return await self.set_operation_done(session, operation)

    async def start_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        ei = EcloudInstance(session, instance)
        await ei.init()
        await ei.start_vm(instance.target_id)
        instance.status = InstanceStatus.running
        await instance.update(session)
        return await self.set_operation_done(session, operation)

    async def stop_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        ei = EcloudInstance(session, instance)
        await ei.init()
        await ei.stop_vm(instance.target_id)
        instance.status = InstanceStatus.terminated
        await instance.update(session)
        return await self.set_operation_done(session, operation)

    async def create_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        ei = EcloudInstance(session, instance)
        await ei.init()
        server = await ei.place_vm()
        server_id = server.server_id
        await ei.start_vm(server_id)
        server = await ei.rebuild_vm(server_id)

        instance.status = InstanceStatus.running
        instance.target_id = server.server_id
        instance.services = server.services
        await instance.update(session)
        return await self.set_operation_done(session, operation)
