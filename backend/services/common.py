from datetime import datetime, timezone
from enum import Enum
from typing import Annotated, Any, Literal, Optional, Union
from typing import Generic, TypeVar

import uuid6
from fastapi import Query, Request
from fastapi.exceptions import HTTPException, RequestValidationError
from pydantic import BaseModel, SerializeAsAny
from sqlalchemy import DateTime
from sqlmodel import Field

UTC = timezone.utc
DEFAULT_LIMIT = 20
MAX_LIMIT = 100
PERMISSIONS = {
    "permission_unauthenticated": "the unauthenticated user",
    "permission_regular_user": "a regular user",
    "permission_global_admin": "a global admin",
}
PERMISSION_REGULAR_USER = ["permission_regular_user"]
PERMISSION_GLOBAL_ADMIN = ["permission_global_admin"]
PERMISSION_UNAUTHENTICATED = ["permission_unauthenticated"]


class Pagination(BaseModel):
    limit: int
    total: int


class ListParams(BaseModel):
    offset: int = Query(default=0, ge=0)
    limit: int = Query(default=DEFAULT_LIMIT, ge=1, le=MAX_LIMIT)

    def to_pagination(self, total_count: int) -> Pagination:
        return Pagination(limit=self.limit, total=total_count)


class Direction(Enum):
    DESC = "desc"
    ASC = "asc"


NAME_DESCRIPTION = """
NAME is subset of RFC1123 label names:
1. contain only lowercase alphanumeric characters or '-'
2. start with an alphanumeric character
3. end with an alphanumeric character
"""
NAME_REGEX = "^[a-z0-9][a-z0-9-]*[a-z0-9]$"

Name = Annotated[
    str,
    Field(
        min_length=3,
        max_length=32,
        description=NAME_DESCRIPTION,
        regex=NAME_REGEX,
        schema_extra={
            "pattern": NAME_REGEX,
        },
    ),
]

DisplayName = Annotated[
    str | None, Field(default=None, min_length=0, max_length=64, nullable=True)
]


status_code_mapping = {}


def status_code(code: int):
    def decorator(cls):
        status_code_mapping[cls.__qualname__] = code
        return cls

    return decorator


class ErrorBase(BaseModel):
    type: str

    def to_exception(self) -> HTTPException:
        return HTTPException(status_code=self.status_code, detail=self)

    @property
    def status_code(self) -> int:
        return status_code_mapping[self.__class__.__qualname__]


@status_code(422)
class ErrorEmailAndUsernameCannotBeProvidedAtTheSameTime(ErrorBase):
    type: Literal["EmailAndUsernameCannotBeProvidedAtTheSameTime"]


@status_code(404)
class ErrorResourceNotFound(ErrorBase):
    type: Literal["ResourceNotFound"]
    resource_name: str
    input: Any


@status_code(500)
class ErrorInternal(ErrorBase):
    type: Literal["Internal"]


@status_code(422)
class ErrorInvalidArgument(ErrorBase):
    type: Literal["InvalidArgument"]
    location: str
    input: Any


@status_code(401)
class ErrorPasswordMismatch(ErrorBase):
    type: Literal["PasswordMismatch"]


@status_code(422)
class ErrorRefreshTokenCannotBeEmpty(ErrorBase):
    type: Literal["RefreshTokenCannotBeEmpty"]


@status_code(401)
class ErrorRefreshTokenExpired(ErrorBase):
    type: Literal["RefreshTokenExpired"]


@status_code(401)
class ErrorRefreshTokenInvalid(ErrorBase):
    type: Literal["RefreshTokenInvalid"]


@status_code(422)
class ErrorResourceConflict(ErrorBase):
    type: Literal["ResourceConflict"]
    input: Any
    location: str
    resource_name: str


@status_code(401)
class ErrorUnauthorized(ErrorBase):
    type: Literal["Unauthorized"]
    pass


@status_code(422)
class ErrorUsernameOrEmailCannotBeEmpty(ErrorBase):
    type: Literal["UsernameOrEmailCannotBeEmpty"]
    pass


@status_code(422)
class ErrorValidationFailed(ErrorBase):
    type: Literal["ValidationFailed"]
    details: list[ErrorInvalidArgument]

    @classmethod
    def from_fastapi(cls, e: RequestValidationError) -> "ErrorValidationFailed":
        details = []
        for error in e.errors():
            locations = error.get("loc", ["", ""])
            location = ""
            if len(locations) == 1:
                location = locations[0]
            if len(locations) == 2:
                location = locations[1]
            detail = ErrorInvalidArgument(
                type="InvalidArgument",
                location=location,
                input=error.get("input", ""),
            )
            details.append(detail)
        return ErrorValidationFailed(
            type="ValidationFailed",
            details=details,
        )


