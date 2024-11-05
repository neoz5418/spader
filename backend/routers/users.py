from datetime import timedelta
import logging
from fastapi import APIRouter, status, HTTPException, BackgroundTasks
import random
import string
from routers.types import *
from sqlmodel import select
from services.notification import send_one_time_password_email
from services.cache import get_redis
from services.security import get_secret_hash
from dependencies import ListParamsDep, SessionDep, CurrentUserDep, CurrentAdminUserDep, CurrentUserDepAnnotated

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/apis/user/v1",
    tags=["user"],
)


# 普通用户只能获取自己的信息
@router.get("/users/me", tags=PERMISSION_REGULAR_USER)
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
    tags=PERMISSION_GLOBAL_ADMIN, 
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
)-> UserList:
    fuzzy_fields = {}
    fields = {}

    return await User.paginated_by_query(
        session=session,
        fields=fields,
        fuzzy_fields=fuzzy_fields,
        page=params.page,
        per_page=params.limit,
    )


@router.get(
    "/users/{username}",
    tags=PERMISSION_REGULAR_USER, dependencies=[CurrentUserDep],
    response_model=User,
)
def get_user(username: str):
    return


@router.delete(
    "/users/{username}",
    tags=PERMISSION_GLOBAL_ADMIN, dependencies=[CurrentAdminUserDep],
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_user(username: str):
    return


def generate_random_one_time_password():
    return ''.join(random.choice(string.digits) for _ in range(6))


def otp_prefix(username: str):
    return "otp:" + username


@router.post(
    "/one_time_password",
    tags=PERMISSION_UNAUTHENTICATED,
    status_code=201,
)
async def send_one_time_password(
        send_one_time_password_request: SendOneTimePasswordRequest,
        background_tasks: BackgroundTasks,
) -> SendOneTimePasswordResponse:
    if send_one_time_password_request.type != OneTimePasswordValidateType.email:
        raise HTTPException(status_code=400, detail="invalid type")

    otp_password = generate_random_one_time_password()
    cache = get_redis()
    await cache.set(otp_prefix(send_one_time_password_request.email), otp_password, timedelta(minutes=10))
    background_tasks.add_task(send_one_time_password_email, send_one_time_password_request.email, otp_password)
    return SendOneTimePasswordResponse(
        type=send_one_time_password_request.type,
        email=send_one_time_password_request.email,
    )


@router.post("/users/", tags=PERMISSION_UNAUTHENTICATED)
async def register_user(
        session: SessionDep,
        register_user_request: RegisterUserRequest,
) -> User:
    # check user exists
    statement = select(User).where(User.email == register_user_request.email)
    db_user = (await session.exec(statement)).first()
    if db_user is not None:
        raise HTTPException(status_code=400, detail="email already exists")
    statement = select(User).where(User.name == register_user_request.name)
    db_user = (await session.exec(statement)).first()
    if db_user is not None:
        raise HTTPException(status_code=400, detail="username already exists")

    cache = get_redis()
    otp =  await cache.get(otp_prefix(register_user_request.email))
    logger.info("otp: %s, register_user_request.one_time_password: %s", otp, register_user_request.one_time_password)
    if otp is None or otp.decode() != str(register_user_request.one_time_password):
       raise HTTPException(status_code=400, detail="invalid one time password")

    db_user = User.model_validate(register_user_request,
                                  update={"hashed_password": get_secret_hash(register_user_request.password),
                                          "role": Role.user,
                                          })
    db_user.create_time = datetime.now()
    session.add(db_user)
    await session.commit()
    await session.refresh(db_user)
    await cache.delete(otp_prefix(register_user_request.email))
    return db_user


@router.get(
    "/users/{username}/quota", tags=PERMISSION_REGULAR_USER, dependencies=[CurrentUserDep], response_model=UserQuota
)
def get_user_quota(username: str):
    return


@router.patch(
    "/users/{username}/quota", tags=PERMISSION_GLOBAL_ADMIN, dependencies=[CurrentAdminUserDep], response_model=UserQuota
)
def update_user_quota(username: str):
    return


@router.put(
    "/users/{username}/quota", tags=PERMISSION_GLOBAL_ADMIN, dependencies=[CurrentAdminUserDep], response_model=UserQuota
)
def replace_user_quota(username: str):
    return
