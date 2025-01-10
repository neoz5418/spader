import asyncio
import logging
from datetime import datetime
from enum import Enum
from typing import Optional
from uuid import UUID

from fastapi import APIRouter, Query, WebSocket, status
from sqlmodel import and_, select, text
from pydantic_extra_types.timezone_name import TimeZoneName

from starlette.websockets import WebSocketDisconnect

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
    BillingCoupon,
    BillingCouponList,
    BillingRecordList,
    ExpensesResponse,
    ListExpensesResponse,
    RechargeStatus,
    RechargeType,
    RechargeWorkspaceAccount,
    ResourceType,
    SortOrder,
    SSHKey,
    SSHKeyCreate,
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
    AuditLog,
    AuditLogList,
    AuditLogResourceType,
    AuditLogActionType,
)
from services.cache import get_redis
from services.common import (
    Direction,
    ErrorInvalidArgument,
    ErrorResourceConflict,
    ErrorResourceNotFound,
    PaginatedList,
    Pagination,
    ResourceName,
    single_column_validation_failed,
    utcnow,
)
from services.billing import get_account, top_up_account
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
    db_workspace = (
        await session.exec(
            select(Workspace).where(
                and_(Workspace.name == workspace.name, Workspace.delete_time is None)
            )
        )
    ).first()
    if db_workspace:
        raise single_column_validation_failed(
            ErrorResourceConflict(
                type="ResourceConflict",
                input=workspace.name,
                location="name",
                resource_name=ResourceName.workspace,
            )
        )
    db_workspace = Workspace.model_validate(
        workspace,
        update={
            "owner": username,
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
    username: str,
    params: ListParamsDep,
    search: str = None,
) -> WorkspaceList:
    workspaces = []

    # check workspace exists, the workspace's name is same as username
    statement = select(Workspace).where(
        and_(Workspace.name == username, Workspace.owner == username)
    )
    workspace = (await session.exec(statement)).first()
    if workspace is not None:
        if workspace.owner != username:
            logger.warning("workspace's owner is not same as user name")
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
        raise ErrorResourceNotFound(
            type="ResourceNotFound",
            location="workspace",
            input=workspace,
        ).to_exception()
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
    return await get_account(session, db_workspace)


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
        raise ErrorInvalidArgument(
            type="InvalidArgument", location="type", input=recharge_in.type
        ).to_exception()
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
        raise ErrorResourceNotFound(
            type="ResourceNotFound", location="recharge", input=recharge_id
        ).to_exception()
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
            raise ErrorResourceNotFound(
                type="ResourceNotFound", location="recharge", input=recharge_id
            ).to_exception()
        if db_recharge.status == RechargeStatus.succeeded:
            return db_recharge
        recharged = check_alipay_recharge(db_recharge.uid)
        if recharged:
            db_workspace = await Workspace.one_by_field(
                session, "name", db_recharge.workspace
            )
            await top_up_account(session, db_workspace, db_recharge.amount, False)
            db_recharge.status = RechargeStatus.succeeded
            await db_recharge.save(session)
        return db_recharge


@router.get(
    "/workspaces/{workspace}/billing_records",
    dependencies=[CurrentUserDep],
)
async def list_workspace_billing_records(
    session: SessionDep,
    workspace: str,
    params: ListParamsDep,
    resource_id: Optional[UUID] = None,
) -> BillingRecordList:
    fields = {}
    if resource_id:
        fields["resource_id"] = resource_id
    if workspace:
        db_workspace = await get_workspace(session, workspace)
        fields["account"] = db_workspace.uid
    billing_records = await BillingRecordList.paginated_by_query(
        session,
        fields=fields,
        offset=params.offset,
        limit=params.limit,
    )
    return billing_records


@router.get(
    "/workspaces/{workspace}/expenses",
    dependencies=[CurrentUserDep],
)
async def list_workspace_expenses(
    session: SessionDep,
    workspace: str,
    start_date: datetime = Query(),
    end_date: datetime = Query(),
    timezone: TimeZoneName = Query(),
) -> ListExpensesResponse:
    db_workspace = await Workspace.one_by_field(session, "name", workspace)
    sql_query = """
        SELECT
            DATE(billingrecord.billing_time) AS date,
            SUM(billingrecord.amount) AS total_expense,
            SUM(CASE WHEN billingrecord.resource_type = 'instance' THEN billingrecord.amount ELSE 0 END) AS "instance",
            SUM(CASE WHEN billingrecord.resource_type = 'volume' THEN billingrecord.amount ELSE 0 END) AS volume,
            SUM(CASE WHEN billingrecord.resource_type = 'snapshot' THEN billingrecord.amount ELSE 0 END) AS snapshot
        FROM
            billingrecord
        WHERE
            billingrecord.billing_time >= :start_date
            AND billingrecord.billing_time < :end_date
            AND billingrecord.type = 'deduction'
            AND billingrecord.account = :workspace
        GROUP BY
            DATE(billingrecord.billing_time)
        ORDER BY
            DATE(billingrecord.billing_time) DESC;
        """

    results = await session.exec(
        text(sql_query).bindparams(
            start_date=start_date,
            end_date=end_date,
            workspace=db_workspace.uid,
        )
    )
    results = results.all()
    expense_detail = []
    for result in results:
        expense_detail.append(
            ExpensesResponse(
                date=result[0],
                total=result[1],
                expense_detail={
                    "instance": result[2],
                    "volume": result[3],
                    "snapshot": result[4],
                },
            )
        )
    return ListExpensesResponse(
        expense_types=[t for t in ResourceType],
        expenses=expense_detail,
    )


@router.get(
    "/workspaces/{workspace}/ssh_keys",
    dependencies=[CurrentUserDep],
)
async def list_workspace_ssh_keys(session: SessionDep, workspace: str) -> SSHKeyList:
    fields = {}
    if workspace:
        fields["workspace"] = workspace

    return await SSHKey.paginated_by_query(
        session=session,
        fields=fields,
    )


@router.get(
    "/workspaces/{workspace}/ssh_keys/{name}",
    dependencies=[CurrentUserDep],
)
async def get_ssh_key(
    session: SessionDep,
    workspace: str,
    name: str,
) -> SSHKey:
    ssh_key = await SSHKey.one_by_fields(
        session,
        {
            "name": name,
            "workspace": workspace,
        },
    )
    if not ssh_key:
        raise ErrorResourceNotFound(
            type="ResourceNotFound",
            location="ssh_key",
            input=name,
        ).to_exception()
    return ssh_key


@router.post(
    "/workspaces/{workspace}/ssh_keys",
    dependencies=[CurrentUserDep],
    status_code=status.HTTP_201_CREATED,
)
async def create_workspace_ssh_keys(
    session: SessionDep,
    workspace: str,
    ssh_key_in: SSHKeyCreate,
    user: CurrentUserDepAnnotated,
) -> SSHKey:
    sshkey = await SSHKey.one_by_fields(
        session,
        {
            "name": ssh_key_in.name,
            "workspace": workspace,
        },
    )
    # TODO: validate ssh key
    if sshkey:
        # update
        sshkey.public_key = ssh_key_in.public_key
        await sshkey.save(session)
        action = AuditLogActionType.update
    else:
        sshkey = SSHKey.model_validate(
            ssh_key_in,
            update={
                "workspace": workspace,
            },
        )
        await sshkey.save(session)
        action = AuditLogActionType.create

    await sshkey.refresh(session)
    await AuditLog.create(
        session,
        AuditLog(
            action=action,
            workspace=workspace,
            zone="",
            create_time=utcnow(),
            resource_id=sshkey.uid,
            resource_type=AuditLogResourceType.ssh_key,
            user_id=user.uid,
            user_email=user.email,
            description=f"create ssh key {sshkey.name}",
        ),
    )
    return sshkey


@router.delete(
    "/workspaces/{workspace}/ssh_keys/{name}",
    dependencies=[CurrentUserDep],
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_workspace_ssh_keys(
    session: SessionDep, workspace: str, name: str, user: CurrentUserDepAnnotated
):
    ssh_key = SSHKey.one_by_fields(
        session,
        {
            "workspace": workspace,
            "name": name,
        },
    )
    if ssh_key:
        session.delete(ssh_key)
        await session.commit()

        await ssh_key.refresh(session)
        await AuditLog.create(
            session,
            AuditLog(
                action=AuditLogActionType.delete,
                workspace=workspace,
                create_time=utcnow(),
                resource_id=user.uid,
                resource_type=AuditLogResourceType.ssh_key,
                user_id=user.uid,
                user_email=user.email,
                description=f"delete ssh key {name}",
            ),
        )

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

    async def redis_listener():
        async with redis.pubsub() as pubsub:
            await pubsub.subscribe("workspace:" + workspace)
            while True:
                message = await pubsub.get_message(
                    ignore_subscribe_messages=True, timeout=None
                )
                if message is not None:
                    logger.info(message["data"])
                    await websocket.send_text(message["data"])

    listener_task = asyncio.create_task(redis_listener())
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        logger.info("websocket %s is closed", websocket)
    except Exception as e:
        logger.error(e)
        await websocket.close()
    listener_task.cancel()
    active_connections_set.discard(websocket)


class ListAuditLogsSortOptions(Enum):
    create_time = "create_time"


@router.get(
    "/workspaces/{workspace}/audit_logs",
    dependencies=[CurrentUserDep],
)
async def get_workspace_audit_logs(
    session: SessionDep,
    workspace: str,
    params: ListParamsDep,
    search: str = None,
    sort: ListAuditLogsSortOptions = ListAuditLogsSortOptions.create_time,
    sort_order: SortOrder = SortOrder.DESC,
) -> AuditLogList:
    fields = {}
    if workspace:
        fields["workspace"] = workspace
    fuzzy_fields = {}
    if search:
        fuzzy_fields = {"description": search}

    audit_log_list = await AuditLog.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        offset=params.offset,
        limit=params.limit,
        order_by=(sort, sort_order),
    )
    return audit_log_list


@router.get(
    "/workspaces/{workspace}/coupons",
    dependencies=[CurrentUserDep],
)
async def list_workspace_coupons(
    session: SessionDep,
    workspace: str,
    params: ListParamsDep,
) -> BillingCouponList:
    db_workspace = await get_workspace(session, workspace)
    fields = {
        "account": db_workspace.uid,
    }
    return await BillingCoupon.paginated_by_query(
        session=session,
        fields=fields,
        offset=params.offset,
        limit=params.limit,
    )
