from datetime import datetime, timezone
from enum import auto, Enum, StrEnum
from typing import Annotated, Any, Optional
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


class LanguageCode(Enum):
    # follow the RFC5646
    EN_US = "en-US"
    ZH_HANS = "zh-Hans"


class LocalizedMessage(BaseModel):
    locale: LanguageCode
    message: str


class ErrorInfo(BaseModel):
    reason: str
    metadata: dict[str, Any]
    i18n: LocalizedMessage = None


# Copy From The canonical error codes for gRPC APIs.
# Sometimes multiple error codes may apply.  Services should return
# the most specific error code that applies.  For example, prefer
# `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply.
# Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.
class ErrorCode(Enum):
    # Not an error; returned on success.
    #
    # HTTP Mapping: 200 OK
    OK = 0

    # The operation was cancelled, typically by the caller.
    #
    # HTTP Mapping: 499 Client Closed Request
    CANCELLED = 1

    # Unknown error.  For example, this error may be returned when
    # a `Status` value received from another address space belongs to
    # an error space that is not known in this address space.  Also
    # errors raised by APIs that do not return enough error information
    # may be converted to this error.
    #
    # HTTP Mapping: 500 Internal Server Error
    UNKNOWN = 2

    # The client specified an invalid argument.  Note that this differs
    # from `FAILED_PRECONDITION`.  `INVALID_ARGUMENT` indicates arguments
    # that are problematic regardless of the state of the system
    # (e.g., a malformed file name).
    #
    # HTTP Mapping: 400 Bad Request
    INVALID_ARGUMENT = 3

    # The deadline expired before the operation could complete. For operations
    # that change the state of the system, this error may be returned
    # even if the operation has completed successfully.  For example, a
    # successful response from a server could have been delayed long
    # enough for the deadline to expire.
    #
    # HTTP Mapping: 504 Gateway Timeout
    DEADLINE_EXCEEDED = 4

    # Some requested entity (e.g., file or directory) was not found.
    #
    # Note to server developers: if a request is denied for an entire class
    # of users, such as gradual feature rollout or undocumented allowlist,
    # `NOT_FOUND` may be used. If a request is denied for some users within
    # a class of users, such as user-based access control, `PERMISSION_DENIED`
    # must be used.
    #
    # HTTP Mapping: 404 Not Found
    NOT_FOUND = 5

    # The entity that a client attempted to create (e.g., file or directory)
    # already exists.
    #
    # HTTP Mapping: 409 Conflict
    ALREADY_EXISTS = 6

    # The caller does not have permission to execute the specified
    # operation. `PERMISSION_DENIED` must not be used for rejections
    # caused by exhausting some resource (use `RESOURCE_EXHAUSTED`
    # instead for those errors). `PERMISSION_DENIED` must not be
    # used if the caller can not be identified (use `UNAUTHENTICATED`
    # instead for those errors). This error code does not imply the
    # request is valid or the requested entity exists or satisfies
    # other pre-conditions.
    #
    # HTTP Mapping: 403 Forbidden
    PERMISSION_DENIED = 7

    # The request does not have valid authentication credentials for the
    # operation.
    #
    # HTTP Mapping: 401 Unauthorized
    UNAUTHENTICATED = 16

    # Some resource has been exhausted, perhaps a per-user quota, or
    # perhaps the entire file system is out of space.
    #
    # HTTP Mapping: 429 Too Many Requests
    RESOURCE_EXHAUSTED = 8

    # The operation was rejected because the system is not in a state
    # required for the operation's execution.  For example, the directory
    # to be deleted is non-empty, an rmdir operation is applied to
    # a non-directory, etc.
    #
    # Service implementors can use the following guidelines to decide
    # between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`:
    #  (a) Use `UNAVAILABLE` if the client can retry just the failing call.
    #  (b) Use `ABORTED` if the client should retry at a higher level. For
    #      example, when a client-specified test-and-set fails, indicating the
    #      client should restart a read-modify-write sequence.
    #  (c) Use `FAILED_PRECONDITION` if the client should not retry until
    #      the system state has been explicitly fixed. For example, if an "rmdir"
    #      fails because the directory is non-empty, `FAILED_PRECONDITION`
    #      should be returned since the client should not retry unless
    #      the files are deleted from the directory.
    #
    # HTTP Mapping: 400 Bad Request
    FAILED_PRECONDITION = 9

    # The operation was aborted, typically due to a concurrency issue such as
    # a sequencer check failure or transaction abort.
    #
    # See the guidelines above for deciding between `FAILED_PRECONDITION`,
    # `ABORTED`, and `UNAVAILABLE`.
    #
    # HTTP Mapping: 409 Conflict
    ABORTED = 10

    # The operation was attempted past the valid range.  E.g., seeking or
    # reading past end-of-file.
    #
    # Unlike `INVALID_ARGUMENT`, this error indicates a problem that may
    # be fixed if the system state changes. For example, a 32-bit file
    # system will generate `INVALID_ARGUMENT` if asked to read at an
    # offset that is not in the range [0,2^32-1], but it will generate
    # `OUT_OF_RANGE` if asked to read from an offset past the current
    # file size.
    #
    # There is a fair bit of overlap between `FAILED_PRECONDITION` and
    # `OUT_OF_RANGE`.  We recommend using `OUT_OF_RANGE` (the more specific
    # error) when it applies so that callers who are iterating through
    # a space can easily look for an `OUT_OF_RANGE` error to detect when
    # they are done.
    #
    # HTTP Mapping: 400 Bad Request
    OUT_OF_RANGE = 11

    # The operation is not implemented or is not supported/enabled in this
    # service.
    #
    # HTTP Mapping: 501 Not Implemented
    UNIMPLEMENTED = 12

    # Internal errors.  This means that some invariants expected by the
    # underlying system have been broken.  This error code is reserved
    # for serious errors.
    #
    # HTTP Mapping: 500 Internal Server Error
    INTERNAL = 13

    # The service is currently unavailable.  This is most likely a
    # transient condition, which can be corrected by retrying with
    # a backoff. Note that it is not always safe to retry
    # non-idempotent operations.
    #
    # See the guidelines above for deciding between `FAILED_PRECONDITION`,
    # `ABORTED`, and `UNAVAILABLE`.
    #
    # HTTP Mapping: 503 Service Unavailable
    UNAVAILABLE = 14

    # Unrecoverable data loss or corruption.
    #
    # HTTP Mapping: 500 Internal Server Error
    DATA_LOSS = 15


