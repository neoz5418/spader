from enum import Enum
from typing import Annotated, Optional
from fastapi import APIRouter, Depends
from uuid import UUID

from dependencies import (
    CurrentAdminUserDep,
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
    GPUTypePublic,
    GPUTypePublicList,
    Image,
    ImageList,
    Instance,
    InstancePublic,
    InstancePublicList,
    InstanceStatus,
    Operation,
    OperationList,
    OperationStatus,
    OperationType,
    PortForward,
    SortOrder,
    WorkspaceZoneQuota,
    Zone,
    ZoneBase,
    ZoneList,
)
from services.celery import (
    create_instance_operation,
    delete_instance_operation,
    start_instance_operation,
    stop_instance_operation,
)
from services.common import ErrorResourceConflict, ErrorResourceNotFound, utcnow
from services.lru_resource_cache import get_gpu_type_display_name, get_zone_display_name

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
    zone_in: ZoneBase,
) -> Zone:
    existing = await Zone.one_by_field(session, "name", zone_in.name)
    if existing:
        raise ErrorResourceConflict(
            type="ResourceConflict",
            input=zone_in.name,
            location="name",
            resource_name="zone",
        ).to_exception()
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


@router.get(
    "/gpu_types",
    dependencies=[CurrentAdminUserDep],
)
async def list_gpu_types(
    session: SessionDep,
    params: ListParamsDep,
    zone: Optional[str],
) -> GPUTypePublicList:
    return await list_workspace_zone_gpu_types(
        session, params=params, zone=zone, workspace=""
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
    "/workspaces/{workspace}/gpu_types",
    dependencies=[CurrentUserDep],
)
async def list_workspace_zone_gpu_types(
    session: SessionDep,
    workspace: str,
    params: ListParamsDep,
    zone: str | None = None,
) -> GPUTypePublicList:
    fields = {}
    if zone:
        fields["zone"] = zone
    gpu_type_list = await GPUType.paginated_by_query(
        session=session,
        fields=fields,
        offset=params.offset,
        limit=params.limit,
    )
    public_list = GPUTypePublicList(pagination=gpu_type_list.pagination, items=[])
    for gpu_type in gpu_type_list.items:
        g = GPUTypePublic.model_validate(gpu_type)
        public_list.items.append(g)
    return public_list


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
    params: ListParamsDep,
    search: str = None,
    sort: ListInstancesSortOptions = ListInstancesSortOptions.create_time,
    sort_order: SortOrder = SortOrder.DESC,
    zone: str | None = None,
) -> InstancePublicList:
    return await list_workspace_instances(
        session=session,
        params=params,
        workspace="",
        zone=zone,
        search=search,
        sort=sort,
    )


@router.get(
    "/workspaces/{workspace}/instances",
    dependencies=[CurrentUserDep],
)
async def list_workspace_instances(
    session: SessionDep,
    params: ListParamsDep,
    workspace: str,
    zone: str = None,
    search: str = None,
    status: str = None,
    sort: ListInstancesSortOptions = ListInstancesSortOptions.create_time,
    sort_order: SortOrder = SortOrder.DESC,
) -> InstancePublicList:
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

    instance_list = await Instance.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        offset=params.offset,
        limit=params.limit,
        order_by=(sort, sort_order),
    )
    public_list = InstancePublicList(pagination=instance_list.pagination, items=[])
    for i in instance_list.items:
        zone_display_name = await get_zone_display_name(session, i.zone)
        gpu_display_name = await get_gpu_type_display_name(session, i.gpu_type)
        new_i = InstancePublic.model_validate(
            i,
            update={
                "zone_display_name": zone_display_name,
                "gpu_display_name": gpu_display_name,
            },
        )
        public_list.items.append(new_i)

    return public_list


@router.get(
    "/workspaces/{workspace}/instances/{name}",
    dependencies=[CurrentUserDep],
)
async def get_instance(
    session: SessionDep,
    workspace: str,
    name: str,
) -> Instance:
    instance = await Instance.one_by_fields(
        session,
        {
            "name": name,
            "workspace": workspace,
        },
    )
    if not instance:
        raise ErrorResourceNotFound(
            type="ResourceNotFound",
            resource_name="instance",
            input=name,
        ).to_exception()
    return instance


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
    existing = await Instance.one_by_fields(
        session,
        {
            "name": instance_in.name,
            "workspace": workspace,
        },
    )
    if existing:
        raise ErrorResourceConflict(
            type="ResourceConflict",
            input=instance_in.name,
            location="name",
            resource_name="instance",
        ).to_exception()
    to_create = Instance.model_validate(
        instance_in,
        update={
            "workspace": workspace,
            "zone": zone,
            "status": InstanceStatus.provisioning,
        },
    )
    operation_creation = Operation(
        type=OperationType.create_instance,
        workspace=workspace,
        zone=zone,
        create_time=utcnow(),
        target=to_create.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    await Instance.create(session, to_create)
    operation = await Operation.create(session, operation_creation)
    create_instance_operation.delay(operation.uid)
    return operation


InstanceDep = Annotated[Instance, Depends(get_instance)]


@router.post(
    "/workspaces/{workspace}/instances/{name}/start",
    dependencies=[CurrentUserDep],
)
async def start_instance(
    session: SessionDep,
    instance: InstanceDep,
    workspace: str,
    user: CurrentUserDepAnnotated,
) -> Operation:
    operation_creation = Operation(
        type=OperationType.start_instance,
        workspace=workspace,
        zone=instance.zone,
        create_time=utcnow(),
        target=instance.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    operation = await Operation.create(session, operation_creation)
    start_instance_operation.delay(operation.uid)
    return operation


@router.post(
    "/workspaces/{workspace}/instances/{name}/stop",
    dependencies=[CurrentUserDep],
)
async def stop_instance(
    session: SessionDep,
    instance: InstanceDep,
    workspace: str,
    user: CurrentUserDepAnnotated,
) -> Operation:
    operation_creation = Operation(
        type=OperationType.stop_instance,
        workspace=workspace,
        zone=instance.zone,
        create_time=utcnow(),
        target=instance.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    operation = await Operation.create(session, operation_creation)
    stop_instance_operation.delay(operation.uid)
    return operation


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
    "/workspaces/{workspace}/instances/{name}",
    dependencies=[CurrentUserDep],
)
async def delete_instance(
    session: SessionDep,
    instance: InstanceDep,
    workspace: str,
    user: CurrentUserDepAnnotated,
) -> Operation:
    operation_creation = Operation(
        type=OperationType.delete_instance,
        workspace=workspace,
        zone=instance.zone,
        create_time=utcnow(),
        target=instance.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    operation = await Operation.create(session, operation_creation)
    delete_instance_operation.delay(operation.uid)
    return operation


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
