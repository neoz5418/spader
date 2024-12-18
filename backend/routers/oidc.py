import logging
import time
from enum import Enum
from typing import Annotated

from fastapi import APIRouter, Depends, Form
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import select

from dependencies import SessionDep
from routers.types import Token, User
from services.common import (
    ErrorEmailAndUsernameCannotBeProvidedAtTheSameTime,
    ErrorInvalidArgument,
    ErrorPasswordMismatch,
    ErrorRefreshTokenCannotBeEmpty,
    ErrorRefreshTokenExpired,
    ErrorRefreshTokenInvalid,
    ErrorResourceNotFound,
    ErrorUsernameOrEmailCannotBeEmpty,
)
from services.security import (
    jwt_manager,
    JWT_TOKEN_EXPIRE_MINUTES,
    verify_hashed_secret,
)

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/apis/oidc/v1",
    tags=["oidc"],
)


class GrantType(str, Enum):
    # authorization_code = "authorization_code"
    # client_credentials = "client_credentials"
    password = "password"
    refresh_token = "refresh_token"


@router.post(
    "/auth",
)
async def auth(
    session: SessionDep,
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    return await token(
        session,
        grant_type=GrantType.password,
        username=form_data.username,
        password=form_data.password,
    )


@router.post(
    "/token",
)
async def token(
    session: SessionDep,
    grant_type: Annotated[GrantType, Form()],
    client_secret: Annotated[str, Form()] = "",
    client_id: Annotated[str, Form()] = "",
    password: Annotated[str, Form()] = "",
    scope: Annotated[str, Form()] = "",
    username: Annotated[str, Form()] = "",
    phone: Annotated[str, Form()] = "",
    email: Annotated[str, Form()] = "",
    refresh_token: Annotated[str, Form()] = "",
) -> Token:
    if grant_type == GrantType.password:
        if not password:
            raise ErrorInvalidArgument(
                type="InvalidArgument",
                input=password,
                loc="password",
            ).to_exception()
        if not email and not username:
            raise ErrorUsernameOrEmailCannotBeEmpty(
                type="UsernameOrEmailCannotBeEmpty"
            ).to_exception()
        if email and username:
            raise ErrorEmailAndUsernameCannotBeProvidedAtTheSameTime(
                type="EmailAndUsernameCannotBeProvidedAtTheSameTime"
            ).to_exception()
        if email:
            user = (await session.exec(select(User).where(User.email == email))).first()
        elif username:
            user = (
                await session.exec(select(User).where(User.name == username))
            ).first()
        else:
            raise Exception("should not run in there")
        logger.info("user: %s, username: %s, email: %s", user, username, email)
        if user is None:
            raise ErrorResourceNotFound(
                type="ResourceNotFound", resource_name="user"
            ).to_exception()
        if verify_hashed_secret(user.hashed_password, password) is False:
            raise ErrorPasswordMismatch(type="PasswordMismatch").to_exception()
        username = user.name
    if grant_type == GrantType.refresh_token:
        if len(refresh_token) == 0:
            raise ErrorRefreshTokenCannotBeEmpty(
                type="RefreshTokenCannotBeEmpty"
            ).to_exception()

        payload = jwt_manager.decode_jwt_token(refresh_token)
        if not payload:
            raise ErrorRefreshTokenInvalid(type="RefreshTokenInvalid").to_exception()
        if payload["exp"] - time.time() < 0:
            raise ErrorRefreshTokenExpired(type="RefreshTokenExpired").to_exception()
        username = payload["sub"]
        if username == "":
            raise ErrorResourceNotFound(
                type="ResourceNotFound", resource_name="user"
            ).to_exception()
    access_token = jwt_manager.create_access_token(username=username)
    refresh_token = jwt_manager.create_refresh_token(username=username)
    logger.info("token %s", access_token)
    t = Token(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="Bearer",
        scope=scope,
        # TODO: change expires_in
        expires_in=JWT_TOKEN_EXPIRE_MINUTES * 24,
    )
    return t
