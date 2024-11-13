
from enum import Enum
import logging
from fastapi import APIRouter, status, HTTPException
from dependencies import (
    CurrentAdminUserDepAnnotated,
    CurrentUserDep,
    ListParamsDep,
    SessionDep,
    CurrentUserDepAnnotated,
)
from sqlmodel import and_, select

from routers.types import (
    SSHKeyList,
    Workspace,
    WorkspaceMember,
    WorkspaceAccount,
    WorkspaceCreate,
    WorkspaceInvitationList,
    WorkspaceList,
    WorkspaceMemberList,
    WorkspaceQuota,
)
from services.common import Direction, Pagination, PaginatedList, PERMISSION_GLOBAL_ADMIN, PERMISSION_REGULAR_USER
from services.lago import get_account

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/apis/workspace/v1",
    tags=["workspace"],
    dependencies=[CurrentUserDep],
)


@router.post(
    "/users/{username}/workspaces",
    tags=PERMISSION_REGULAR_USER,
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
    tags=PERMISSION_REGULAR_USER,
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
                WorkspaceMember.username == username
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


@router.get("/workspaces", tags=PERMISSION_GLOBAL_ADMIN)
async def list_workspaces(
    session: SessionDep,
    user: CurrentAdminUserDepAnnotated,
    params: ListParamsDep,
    sort: ListWorkspacesSortOptions = ListWorkspacesSortOptions.create_time,
    direction: Direction = Direction.DESC,
) -> WorkspaceList:
    return await list_user_workspaces(session, user, "", params, sort, direction)


@router.get("/workspaces/{workspace}", tags=PERMISSION_REGULAR_USER)
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
    tags=PERMISSION_REGULAR_USER,
    response_model=WorkspaceQuota,
)
def get_workspace_quota(workspace: str):
    return


@router.patch(
    "/workspaces/{workspace}/quota",
    tags=PERMISSION_GLOBAL_ADMIN,
    response_model=WorkspaceQuota,
)
def update_workspace_quota(workspace: str, quota: WorkspaceQuota):
    return


@router.put(
    "/workspaces/{workspace}/quota",
    tags=PERMISSION_GLOBAL_ADMIN,
    response_model=WorkspaceQuota,
)
def replace_workspace_quota(workspace: str, quota: WorkspaceQuota):
    return


# TODO: 还需要补充消费记录、充值记录、账单
@router.get(
    "/workspaces/{workspace}/account",
    tags=PERMISSION_REGULAR_USER,
)
async def get_workspace_account(
    session: SessionDep,
    user: CurrentUserDepAnnotated,
    workspace: str,
) -> WorkspaceAccount:
    db_workspace = await Workspace.one_by_field(session, "name", workspace)
    return get_account(db_workspace)


@router.get(
    "/workspaces/{workspace}/ssh_keys",
    tags=PERMISSION_REGULAR_USER,
    response_model=SSHKeyList,
)
def get_workspace_ssh_keys(workspace: str):
    return


@router.post(
    "/workspaces/{workspace}/ssh_keys",
    tags=PERMISSION_REGULAR_USER,
    status_code=status.HTTP_201_CREATED,
)
def create_workspace_ssh_keys(workspace: str):
    return


@router.delete(
    "/workspaces/{workspace}/ssh_keys/{name}",
    tags=PERMISSION_REGULAR_USER,
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_workspace_ssh_keys(workspace: str, name: str):
    return


@router.delete(
    "/workspaces/{workspace}",
    tags=PERMISSION_GLOBAL_ADMIN,
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_workspace(workspace: str):
    return


@router.get(
    "/workspaces/{workspace}/members",
    tags=PERMISSION_REGULAR_USER,
    response_model=WorkspaceMemberList,
)
# TODO: create invitation
def get_workspace_members(workspace: str):
    return


@router.get(
    "/workspaces/{workspace}/invitations",
    tags=PERMISSION_REGULAR_USER,
    response_model=WorkspaceInvitationList,
)
# TODO: cancel invitation
def get_workspace_invitations(workspace: str):
    return
