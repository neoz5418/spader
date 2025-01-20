from enum import Enum
from typing import Annotated, Optional
from uuid import UUID

from fastapi import APIRouter, Depends

from dependencies import (
    CurrentAdminUserDep,
    CurrentUserDep,
    CurrentUserDepAnnotated,
    ListParamsDep,
    SessionDep,
)
from routers.types import (
    AuditLog,
    AuditLogActionType,
    AuditLogResourceType,
    BillingPeriod,
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
    InstanceCost,
    InstancePublic,
    InstancePublicList,
    InstanceStatus,
    Operation,
    OperationList,
    OperationStatus,
    OperationType,
    PortForward,
    ResourceType,
    SortOrder,
    Workspace,
    WorkspaceZoneQuota,
    Zone,
    ZoneBase,
    ZoneList,
    AcceleratorTypeList,
)
from services.billing import (
    calculate_pricing_details,
    create_lease,
    get_price,
)
from services.celery import (
    create_instance_operation,
    delete_instance_operation,
    start_instance_operation,
    stop_instance_operation,
)
from services.common import (
    ErrorInvalidArgument,
    ErrorOnlyRealtimeBillingResourceDeletable,
    ErrorResourceConflict,
    ErrorResourceNotFound,
    ResourceName,
    single_column_validation_failed,
    utcnow,
)
from services.lru_resource_cache import (
    get_gpu_type_display_name,
    get_resource_lease,
    get_zone_display_name,
)

router = APIRouter(
    prefix="/apis/compute/v1",
    tags=["compute"],
)


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
            location="instance",
            input=name,
        ).to_exception()
    return instance


async def get_workspace(session: SessionDep, workspace: str) -> Workspace:
    db_workspace = await Workspace.one_by_field(session, "name", workspace)
    if not db_workspace:
        if not db_workspace:
            raise ErrorResourceNotFound(
                type="ResourceNotFound",
                location="workspace",
                input=workspace,
            ).to_exception()
    return db_workspace


