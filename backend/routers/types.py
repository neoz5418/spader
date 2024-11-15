from pydantic import (
    BaseModel,
    ByteSize,
    EmailStr,
    field_validator,
)
import re
from pydantic_extra_types.phone_numbers import PhoneNumber
from datetime import datetime
from enum import Enum
from uuid import UUID
from typing import Annotated, Optional
from sqlalchemy import JSON, Column, DateTime
from sqlmodel import SQLModel
from sqlmodel import Field
from services.active_record import ActiveRecordMixin
from services.common import (
    Name,
    DisplayName,
    UID,
    PaginatedList,
    CursorList,
    TimestampsMixin,
)


class BaseModelMixin(ActiveRecordMixin, TimestampsMixin):
    pass


class Workspace(SQLModel, BaseModelMixin, table=True):
    name: Name
    display_name: DisplayName
    uid: UUID = UID

    owner: str


WorkspaceList = PaginatedList[Workspace]


class WorkspaceCreate(BaseModel):
    name: Name
    display_name: DisplayName


PASSWORD_DESCRIPTION = "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"


class OneTimePasswordValidateType(Enum):
    email = "email"
    # phone_number = "phone_number"


class SendOneTimePasswordRequest(BaseModel):
    type: OneTimePasswordValidateType
    email: Optional[EmailStr] = None
    # phone_number: Optional[PhoneNumber] = None


class SendOneTimePasswordResponse(BaseModel):
    type: OneTimePasswordValidateType
    email: Optional[EmailStr] = None
    phone_number: Optional[PhoneNumber] = None


class Role(Enum):
    global_admin = "global_admin"
    user = "user"


class UserBase(SQLModel):
    name: Name
    email: EmailStr
    display_name: DisplayName
    phone_number: PhoneNumber


class User(UserBase, BaseModelMixin, table=True):
    uid: UUID = UID
    hashed_password: str
    role: Role

    create_time: Optional[datetime] = None
    update_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


UserList = PaginatedList[User]


class UserPublic(UserBase):
    uid: UUID = UID
    create_time: Optional[datetime] = None
    update_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


PasswordType = Annotated[
    str, Field(min_length=8, max_length=32, description=PASSWORD_DESCRIPTION)
]


class UserCreate(UserBase):
    password: PasswordType

    @classmethod
    @field_validator("password")
    def validate_password(cls, value):
        if not re.search(r"[A-Z]", value):
            raise ValueError("Password must contain at least one uppercase letter")
        if not re.search(r"[a-z]", value):
            raise ValueError("Password must contain at least one lowercase letter")
        if not re.search(r"[0-9]", value):
            raise ValueError("Password must contain at least one digit")
        return value


class RegisterUserRequest(UserCreate):
    one_time_password_validate_type: OneTimePasswordValidateType
    one_time_password: str


class Token(BaseModel):
    access_token: str
    # id_token: str
    refresh_token: str
    expires_in: int
    token_type: str
    scope: str


UserList = PaginatedList[User]


class UserQuota(SQLModel, table=True):
    username: str = Field(primary_key=True, nullable=False)
    limitation: dict[str, int] = Field(sa_column=Column(JSON), default={})
    status: dict[str, int] = Field(sa_column=Column(JSON), default={})


class WorkspaceQuota(BaseModel):
    workspace: str = Field(primary_key=True, nullable=False)
    limitation: dict[str, int]
    status: dict[str, int]


class SSHKey(SQLModel, table=True):
    workspace: str
    name: Name
    uid: UUID = UID
    public_key: str

    create_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


SSHKeyList = PaginatedList[SSHKey]


class WorkspaceRole(Enum):
    owner = "owner"
    admin = "admin"
    member = "member"


class WorkspaceMember(SQLModel, table=True):
    workspace: str
    username: str
    role: WorkspaceRole
    uid: UUID = UID

    create_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


WorkspaceMemberList = PaginatedList[WorkspaceMember]


class InvitationStatus(Enum):
    pending = "pending"
    accepted = "accepted"
    rejected = "rejected"


class WorkspaceInvitation(BaseModel):
    workspace: str
    email: EmailStr
    username: str
    uid: UUID
    status: InvitationStatus

    create_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


WorkspaceInvitationList = PaginatedList[WorkspaceInvitation]


class Currency(Enum):
    USD = "USD"
    CNY = "CNY"


class WorkspaceAccount(SQLModel, ActiveRecordMixin, table=True):
    workspace: str = Field(primary_key=True, nullable=False)
    balance: int
    currency: Currency


class WorkspaceZoneQuota(SQLModel, table=True):
    uid: UUID = UID
    workspace: str
    zone: str
    limitation: dict[str, int] = Field(sa_column=Column(JSON), default={})
    status: dict[str, int] = Field(sa_column=Column(JSON), default={})


class Node(BaseModel):
    name: Name
    uid: UUID
    status: str

    create_time: Optional[datetime] = None
    update_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


class DiskType(Enum):
    SSD = "SSD"
    HDD = "HDD"


class BillingPeriod(Enum):
    ONE_HOUR = "ONE_HOUR"
    ONE_WEEK = "ONE_WEEK"
    ONE_DAY = "ONE_DAY"
    TWO_WEEK = "TWO_WEEK"
    ONE_MONTH = "ONE_MONTH"
    THREE_MONTH = "THREE_MONTH"


