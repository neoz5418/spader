from pydantic import (
    BaseModel,
)
import math
from enum import Enum
from datetime import datetime
from datetime import timezone
UTC = timezone.utc
from fastapi.exceptions import RequestValidationError
import uuid6
from typing import Annotated, Optional, Any
from fastapi import Depends, Query
from pydantic.dataclasses import dataclass
from sqlmodel import Field, SQLModel
from sqlalchemy import Column, DateTime
from typing import Generic, TypeVar
from starlette import status as starlette_status


DEFAULT_LIMIT = 20
MAX_LIMIT = 100
PERMISSION_REGULAR_USER = ["permission_regular_user"]
PERMISSION_GLOBAL_ADMIN = ["permission_global_admin"]
PERMISSION_UNAUTHENTICATED = ["permission_unauthenticated"]


class Pagination(BaseModel):
    limit: int
    total_page: int

class ListParams(BaseModel):
    limit: int = Query(default=DEFAULT_LIMIT, ge=1, le=MAX_LIMIT)
    page: int = Query(default=1, ge=1)
    before: str = Query(default="")
    after: str = Query(default="")

    @property
    def offset(self) -> int:
        return (self.page - 1) * self.limit

    def to_pagination(self, total_count: int) -> Pagination:
        return Pagination(limit=self.limit, total_page=math.ceil(total_count / self.limit))


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

DisplayName = Annotated[str | None, Field(default=None, min_length=0, max_length=64, nullable=True)]


class ErrorInfo(BaseModel):
    reason: str
    metadata: dict[str, Any]


class LanguageCode(Enum):
    # follow the RFC5646
    EN_US = "en-US"
    ZH_HANS = "zh-Hans"


class LocalizedMessage(BaseModel):
    locale: LanguageCode
    message: str


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


ErrorCodeMapping = {
    ErrorCode.CANCELLED: (499, "client closed request"),
    ErrorCode.UNKNOWN: (starlette_status.HTTP_500_INTERNAL_SERVER_ERROR, "internal server error"),
    ErrorCode.INVALID_ARGUMENT: (starlette_status.HTTP_400_BAD_REQUEST, "client specified an invalid argument"),
    ErrorCode.DEADLINE_EXCEEDED: (starlette_status.HTTP_504_GATEWAY_TIMEOUT, "deadline exceeded"),
    ErrorCode.NOT_FOUND: (starlette_status.HTTP_404_NOT_FOUND, "resource not found"),
    ErrorCode.ALREADY_EXISTS: (starlette_status.HTTP_409_CONFLICT, "resource already exists"),
    ErrorCode.PERMISSION_DENIED: (starlette_status.HTTP_403_FORBIDDEN, "permission denied"),
    ErrorCode.UNAUTHENTICATED: (starlette_status.HTTP_401_UNAUTHORIZED, "unauthenticated"),
    ErrorCode.RESOURCE_EXHAUSTED: (starlette_status.HTTP_429_TOO_MANY_REQUESTS, "some resources are exhausted"),
    ErrorCode.FAILED_PRECONDITION: (starlette_status.HTTP_400_BAD_REQUEST, "some precondition is not met"),
    ErrorCode.ABORTED: (starlette_status.HTTP_409_CONFLICT, "this action was aborted"),
    ErrorCode.OUT_OF_RANGE: (starlette_status.HTTP_400_BAD_REQUEST, "this action is out of range"),
    ErrorCode.UNIMPLEMENTED: (starlette_status.HTTP_501_NOT_IMPLEMENTED, "this action is not implemented"),
    ErrorCode.INTERNAL: (starlette_status.HTTP_500_INTERNAL_SERVER_ERROR, "internal server error"),
    ErrorCode.UNAVAILABLE: (starlette_status.HTTP_503_SERVICE_UNAVAILABLE, "service is unavailable"),
    ErrorCode.DATA_LOSS: (starlette_status.HTTP_500_INTERNAL_SERVER_ERROR, "unrecoverable data loss or corruption"),
}

@dataclass
class Error(Exception):
    http_code: int
    message: str
    details: list[ErrorInfo | LocalizedMessage | BaseModel]

    @classmethod
    def from_exception(cls, e: RequestValidationError) -> "Error":
        details = []
        for error in e.errors():
            m = error.get("ctx", {})
            m["loc"] = error.get("loc", [])
            m["msg"] = error.get("msg", "")
            m["input"] = error.get("input", "")
            detail = ErrorInfo(reason=error.get("type"), metadata=m)
            details.append(detail)
        return cls(
            http_code=400,
            message="request_validation_error",
            details=details,
        )

    @classmethod
    def from_error_code(cls, code: ErrorCode, details: list[ErrorInfo | LocalizedMessage | BaseModel]) -> "Error":
        return cls(
            http_code=ErrorCodeMapping[code][0],
            message=ErrorCodeMapping[code][1],
            details=details,
        )


# status.HTTP_400_BAD_REQUEST: {
#     "model": types.Error,
#     "description": "Request error",
# },
# status.HTTP_422_UNPROCESSABLE_ENTITY: {
#     "model": types.Error,
#     "description": "Validation error",
# },
# status.HTTP_429_TOO_MANY_REQUESTS: {
#     "model": types.Error,
#     "description": "Rate limit exceeded",
# },
# status.HTTP_503_SERVICE_UNAVAILABLE: {
#     "model": types.Error,
#     "description": "Service unavailable",
# },
# status.HTTP_401_UNAUTHORIZED: {
#     "model": types.Error,
#     "description": "Unauthorized",
# },
# status.HTTP_404_NOT_FOUND: {
#     "model": types.Error,
#     "description": "Not found",
# },
# status.HTTP_500_INTERNAL_SERVER_ERROR: {
#     "model": types.Error,
#     "description": "Internal server error",
# },

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

class TimestampsMixin(BaseModel):
    create_time: datetime = Field(default_factory=utcnow, nullable=False, index=True)
    update_time: Optional[datetime] = Field(sa_type=DateTime(timezone=True), nullable=True, index=True, default=None, sa_column_kwargs={"onupdate": utcnow})
    delete_time: Optional[datetime] = Field(sa_type=DateTime(timezone=True), nullable=True, index=True, default=None)