Errors = Annotated[
    Union[
        ErrorEmailAndUsernameCannotBeProvidedAtTheSameTime,
        ErrorResourceNotFound,
        ErrorInternal,
        ErrorInvalidArgument,
        ErrorPasswordMismatch,
        ErrorRefreshTokenCannotBeEmpty,
        ErrorRefreshTokenExpired,
        ErrorRefreshTokenInvalid,
        ErrorResourceConflict,
        ErrorUnauthorized,
        ErrorUsernameOrEmailCannotBeEmpty,
        ErrorValidationFailed,
    ],
    Field(discriminator="type"),
]


# @http_exception(404, "resource_not_found", "")
# class ErrorResourceNotFound(ErrorBase):
#     resource_name: str
#
#
# @http_exception(401, "", "")
# class ErrorUnauthorized(ErrorBase):
#     class Message(StrEnum):
#         unauthorized = auto()
#         password_mismatch = auto()
#
#     status_code: int = 401
#     message: Message = Message.unauthorized


# class ErrorPreconditionFailed(ErrorBase):
#     class Type(StrEnum):
#         username_or_email_cannot_be_empty = auto()
#         email_and_username_cannot_be_provided_at_the_same_time = auto()
#         refresh_token_cannot_be_empty = auto()
#         refresh_token_invalid = auto()
#         refresh_token_expired = auto()
#
#     type: Type
#     status_code: int = 412
#     message: str = "precondition_failed"
#
#
# class ErrorInvalidArgument(ErrorBase, ArgumentDetail):
#     type: str = "invalid_argument"
#     msg: str = "Invalid argument"
#     metadata: dict = {}
#
#     status_code: int = 400
#     message: str = "invalid_argument"
#
#
# class ErrorValidationFailed(ErrorBase):
#     details: list[ArgumentDetail]
#
#     status_code: int = 422
#     message: str = "request_validation_failed"
#
#     @classmethod
#     def from_fastapi(cls, e: RequestValidationError) -> "ErrorValidationFailed":
#         details = []
#         for error in e.errors():
#             detail = ArgumentDetail(
#                 type=error.get("type"),
#                 metadata=error.get("ctx", {}),
#                 loc=error.get("loc", []),
#                 msg=error.get("msg", ""),
#                 input=error.get("input", ""),
#             )
#             details.append(detail)
#         return ErrorValidationFailed(
#             details=details,
#         )
#
#
# class ErrorResourceConflict(ErrorBase):
#     input: Input
#     loc: Loc
#     resource_name: str
#
#     status_code: int = 409
#     message: str = "resource_conflict"
#
#
# class ErrorInternal(ErrorBase):
#     status_code: int = 500
#     message: str = "Internal Error"


def error_from_exception(request: Request, e: Exception) -> ErrorBase:
    if isinstance(e, HTTPException):
        if isinstance(e.detail, ErrorBase):
            return e.detail
    if isinstance(e, RequestValidationError):
        return ErrorValidationFailed.from_fastapi(e)

    print(e)
    return ErrorInternal(type="Internal")


T = TypeVar("T", bound=BaseModel)


class PaginatedList(BaseModel, Generic[T]):
    items: list[T]
    pagination: Pagination


class Cursor(BaseModel):
    limit: int
    before: Optional[str] = None
    after: Optional[str] = None


class CursorList(BaseModel, Generic[T]):
    items: list[T]
    cursor: Cursor


UID = Field(default_factory=uuid6.uuid7, primary_key=True, nullable=False)


def utcnow() -> datetime:
    return datetime.now(UTC)


class EventType(Enum):
    ADDED = "ADDED"
    MODIFIED = "MODIFIED"
    DELETED = "DELETED"
    ERROR = "ERROR"


class WatchEvent(BaseModel):
    type: EventType
    resource_type: str
    resource: SerializeAsAny[BaseModel]


class TimestampsMixin(BaseModel):
    create_time: datetime = Field(default_factory=utcnow, nullable=False, index=True)
    update_time: Optional[datetime] = Field(
        sa_type=DateTime(timezone=True),
        nullable=True,
        index=True,
        default=None,
        sa_column_kwargs={"onupdate": utcnow},
    )
    delete_time: Optional[datetime] = Field(
        sa_type=DateTime(timezone=True), nullable=True, index=True, default=None
    )