Loc = list[str | int]
Input = str | dict | int


class ArgumentDetail(BaseModel):
    type: str
    metadata: dict[str, Any]
    msg: str
    loc: Loc
    input: Input
    i18n: LocalizedMessage = None


class ErrorBase(BaseModel):
    status_code: int
    message: str

    def to_exception(self) -> HTTPException:
        return HTTPException(status_code=self.status_code, detail=self)


class ErrorResourceNotFound(ErrorBase):
    resource_name: str

    status_code: int = 404
    message: str = "resource_not_found"


class ErrorUnauthorized(ErrorBase):
    class Message(StrEnum):
        unauthorized = auto()
        password_mismatch = auto()

    status_code: int = 401
    message: Message = Message.unauthorized


class ErrorPreconditionFailed(ErrorBase):
    class Type(StrEnum):
        username_or_email_cannot_be_empty = auto()
        email_and_username_cannot_be_provided_at_the_same_time = auto()
        refresh_token_cannot_be_empty = auto()
        refresh_token_invalid = auto()
        refresh_token_expired = auto()

    type: Type
    status_code: int = 412
    message: str = "precondition_failed"


class ErrorInvalidArgument(ErrorBase, ArgumentDetail):
    type: str = "invalid_argument"
    msg: str = "Invalid argument"
    metadata: dict = {}

    status_code: int = 400
    message: str = "invalid_argument"


class ErrorValidationFailed(ErrorBase):
    details: list[ArgumentDetail]

    status_code: int = 422
    message: str = "request_validation_failed"

    @classmethod
    def from_fastapi(cls, e: RequestValidationError) -> "ErrorValidationFailed":
        details = []
        for error in e.errors():
            detail = ArgumentDetail(
                type=error.get("type"),
                metadata=error.get("ctx", {}),
                loc=error.get("loc", []),
                msg=error.get("msg", ""),
                input=error.get("input", ""),
            )
            details.append(detail)
        return ErrorValidationFailed(
            details=details,
        )


class ErrorResourceConflict(ErrorBase):
    input: Input
    loc: Loc
    resource_name: str

    status_code: int = 409
    message: str = "resource_conflict"


class ErrorInternal(ErrorBase):
    status_code: int = 500
    message: str = "Internal Error"


def error_from_exception(request: Request, e: Exception) -> ErrorBase:
    if isinstance(e, HTTPException):
        if isinstance(e.detail, ErrorBase):
            return e.detail
    if isinstance(e, RequestValidationError):
        return ErrorValidationFailed.from_fastapi(e)

    print(e)
    return ErrorInternal()


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
