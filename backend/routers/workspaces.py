import logging
from enum import Enum

from fastapi import APIRouter, HTTPException, status
from sqlmodel import and_, select
from uuid import UUID

from dependencies import (
    CurrentAdminUserDep,
    CurrentAdminUserDepAnnotated,
    CurrentUserDep,
    CurrentUserDepAnnotated,
    ListParamsDep,
    SessionDep,
)
from routers.types import (
    ResourceUsageRecord,
    ResourceUsageRecordList,
    SSHKeyList,
    Workspace,
    WorkspaceAccount,
    WorkspaceCreate,
    WorkspaceInvitationList,
    WorkspaceList,
    WorkspaceMember,
    WorkspaceMemberList,
    WorkspaceQuota,
)
from services.common import Direction, PaginatedList, Pagination
from services.lago import get_account

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/apis/workspace/v1",
    tags=["workspace"],
    dependencies=[CurrentUserDep],
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
def get_workspace(
    session: SessionDep,
    user: CurrentUserDepAnnotated,
    workspace: str,
) -> Workspace:
    # TODO: check user permission
    workspace = session.exec(
        select(Workspace).where(Workspace.name == workspace)
    ).first()
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
