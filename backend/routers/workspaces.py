import logging
from enum import Enum

from fastapi import APIRouter, HTTPException, status, WebSocket
from sqlmodel import and_, select
from uuid import UUID

from dependencies import (
    active_connections_set,
    CurrentAdminUserDep,
    CurrentAdminUserDepAnnotated,
    CurrentUserDep,
    CurrentUserDepAnnotated,
    CurrentUserDepForWS,
    ListParamsDep,
    SessionDep,
)
from routers.types import (
    RechargeStatus,
    RechargeType,
    RechargeWorkspaceAccount,
    ResourceUsageRecord,
    ResourceUsageRecordList,
    SSHKeyList,
    Workspace,
    WorkspaceAccount,
    WorkspaceAccountRecharge,
    WorkspaceAccountRechargeList,
    WorkspaceCreate,
    WorkspaceInvitationList,
    WorkspaceList,
    WorkspaceMember,
    WorkspaceMemberList,
    WorkspaceQuota,
    Operation,
    OperationList,
)
from services.cache import get_redis
from services.common import Direction, PaginatedList, Pagination
from services.lago import get_account, top_up_account
from services.payment import alipay_recharge, check_alipay_recharge

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/apis/workspace/v1",
    tags=["workspace"],
)


@router.post(
    "/users/{username}/workspaces",
    dependencies=[CurrentUserDep],
    status_code=status.HTTP_201_CREATED,
)
async def create_workspace(
    session: SessionDep,
    user: CurrentUserDepAnnotated,
    username: str,
    workspace: WorkspaceCreate,
) -> Workspace:
    if user.name != username:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only the user itself can create a workspace",
        )
    db_workspace = (
        await session.exec(
            select(Workspace).where(
                and_(Workspace.name == workspace.name, Workspace.delete_time is None)
            )
        )
    ).first()
    if db_workspace:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="workspace already exists",
        )
    db_workspace = Workspace.model_validate(
        workspace,
        update={
            "owner": user.name,
        },
    )
    session.add(db_workspace)
    await session.commit()
    await session.refresh(db_workspace)
    return db_workspace


class ListWorkspacesSortOptions(Enum):
    create_time = "create_time"
    delete_time = "delete_time"
    name = "name"


@router.get(
    "/users/{username}/workspaces",
    dependencies=[CurrentUserDep],
)
async def list_user_workspaces(
    session: SessionDep,
    user: CurrentUserDepAnnotated,
    username: str,
    params: ListParamsDep,
    search: str = None,
) -> WorkspaceList:
    if username != "" and user.name != username:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only the user itself can list workspaces",
        )
    workspaces = []

    # check workspace exists, the workspace's name is same as user name
    statement = select(Workspace).where(
        and_(Workspace.name == username, Workspace.owner == username)
    )
    workspace = (await session.exec(statement)).first()
    if workspace is not None:
        if workspace.owner != username:
            logger.warn("workspace's owner is not same as user name")
        else:
            workspaces.append(workspace)

    results = await session.exec(
        select(Workspace, WorkspaceMember).where(
            and_(
                Workspace.name == WorkspaceMember.workspace,
                WorkspaceMember.username == username,
            )
        )
    )

    for workspace, member in results.all():
        workspaces.append(workspace)

    return PaginatedList[Workspace](
        items=workspaces,
        pagination=Pagination(
            total=1,
            limit=1000,
        ),
    )


@router.get("/workspaces", dependencies=[CurrentAdminUserDep])
async def list_workspaces(
    session: SessionDep,
    user: CurrentAdminUserDepAnnotated,
    params: ListParamsDep,
    sort: ListWorkspacesSortOptions = ListWorkspacesSortOptions.create_time,
    direction: Direction = Direction.DESC,
) -> WorkspaceList:
    return await list_user_workspaces(session, user, "", params, sort, direction)


@router.get("/workspaces/{workspace}", dependencies=[CurrentUserDep])
async def get_workspace(
    session: SessionDep,
    workspace: str,
) -> Workspace:
    workspace = await Workspace.one_by_field(session, "name", workspace)
    if not workspace:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Workspace not found",
        )
    return workspace


@router.get(
    "/workspaces/{workspace}/quota",
    dependencies=[CurrentUserDep],
    response_model=WorkspaceQuota,
)
def get_workspace_quota(workspace: str):
    return


@router.patch(
    "/workspaces/{workspace}/quota",
    dependencies=[CurrentAdminUserDep],
    response_model=WorkspaceQuota,
)
def update_workspace_quota(workspace: str, quota: WorkspaceQuota):
    return


@router.put(
    "/workspaces/{workspace}/quota",
    dependencies=[CurrentAdminUserDep],
    response_model=WorkspaceQuota,
)
def replace_workspace_quota(workspace: str, quota: WorkspaceQuota):
    return


# TODO: 还需要补充: 充值记录、账单
@router.get(
    "/workspaces/{workspace}/account",
    dependencies=[CurrentUserDep],
)
async def get_workspace_account(
    session: SessionDep,
    workspace: str,
) -> WorkspaceAccount:
    db_workspace = await Workspace.one_by_field(session, "name", workspace)
    return get_account(db_workspace)


