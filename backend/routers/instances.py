from datetime import datetime, timezone
from enum import Enum
from uuid import UUID

from fastapi import APIRouter, HTTPException
from dependencies import (
    CurrentAdminUserDep,
    CurrentAdminUserDepAnnotated,
    CurrentUserDep,
    CurrentUserDepAnnotated,
    ListParamsDep,
    SessionDep,
)
from routers.types import (
    CreateFileStorageRequest,
    CreateInstanceRequest,
    FileList,
    FileStorage,
    FileStorageList,
    GPUType,
    GPUTypeList,
    Image,
    ImageList,
    Instance,
    InstanceList,
    InstanceStatus,
    Operation,
    OperationList,
    OperationStatus,
    PortForward,
    WatchEvent,
    WorkspaceZoneQuota,
    Zone,
    ZoneCreate,
    ZoneList,
)
from services.celery import create_instance_operation

router = APIRouter(
    prefix="/apis/compute/v1",
    tags=["compute"],
)


@router.post(
    "/zones/",
    dependencies=[CurrentAdminUserDep],
    status_code=201,
    summary="Create a new zone",
)
async def create_zone(
    session: SessionDep,
    zone_in: ZoneCreate,
    user: CurrentAdminUserDepAnnotated,
) -> Zone:
    existing = await Zone.one_by_field(session, "name", zone_in.name)
    if existing:
        raise HTTPException(status_code=409, detail="Zone already exists")
    to_create = Zone.model_validate(zone_in)
    return await Zone.create(session, to_create)


@router.get("/zones", dependencies=[CurrentAdminUserDep])
async def list_zones(
    session: SessionDep,
    params: ListParamsDep,
) -> ZoneList:
    return await Zone.paginated_by_query(
        session=session,
        offset=params.offset,
        limit=params.limit,
    )


@router.get("/zones/{zone}/gpu_types", dependencies=[CurrentAdminUserDep])
async def list_gpu_types(
    session: SessionDep,
    params: ListParamsDep,
    zone: str,
) -> GPUTypeList:
    return await GPUType.paginated_by_query(
        session=session,
        fields={"zone": zone},
        offset=params.offset,
        limit=params.limit,
    )


@router.get(
    "/workspaces/{workspace}/zones",
    dependencies=[CurrentUserDep],
)
async def list_workspace_zones(
    workspace: str,
    session: SessionDep,
    params: ListParamsDep,
) -> ZoneList:
    return await list_zones(session, params)


@router.get(
    "/watch/workspaces/{workspace}/zones",
    dependencies=[CurrentUserDep],
)
def watch_workspace_zones(
    workspace: str,
) -> WatchEvent:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/gpu_types",
    dependencies=[CurrentUserDep],
)
async def list_workspace_zone_gpu_types(
    session: SessionDep,
    workspace: str,
    zone: str,
    params: ListParamsDep,
) -> GPUTypeList:
    return await GPUType.paginated_by_query(
        session=session,
        fields={"zone": zone},
        offset=params.offset,
        limit=params.limit,
    )


@router.get(
    "/workspaces/{workspace}/zones/{zone}/quota",
    dependencies=[CurrentUserDep],
)
def get_workspace_zone_quota(
    workspace: str,
    zone: str,
) -> WorkspaceZoneQuota:
    return


class ListInstancesSortOptions(Enum):
    create_time = "create_time"
    name = "name"


@router.get(
    "/instances",
    dependencies=[CurrentAdminUserDep],
)
async def list_instances(
    session: SessionDep,
    user: CurrentAdminUserDepAnnotated,
    params: ListParamsDep,
    zone: str = None,
    search: str = None,
) -> InstanceList:
    return await list_workspace_instances(
        session=session,
        params=params,
        workspace="",
        zone=zone,
        search=search,
        user=user,
    )


@router.get(
    "/workspaces/{workspace}/instances",
    dependencies=[CurrentUserDep],
)
async def list_workspace_instances(
    session: SessionDep,
    user: CurrentUserDepAnnotated,
    params: ListParamsDep,
    workspace: str,
    zone: str = None,
    search: str = None,
    status: str = None,
) -> InstanceList:
    fields = {}
    if workspace:
        fields["workspace"] = workspace
    if zone:
        fields["zone"] = zone
    if status:
        fields["status"] = status
    fuzzy_fields = {}
    if search:
        fuzzy_fields = {"name": search, "display_name": search}

    return await Instance.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        offset=params.offset,
        limit=params.limit,
    )


@router.get(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}",
    dependencies=[CurrentUserDep],
)
def get_instance(
    workspace: str,
    zone: str,
    name: str,
) -> Instance:
    return


