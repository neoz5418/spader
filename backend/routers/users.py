import logging
import random
import string
from datetime import timedelta
from enum import Enum

from email_validator import (
    EmailNotValidError,
    EmailUndeliverableError,
    validate_email,
)
from fastapi import APIRouter, BackgroundTasks, status
from pydantic import EmailStr
from pydantic_extra_types.phone_numbers import PhoneNumber
from sqlmodel import select

from dependencies import (
    CurrentAdminUserDep,
    CurrentUserDep,
    CurrentUserDepAnnotated,
    ListParamsDep,
    SessionDep,
)
from routers.types import (
    RegisterUserRequest,
    Role,
    SendOneTimePasswordRequest,
    SendOneTimePasswordResponse,
    User,
    UserList,
    UserQuota,
    Workspace,
)
from services.cache import get_redis
from services.common import (
    Direction,
    ErrorEmailUndeliverable,
    ErrorInvalidArgument,
    ErrorResourceConflict,
    ResourceName,
    single_column_validation_failed,
)
from services.notification import send_one_time_password_email
from services.security import get_secret_hash

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/apis/user/v1",
    tags=["user"],
)


# 普通用户只能获取自己的信息
@router.get("/users/me", dependencies=[CurrentUserDep])
def get_current_user(
    user: CurrentUserDepAnnotated,
) -> User:
    return user


class ListUsersSortOptions(Enum):
    create_time = "create_time"
    uid = "uid"
    delete_time = "delete_time"
    name = "name"
    email = "email"
    update_time = "update_time"


@router.get(
    "/users/",
    dependencies=[CurrentAdminUserDep],
)
async def list_users(
    session: SessionDep,
    params: ListParamsDep,
    sort: ListUsersSortOptions = ListUsersSortOptions.create_time,
    direction: Direction = Direction.DESC,
    phone_number: PhoneNumber = None,
    display_name: str = None,
    email: EmailStr = None,
    name: str = None,
) -> UserList:
    fuzzy_fields = {}
    fields = {}

    return await User.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        offset=params.offset,
        limit=params.limit,
    )


@router.get(
    "/users/{username}",
    dependencies=[CurrentUserDep],
)
async def get_user(
    session: SessionDep,
    username: str,
) -> User:
    return await User.one_by_field(session, "name", username)


@router.delete(
    "/users/{username}",
    dependencies=[CurrentAdminUserDep],
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_user(username: str):
    return


def generate_random_one_time_password():
    return "".join(random.choice(string.digits) for _ in range(6))


def otp_prefix(username: str):
    return "otp:" + username


@router.post(
    "/one_time_password",
    status_code=201,
)
async def send_one_time_password(
    session: SessionDep,
    send_one_time_password_request: SendOneTimePasswordRequest,
    background_tasks: BackgroundTasks,
) -> SendOneTimePasswordResponse:
    await check_user_register_info(
        session,
        send_one_time_password_request.email,
        send_one_time_password_request.name,
    )

    otp_password = generate_random_one_time_password()
    cache = get_redis()
    await cache.set(
        otp_prefix(send_one_time_password_request.email),
        otp_password,
        timedelta(minutes=10),
    )
    background_tasks.add_task(
        send_one_time_password_email, send_one_time_password_request.email, otp_password
    )
    return SendOneTimePasswordResponse(
        type=send_one_time_password_request.type,
        email=send_one_time_password_request.email,
    )


async def check_user_register_info(
    session: SessionDep,
    email: str,
    name: str,
):
    try:
        # Check that the email address is valid. Turn on check_deliverability
        # for first-time validations like on account creation pages (but not
        # login pages).
        email_info = validate_email(email, check_deliverability=True)

        # After this point, use only the normalized form of the email address,
        # especially before going to a database query.
        email = email_info.normalized
    except EmailUndeliverableError:
        raise single_column_validation_failed(
            detail=ErrorEmailUndeliverable(
                type="EmailUndeliverable", input=email, location="email"
            )
        )
    except EmailNotValidError:
        raise single_column_validation_failed(
            detail=ErrorInvalidArgument(
                type="InvalidArgument",
                location="email",
                input=email,
            ),
        )

    # check user exists
    statement = select(User).where(User.email == email)
    db_user = (await session.exec(statement)).first()
    if db_user is not None:
        raise single_column_validation_failed(
            ErrorResourceConflict(
                type="ResourceConflict",
                input=email,
                location="email",
                resource_name=ResourceName.user,
            )
        )
    statement = select(User).where(User.name == name)
    db_user = (await session.exec(statement)).first()
    if db_user is not None:
        raise single_column_validation_failed(
            ErrorResourceConflict(
                type="ResourceConflict",
                input=name,
                location="name",
                resource_name=ResourceName.user,
            )
        )


@router.post("/users/")
async def register_user(
    session: SessionDep,
    register_user_request: RegisterUserRequest,
) -> User:
    await check_user_register_info(
        session,
        register_user_request.email,
        register_user_request.name,
    )

    cache = get_redis()
    otp = await cache.get(otp_prefix(register_user_request.email))
    logger.info(
        "otp: %s, register_user_request.one_time_password: %s",
        otp,
        register_user_request.one_time_password,
    )
    if not otp or otp != str(register_user_request.one_time_password):
        raise single_column_validation_failed(
            ErrorInvalidArgument(
                type="InvalidArgument",
                input=register_user_request.one_time_password,
                location="one_time_password",
            )
        )

    db_user = User.model_validate(
        register_user_request,
        update={
            "hashed_password": get_secret_hash(register_user_request.password),
            "role": Role.user,
        },
    )
    session.add(db_user)

    # check workspace exists, the workspace name is same as username
    statement = select(Workspace).where(Workspace.name == register_user_request.name)
    db_workspace = (await session.exec(statement)).first()
    if db_workspace is not None:
        logger.warning("workspace already exists")
        if db_workspace.owner != register_user_request.name:
            logger.warning("workspace owner is not same as user name")
    else:
        workspace = Workspace(
            name=register_user_request.name,
            owner=register_user_request.name,
            display_name=register_user_request.email,
        )
        session.add(workspace)

    await session.commit()
    await session.refresh(db_user)
    await cache.delete(otp_prefix(register_user_request.email))
    return db_user


@router.get(
    "/users/{username}/quota",
    dependencies=[CurrentUserDep],
    response_model=UserQuota,
)
def get_user_quota(username: str):
    return


@router.patch(
    "/users/{username}/quota",
    dependencies=[CurrentAdminUserDep],
    response_model=UserQuota,
)
def update_user_quota(username: str):
    return


@router.put(
    "/users/{username}/quota",
    dependencies=[CurrentAdminUserDep],
    response_model=UserQuota,
)
def replace_user_quota(username: str):
    return
