import time

from fastapi import Depends, Request, HTTPException
from typing import Annotated, Optional
from fastapi.security import (
    HTTPAuthorizationCredentials,
    HTTPBearer,
)
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from services.security import jwt_manager
from routers.types import Role, User, Workspace
from services.db import get_session


bearer_auth = HTTPBearer(auto_error=False)


async def get_current_user(
    request: Request,
    session: Annotated[AsyncSession, Depends(get_session)],
    bearer_token: Annotated[HTTPAuthorizationCredentials, Depends(bearer_auth)],
) -> User:
    if bearer_token is None:
        raise HTTPException(status_code=401, detail="Unauthorized")
    user = await get_user_from_jwt_token(session, bearer_token.credentials)

    if user:
        request.state.user = user
        await authorizer(session, request, user)
        return user

    raise HTTPException(status_code=401, detail="Unauthorized")


async def get_admin_user(
    current_user: Annotated[User, Depends(get_current_user)],
) -> User:
    if not current_user.role == Role.global_admin:
        raise HTTPException(status_code=403, detail="Forbidden")
    return current_user


async def get_user_from_jwt_token(
    session: AsyncSession, access_token: str
) -> Optional[User]:
    try:
        payload = jwt_manager.decode_jwt_token(access_token)
        username = payload.get("sub")
    except Exception:
        return None

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


permission_denied = HTTPException(
    status_code=403,
    detail="permission denied",
)


async def authorizer(session: AsyncSession, request: Request, user: User):
    if user.role == Role.global_admin:
        return
    if "username" in request.path_params:
        username = request.path_params["username"]
        if username != user.name:
            raise permission_denied
    if "workspace" in request.path_params:
        workspace = request.path_params["workspace"]
        db_workspace = await Workspace.one_by_field(session, "name", workspace)
        if not db_workspace:
            raise HTTPException(
                status_code=404,
                detail="Workspace not found",
            )
        if user.name != db_workspace.owner:
            raise permission_denied
    return
