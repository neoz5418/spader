import logging
import time
from typing import Annotated, Optional
from starlette.requests import HTTPConnection
from fastapi import Depends, Request, WebSocket, Query
from fastapi.security import (
    OAuth2PasswordBearer,
)
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from routers.types import Role, User, Workspace
from services.common import (
    ErrorForbidden,
    ErrorResourceNotFound,
    ErrorUnauthorized,
    PERMISSIONS,
)
from services.db import get_session
from services.security import jwt_manager

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/apis/oidc/v1/auth", scopes=PERMISSIONS, auto_error=False
)


logger = logging.getLogger(__name__)


async def get_current_user_for_ws(
    websocket: WebSocket,
    session: Annotated[AsyncSession, Depends(get_session)],
    token: str = Query(None),
) -> User:
    if token is None or token == "":
        raise ErrorUnauthorized(type="Unauthorized").to_exception()
    user = await get_user_from_jwt_token(session, token)

    if user:
        websocket.state.user = user
        await authorizer(session, websocket, user)
        return user

    raise ErrorUnauthorized(type="Unauthorized").to_exception()


async def get_current_user(
    request: Request,
    session: Annotated[AsyncSession, Depends(get_session)],
    bearer_token: Annotated[str, Depends(oauth2_scheme)],
) -> User:
    if not bearer_token:
        raise ErrorUnauthorized(type="Unauthorized").to_exception()
    user = await get_user_from_jwt_token(session, bearer_token)

    if user:
        request.state.user = user
        await authorizer(session, request, user)
        return user

    raise ErrorUnauthorized(type="Unauthorized").to_exception()


async def get_admin_user(
    current_user: Annotated[User, Depends(get_current_user)],
) -> User:
    if not current_user.role == Role.global_admin:
        raise ErrorForbidden(type="Forbidden").to_exception()
    return current_user


async def get_user_from_jwt_token(
    session: AsyncSession, access_token: str
) -> Optional[User]:
    payload = jwt_manager.decode_jwt_token(access_token)
    if not payload:
        return None
    username = payload.get("sub")

    if username is None:
        return None

    # check if token is expired
    if payload["exp"] - time.time() < 0:
        # TODO: return to user that token is expired, need to refresh
        return None

    user = (await session.exec(select(User).where(User.name == username))).first()
    if not user:
        return None
    return user


async def authorizer(session: AsyncSession, request: HTTPConnection, user: User):
    if user.role == Role.global_admin:
        return
    if "username" in request.path_params:
        username = request.path_params["username"]
        if username != user.name:
            raise ErrorForbidden(type="Forbidden").to_exception()
    if "workspace" in request.path_params:
        workspace = request.path_params["workspace"]
        db_workspace = await Workspace.one_by_field(session, "name", workspace)
        if not db_workspace:
            raise ErrorResourceNotFound(
                type="ResourceNotFound",
                resource_name="workspace",
                input=workspace,
            ).to_exception()
        if user.name != db_workspace.owner:
            raise ErrorForbidden(type="Forbidden").to_exception()
    return