InstanceDep = Annotated[Instance, Depends(get_instance)]
WorkspaceDep = Annotated[Workspace, Depends(get_workspace)]


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
        raise single_column_validation_failed(
            ErrorResourceConflict(
                type="ResourceConflict",
                input=zone_in.name,
                location="name",
                resource_name=ResourceName.zone,
            )
        )
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
    return await list_workspace_gpu_types(
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
async def list_workspace_gpu_types(
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
        price = await get_price(session, gpu_type)
        g = GPUTypePublic.model_validate(
            gpu_type,
            update={
                "prices": price.to_price_list(),
            },
        )
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
        sort_order=sort_order,
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

    fields_in = {}
    if status:
        fields_in = status.split(",")

    fuzzy_fields = {}
    if search:
        fuzzy_fields = {"name": search, "display_name": search}

    instance_list = await Instance.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        fields_in=fields_in,
        offset=params.offset,
        limit=params.limit,
        order_by=(sort, sort_order),
    )
    public_list = InstancePublicList(pagination=instance_list.pagination, items=[])
    for i in instance_list.items:
        zone_display_name = await get_zone_display_name(session, i.zone)
        gpu_display_name = await get_gpu_type_display_name(session, i.gpu_type)
        lease = await get_resource_lease(session, i.uid)
        new_i = InstancePublic.model_validate(
            i,
            update={
                "zone_display_name": zone_display_name,
                "gpu_display_name": gpu_display_name,
                "lease_period": lease.lease_period,
                "auto_renew_period": lease.auto_renew_period,
                "coupon": lease.coupon,
            },
        )
        public_list.items.append(new_i)

    return public_list


@router.post(
    "/workspaces/{workspace}/instances",
    dependencies=[CurrentUserDep],
    status_code=201,
    summary="Create and start a new instance",
)
async def create_instance(
    session: SessionDep,
    workspace: str,
    db_workspace: WorkspaceDep,
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
        raise single_column_validation_failed(
            ErrorResourceConflict(
                type="ResourceConflict",
                input=instance_in.name,
                location="name",
                resource_name=ResourceName.instance,
            )
        )

    to_create = Instance.model_validate(
        instance_in,
        update={
            "workspace": workspace,
            "zone": instance_in.zone,
            "status": InstanceStatus.provisioning,
        },
    )
    gpu_type = await GPUType.one_by_fields(
        session,
        fields={
            "name": to_create.gpu_type,
        },
    )
    if not gpu_type:
        raise single_column_validation_failed(
            ErrorInvalidArgument(
                type="InvalidArgument",
                location="gpu_type",
                input=to_create.gpu_type,
            )
        )
    zone = await Zone.one_by_field(session, "name", instance_in.zone)
    if not zone:
        raise single_column_validation_failed(
            ErrorInvalidArgument(
                type="InvalidArgument",
                location="zone",
                input=instance_in.zone,
            )
        )
    await create_lease(
        session,
        account_id=db_workspace.uid,
        resource_id=to_create.uid,
        resource_type=ResourceType.instance,
        priced_resource=gpu_type,
        lease_base=instance_in,
    )
    operation_creation = Operation(
        type=OperationType.create_instance,
        workspace=workspace,
        zone=instance_in.zone,
        create_time=utcnow(),
        target=to_create.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    await Instance.create(session, to_create)
    operation = await Operation.create(session, operation_creation)
    create_instance_operation.delay(operation.uid)

    await AuditLog.create(
        session,
        AuditLog(
            action=AuditLogActionType.create,
            workspace=workspace,
            zone=instance_in.zone,
            create_time=utcnow(),
            resource_id=to_create.uid,
            resource_type=AuditLogResourceType.instance,
            user_id=user.uid,
            user_email=user.email,
            description=f"create instance {instance_in.name}",
        ),
    )

    return operation


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

    await instance.refresh(session)
    await AuditLog.create(
        session,
        AuditLog(
            action=AuditLogActionType.start,
            workspace=workspace,
            zone=instance.zone,
            create_time=utcnow(),
            resource_id=instance.uid,
            resource_type=AuditLogResourceType.instance,
            user_id=user.uid,
            user_email=user.email,
            description=f"start instance {instance.name}",
        ),
    )

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
    operation = Operation(
        type=OperationType.stop_instance,
        workspace=workspace,
        zone=instance.zone,
        create_time=utcnow(),
        target=instance.uid,
        user=user.uid,
        status=OperationStatus.pending,
        progress=0,
    )
    operation = await Operation.create(session, operation)
    stop_instance_operation.delay(operation.uid)

    await instance.refresh(session)
    await AuditLog.create(
        session,
        AuditLog(
            action=AuditLogActionType.stop,
            workspace=workspace,
            zone=instance.zone,
            create_time=utcnow(),
            resource_id=instance.uid,
            resource_type=AuditLogResourceType.instance,
            user_id=user.uid,
            user_email=user.email,
            description=f"stop instance {instance.name}",
        ),
    )

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
    force: Optional[bool] = None,
) -> Operation:
    if not force:
        lease = await get_resource_lease(session, instance.uid)
        if lease.lease_period != BillingPeriod.real_time:
            if lease.end_time > utcnow():
                raise single_column_validation_failed(
                    ErrorOnlyRealtimeBillingResourceDeletable(
                        type="OnlyRealtimeBillingResourceDeletable",
                        location="name",
                        input=instance.name,
                    )
                )

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

    await instance.refresh(session)
    await AuditLog.create(
        session,
        AuditLog(
            action=AuditLogActionType.delete,
            workspace=workspace,
            zone=instance.zone,
            create_time=utcnow(),
            resource_id=instance.uid,
            resource_type=AuditLogResourceType.instance,
            user_id=user.uid,
            user_email=user.email,
            description=f"delete instance {instance.name}",
        ),
    )

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


@router.post(
    "/workspaces/{workspace}/instances/calculate-cost",
    dependencies=[CurrentUserDep],
)
async def calculate_instance_cost(
    session: SessionDep,
    workspace: str,
    instance_in: CreateInstanceRequest,
) -> InstanceCost:
    # Get GPU type
    gpu_type = await GPUType.one_by_field(session, "name", instance_in.gpu_type)
    if not gpu_type:
        raise single_column_validation_failed(
            ErrorInvalidArgument(
                type="InvalidArgument",
                location="gpu_type",
                input=instance_in.gpu_type,
            )
        )
    db_workspace = await Workspace.one_by_field(session, "name", workspace)

    pricing_details, coupon = await calculate_pricing_details(
        session,
        priced_resource=gpu_type,
        lease_base=instance_in,
        account=db_workspace.uid,
    )
    return InstanceCost(coupon=coupon, **pricing_details.model_dump())


@router.get(
    "/accelerator_types",
    dependencies=[CurrentAdminUserDep],
)
async def list_accelerator_types(
    session: SessionDep,
    params: ListParamsDep,
) -> AcceleratorTypeList:
    accelerator_type_list = await AcceleratorType.paginated_by_query(
        session=session,
        offset=params.offset,
        limit=params.limit,
        fields={"enable": True},
    )
    public_list = AcceleratorTypeList(pagination=accelerator_type_list.pagination, items=[])
    for accelerator_type in accelerator_type_list.items:
        public_list.items.append(accelerator_type)
    return public_list