@router.post(
    "/workspaces/{workspace}/account/recharge",
    dependencies=[CurrentUserDep],
)
async def recharge_workspace_account(
    session: SessionDep,
    workspace: str,
    recharge_in: RechargeWorkspaceAccount,
) -> WorkspaceAccountRecharge:
    if recharge_in.type != RechargeType.alipay:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="recharge type [%s] is not supported" % recharge_in.type,
        )
    recharge = WorkspaceAccountRecharge(
        workspace=workspace,
        currency=recharge_in.currency,
        amount=recharge_in.amount,
        type=recharge_in.type,
        pay_url="",
        status=RechargeStatus.pending,
    )
    pay_url = alipay_recharge(
        recharge.uid,
        recharge.amount,
        recharge_in.callback_url,
    )
    recharge.pay_url = pay_url
    await recharge.save(session)
    return recharge


@router.get(
    "/workspaces/{workspace}/account/recharges",
    dependencies=[CurrentUserDep],
)
async def list_workspace_account_recharges(
    session: SessionDep,
    workspace: str,
    params: ListParamsDep,
) -> WorkspaceAccountRechargeList:
    recharge_list = await WorkspaceAccountRecharge.paginated_by_query(
        session,
        {
            "workspace": workspace,
        },
        offset=params.offset,
        limit=params.limit,
    )
    return recharge_list


@router.get(
    "/workspaces/{workspace}/account/recharges/{recharge_id}",
    dependencies=[CurrentUserDep],
)
async def get_workspace_account_recharge(
    session: SessionDep,
    workspace: str,
    recharge_id: UUID,
) -> WorkspaceAccountRecharge:
    db_recharge = await WorkspaceAccountRecharge.one_by_fields(
        session,
        {
            "uid": recharge_id,
            "workspace": workspace,
        },
    )
    if db_recharge is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Recharge not found",
        )
    return db_recharge


@router.post(
    "/recharges/{recharge_id}/check",
    dependencies=[CurrentUserDep],
)
# TODO: rate limit
async def check_workspace_account_recharge(
    session: SessionDep,
    recharge_id: UUID,
) -> WorkspaceAccountRecharge:
    cache = get_redis()
    async with cache.lock("lock:" + str(recharge_id)):
        db_recharge = await WorkspaceAccountRecharge.one_by_fields(
            session,
            {
                "uid": recharge_id,
            },
        )
        # TODO: check user has workspace permission
        if db_recharge is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Recharge not found",
            )
        if db_recharge.status == RechargeStatus.succeeded:
            return db_recharge
        recharged = check_alipay_recharge(db_recharge.uid)
        if recharged:
            db_workspace = await Workspace.one_by_field(
                session, "name", db_recharge.workspace
            )
            top_up_account(db_workspace, db_recharge.amount, False)
            db_recharge.status = RechargeStatus.succeeded
            await db_recharge.save(session)
        return db_recharge


@router.get(
    "/workspaces/{workspace}/resource_usage_record",
    dependencies=[CurrentUserDep],
)
async def list_workspace_resource_usage_records(
    session: SessionDep,
    workspace: str,
    target_id: UUID,
    params: ListParamsDep,
) -> ResourceUsageRecordList:
    resource_usage_records = await ResourceUsageRecord.paginated_by_query(
        session,
        fields={
            "workspace": workspace,
            "target_id": target_id,
        },
        offset=params.offset,
        limit=params.limit,
    )
    return resource_usage_records


@router.get(
    "/workspaces/{workspace}/ssh_keys",
    dependencies=[CurrentUserDep],
    response_model=SSHKeyList,
)
def get_workspace_ssh_keys(workspace: str):
    return


@router.post(
    "/workspaces/{workspace}/ssh_keys",
    dependencies=[CurrentUserDep],
    status_code=status.HTTP_201_CREATED,
)
def create_workspace_ssh_keys(workspace: str):
    return


@router.delete(
    "/workspaces/{workspace}/ssh_keys/{name}",
    dependencies=[CurrentUserDep],
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_workspace_ssh_keys(workspace: str, name: str):
    return


@router.delete(
    "/workspaces/{workspace}",
    dependencies=[CurrentAdminUserDep],
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_workspace(workspace: str):
    return


@router.get(
    "/workspaces/{workspace}/members",
    dependencies=[CurrentUserDep],
    response_model=WorkspaceMemberList,
)
# TODO: create invitation
def get_workspace_members(workspace: str):
    return


@router.get(
    "/workspaces/{workspace}/invitations",
    dependencies=[CurrentUserDep],
    response_model=WorkspaceInvitationList,
)
# TODO: cancel invitation
def get_workspace_invitations(workspace: str):
    return


@router.websocket(
    "/watch/workspaces/{workspace}",
    dependencies=[CurrentUserDepForWS],
)
async def watch_workspace(
    websocket: WebSocket,
    workspace: str,
):
    await websocket.accept()
    active_connections_set.add(websocket)
    redis = get_redis()
    try:
        async with redis.pubsub() as pubsub:
            await pubsub.subscribe("workspace:" + workspace)
            while True:
                message = await pubsub.get_message(
                    ignore_subscribe_messages=True, timeout=None
                )
                if message is not None:
                    logger.info(message["data"])
                    await websocket.send_text(message["data"])
    except Exception as e:
        logger.error(e)
        await websocket.close()
    finally:
        active_connections_set.discard(websocket)


@router.get(
    "/workspaces/{workspace}/operations",
    dependencies=[CurrentUserDep],
)
async def get_workspace_operations(
    session: SessionDep,
    workspace: str,
    params: ListParamsDep,
) -> OperationList:
    fields = {}
    if workspace:
        fields["workspace"] = workspace
    fuzzy_fields = {}
    if search:
        fuzzy_fields = {"name": search, "display_name": search}

    operation_list = await Operation.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        offset=params.offset,
        limit=params.limit,
        order_by=(sort, sort_order),
    )
    return operation_list