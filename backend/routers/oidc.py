import time
import logging
from enum import Enum

from fastapi import APIRouter, Form, HTTPException, Depends
from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm
from dependencies import SessionDep
from sqlmodel import select
from jwt import DecodeError, ExpiredSignatureError

from routers.types import PasswordType, Token, User
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
    password: Annotated[PasswordType, Form()] = "",
    scope: Annotated[str, Form()] = "",
    username: Annotated[str, Form()] = "",
    phone: Annotated[str, Form()] = "",
    email: Annotated[str, Form()] = "",
    refresh_token: Annotated[str, Form()] = "",
) -> Token:
    if grant_type == GrantType.password:
        if not password:
            raise HTTPException(status_code=412, detail="password cannot be empty")
        if not email and not username:
            raise HTTPException(
                status_code=412, detail="username or email cannot be empty"
            )
        if email and username:
            raise HTTPException(
                status_code=412,
                detail="email and username cannot be provided at the same time",
            )
        try:
            if email:
                user = (
                    await session.exec(select(User).where(User.email == email))
                ).first()
            else:
                user = (
                    await session.exec(select(User).where(User.name == username))
                ).first()
            logger.info("user: %s, username: %s, email: %s", user, username, email)
        except Exception as e:
            logger.exception(e)
            raise HTTPException(status_code=500, detail="internal server error")
        if user is None:
            raise HTTPException(status_code=404, detail="user not found")
        if verify_hashed_secret(user.hashed_password, password) is False:
            raise HTTPException(status_code=401, detail="invalid username or password")
        username = user.name
    if grant_type == GrantType.refresh_token:
        if len(refresh_token) == 0:
            raise HTTPException(status_code=412, detail="refresh_token cannot be empty")
        try:
            payload = jwt_manager.decode_jwt_token(refresh_token)
            if not payload:
                raise HTTPException(status_code=412, detail="refresh_token invalid")
            if payload["exp"] - time.time() < 0:
                raise HTTPException(status_code=401, detail="refresh_token expired")
            username = payload["sub"]
            if username == "":
                raise HTTPException(status_code=401, detail="user not found")
        except (ExpiredSignatureError, DecodeError) as e:
            logger.exception(e)
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
