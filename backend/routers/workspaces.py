from enum import Enum

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
    Currency,
    SSHKeyList,
    Workspace,
    WorkspaceAccount,
    WorkspaceCreate,
    WorkspaceInvitationList,
    WorkspaceList,
    WorkspaceMemberList,
    WorkspaceQuota,
)
from services.common import Direction, PERMISSION_GLOBAL_ADMIN, PERMISSION_REGULAR_USER

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
    fuzzy_fields = {}
    if search:
        fuzzy_fields = {"name": search, "display_name": search}
    fields = {}
    if username != "":
        fields = {"owner": username}

    return await Workspace.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        page=params.page,
        per_page=params.limit,
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
    # TODO: add transaction
    db_workspace = await WorkspaceAccount.one_by_field(session, "workspace", workspace)
    if not db_workspace:
        db_workspace = WorkspaceAccount(
            workspace=workspace,
            balance=0,
            currency=Currency.CNY,
        )
        await db_workspace.save(session)
        await db_workspace.refresh(session)
    return db_workspace


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