@router.post(
    "/workspaces/{workspace}/zones/{zone}/instances",
    dependencies=[CurrentUserDep],
    status_code=201,
    summary="Create and start a new instance",
)
async def create_instance(
    session: SessionDep,
    workspace: str,
    zone: str,
    instance_in: CreateInstanceRequest,
    user: CurrentUserDepAnnotated,
) -> Operation:
    existing = await Instance.one_by_field(session, "name", instance_in.name)
    if existing:
        raise HTTPException(status_code=409, detail="Instance already exists")
    to_create = Instance.model_validate(
        instance_in,
        update={
            "workspace": workspace,
            "zone": zone,
            "status": InstanceStatus.provisioning,
        },
    )
    operation_creation = Operation(
        workspace=workspace,
        zone=zone,
        create_time=datetime.now(timezone.utc),
        target=to_create.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    await Instance.create(session, to_create)
    operation = await Operation.create(session, operation_creation)
    create_instance_operation.delay(operation.uid)
    return operation


@router.post(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}/start",
    dependencies=[CurrentUserDep],
)
def start_instance(
    workspace: str,
    zone: str,
    name: str,
) -> Operation:
    return


@router.post(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}/stop",
    dependencies=[CurrentUserDep],
)
def stop_instance(
    workspace: str,
    zone: str,
    name: str,
) -> Operation:
    return


@router.post(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forward",
    dependencies=[CurrentUserDep],
    status_code=201,
)
def create_instance_port_forward(
    workspace: str,
    zone: str,
    name: str,
    port_forward: PortForward,
) -> PortForward:
    return


@router.delete(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forwards/{port_forward_name}",
    dependencies=[CurrentUserDep],
    status_code=204,
)
def delete_instance_port_forward(
    workspace: str,
    zone: str,
    name: str,
    port_forward_name: str,
):
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forwards",
    dependencies=[CurrentUserDep],
)
def list_instance_port_forwards(
    workspace: str,
    zone: str,
    name: str,
) -> list[PortForward]:
    return


@router.delete(
    "/workspaces/{workspace}/zones/{zone}/instances/{name}",
    dependencies=[CurrentUserDep],
)
def delete_instance(
    workspace: str,
    zone: str,
    name: str,
) -> Operation:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/operations",
    dependencies=[CurrentUserDep],
)
def list_workspace_operations(
    workspace: str,
    zone: str,
    params: ListParamsDep,
) -> OperationList:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/operations/{uid}",
    dependencies=[CurrentUserDep],
)
def get_workspace_operation(
    workspace: str,
    zone: str,
    uid: UUID,
) -> OperationList:
    return


@router.get(
    "/watch/workspaces/{workspace}/zones/{zone}/operations",
    dependencies=[CurrentUserDep],
)
def watch_workspace_operations(
    workspace: str,
    zone: str,
) -> WatchEvent:
    return


@router.get(
    "/watch/workspaces/{workspace}/zones/{zone}/operations/{uid}",
    dependencies=[CurrentUserDep],
)
def watch_workspace_operation(
    workspace: str,
    zone: str,
    uid: UUID,
) -> WatchEvent:
    return


@router.post(
    "/workspaces/{workspace}/zones/{zone}/file_storages/",
    dependencies=[CurrentUserDep],
    status_code=201,
)
def create_file_storage(
    workspace: str,
    zone: str,
    file_storage: CreateFileStorageRequest,
) -> Operation:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/file_storages",
    dependencies=[CurrentUserDep],
)
def list_workspace_file_storages(
    workspace: str,
    zone: str,
    params: ListParamsDep,
) -> FileStorageList:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/file_storages/{name}",
    dependencies=[CurrentUserDep],
)
def get_file_storage(
    workspace: str,
    zone: str,
    name: str,
) -> FileStorage:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/file_storages/{name}/files",
    dependencies=[CurrentUserDep],
    description="Up to 100 files can be listed",
)
def list_files_in_file_storage(
    workspace: str,
    zone: str,
    name: str,
    path: str = "/",
) -> FileList:
    return


@router.delete(
    "/workspaces/{workspace}/zones/{zone}/file_storages/{name}",
    dependencies=[CurrentUserDep],
)
def delete_file_storage(
    workspace: str,
    zone: str,
    name: str,
) -> Operation:
    return


@router.post(
    "/zones/{zone}/images/",
    dependencies=[CurrentAdminUserDep],
    status_code=201,
)
def create_image(
    zone: str,
    image: Image,
) -> Image:
    return


@router.patch(
    "/zones/{zone}/images/{name}",
    dependencies=[CurrentAdminUserDep],
)
def update_image(
    zone: str,
    name: str,
) -> Image:
    return


@router.get(
    "/workspaces/{workspace}/zones/{zone}/images",
    dependencies=[CurrentUserDep],
)
def list_workspace_images(
    workspace: str,
    zone: str,
    params: ListParamsDep,
) -> ImageList:
    return