class Price(BaseModel):
    currency: Currency
    price: int
    period: BillingPeriod


class ResourceUsageType(Enum):
    instance = "instance"
    volume = "volume"
    snapshot = "snapshot"


class ResourceUsageRecord(SQLModel, ActiveRecordMixin, table=True):
    uid: UUID = UID
    billing_cycle_group: UUID
    workspace: str
    zone: str
    start_time: datetime = Field(
        sa_type=DateTime(timezone=True),
        index=True,
    )
    end_time: datetime = Field(
        sa_type=DateTime(timezone=True),
        index=True,
    )
    target_id: UUID
    target_resource_type: ResourceUsageType


# TODO: change to cursor list
ResourceUsageRecordList = PaginatedList[ResourceUsageRecord]


class GPUType(SQLModel, BaseModelMixin, table=True):
    uid: UUID = UID
    name: Name
    display_name: DisplayName
    description: Optional[str] = None
    gpuMemory: ByteSize
    memory: ByteSize
    cpu: int
    disk_size: ByteSize
    disk_type: DiskType
    zone: str


GPUTypeList = PaginatedList[GPUType]


class Provider(Enum):
    ecloud = "ecloud"


class ProviderZoneConfigEcloud(BaseModel):
    region: str
    pool_id: str
    network_id: str
    security_group_id: str


class ZoneBase(SQLModel):
    name: str = Field(primary_key=True, nullable=False)
    provider: Provider
    provider_config: dict[str, str] = Field(sa_column=Column(JSON), default={})


class Zone(ZoneBase, BaseModelMixin, table=True):
    pass


ZoneList = PaginatedList[Zone]


class ZoneCreate(ZoneBase):
    pass


class OperationStatus(Enum):
    pending = "pending"
    running = "running"
    failed = "failed"
    done = "done"


class Operation(SQLModel, ActiveRecordMixin, table=True):
    uid: UUID = UID

    create_time: datetime
    description: Optional[str] = None
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    progress: int  # from 0 to 100
    workspace: str  # empty string if the operation is not related to a workspace
    status: OperationStatus
    status_message: Optional[str] = None
    target: UUID  # the target resource of the operation
    user: UUID  # the user who requested the operation
    zone: str  # empty string if the operation is not related to a zone


OperationList = CursorList[Operation]


class InstanceStatus(Enum):
    """
    A instance can be in one of the following states:

    - `provisioning`: resources are allocated for the instance. The instance is not running yet.
    - `staging`: resources are acquired, and the instance is preparing for first boot.
    - `running`: the instance is booting up or running.
    - `stopping`: the instance is being stopped. You requested a stop, or a failure occurred. This is a temporary status after which the instance enters the `terminated` status.
    - `terminated`: the instance is stopped. You stopped the instance, or the instance encountered a failure. You can restart or delete the instance.
    """

    provisioning = "provisioning"
    staging = "staging"
    running = "running"
    stopping = "stopping"
    terminated = "terminated"


class Instance(SQLModel, BaseModelMixin, table=True):
    name: Name
    display_name: DisplayName
    uid: UUID = UID
    status: InstanceStatus
    zone: str
    workspace: str

    gpu_count: int
    gpu_type: str

    image: str


class PortForwardProtocol(Enum):
    TCP = "TCP"
    UDP = "UDP"


class PortForward(BaseModel):
    uid: UUID = UID
    instance: UUID
    name: Name
    port: int
    target_port: int
    protocol: PortForwardProtocol


InstanceList = PaginatedList[Instance]


class CreateInstanceRequest(BaseModel):
    name: Name
    display_name: DisplayName

    gpu_count: int
    gpu_type: str

    file_storages: list[str] = []

    image: str


class UpdateInstanceRequest(BaseModel):
    display_name: DisplayName


class EventType(Enum):
    ADDED = "ADDED"
    MODIFIED = "MODIFIED"
    DELETED = "DELETED"
    ERROR = "ERROR"


class WatchEvent(BaseModel):
    type: EventType
    object: dict


class FileInfo(BaseModel):
    name: Name
    size: ByteSize
    is_dir: bool
    modify_time: datetime


FileList = PaginatedList[FileInfo]


class CreateFileStorageRequest(BaseModel):
    name: Name
    display_name: DisplayName
    size: ByteSize


class FileStorageStatus(Enum):
    provisioning = "provisioning"
    ready = "ready"
    failed = "failed"
    deleting = "deleting"


class FileStorage(SQLModel, table=True):
    name: Name
    display_name: DisplayName
    size: ByteSize
    status: FileStorageStatus
    uid: UUID = UID
    zone: str
    workspace: str
    create_time: datetime
    update_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


FileStorageList = PaginatedList[FileStorage]


class Architecture(Enum):
    amd64 = "amd64"
    arm64 = "arm64"


class ImageVisibility(Enum):
    public = "public"
    private = "private"


class Image(SQLModel, table=True):
    name: Name
    uid: UUID = UID

    display_name: DisplayName
    description: Optional[str] = None
    architecture: Architecture

    url: str

    visibility: ImageVisibility
    workspace: str = ""

    create_time: datetime
    update_time: Optional[datetime] = None
    delete_time: Optional[datetime] = None


ImageList = PaginatedList[Image]
