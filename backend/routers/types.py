import re
from datetime import datetime
from enum import Enum
from typing import Annotated, Literal, Optional

from pydantic import (
    BaseModel,
    ByteSize,
    EmailStr,
    field_validator,
    computed_field,
)
from pydantic_extra_types.phone_numbers import PhoneNumber
from sqlalchemy import Column, DateTime, JSON
from sqlmodel import Field
from sqlmodel import SQLModel
from uuid import UUID

from services.active_record import ActiveRecordMixin
from services.common import (
    CursorList,
    DisplayName,
    Name,
    PaginatedList,
    TimestampsMixin,
    UID,
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
    CNY = "CNY"
    USD = "USD"


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


class GPUProviderConfigEcloud(SQLModel):
    provider: Literal["ecloud"]
    boot_volume_type: str
    boot_volume_size: int
    specs_name: str
    server_type: str
    vm_type: str
    ram: int
    cpu: int


class GPUTypeBase(SQLModel):
    name: str = Field(primary_key=True, nullable=False)
    display_name: DisplayName
    description: Optional[str] = None
    gpuMemory: ByteSize
    memory: ByteSize
    cpu: int
    disk_size: ByteSize
    disk_type: DiskType
    zone: str


class GPUType(GPUTypeBase, BaseModelMixin, table=True):
    provider_config: dict = Field(sa_column=Column(JSON))

    @computed_field
    @property
    def ecloud(self) -> GPUProviderConfigEcloud:
        return GPUProviderConfigEcloud(**self.provider_config)

    @ecloud.setter
    def ecloud(self, value):
        self.provider_config = value


class GPUTypePublic(GPUTypeBase):
    pass


GPUTypeList = PaginatedList[GPUType]
GPUTypePublicList = PaginatedList[GPUTypePublic]


class Provider(Enum):
    ecloud = "ecloud"


class ProviderZoneConfigEcloud(SQLModel):
    provider: Literal["ecloud"]
    default_image_name: str
    default_image_id: str
    region: str
    pool_id: str
    network_id: str
    security_group_id: str


class ZoneBase(SQLModel):
    name: str = Field(primary_key=True, nullable=False)


class Zone(ZoneBase, BaseModelMixin, table=True):
    provider: Provider
    provider_config: dict = Field(sa_column=Column(JSON))

    @computed_field
    @property
    def ecloud(self) -> ProviderZoneConfigEcloud:
        return ProviderZoneConfigEcloud(**self.provider_config)

    @ecloud.setter
    def ecloud(self, value):
        self.provider_config = value


ZoneList = PaginatedList[Zone]


class ZonePublic(ZoneBase):
    pass


ZonePublicList = PaginatedList[ZonePublic]


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
    An instance can be in one of the following states:

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

    target_id: str = Field(default="")

    services: dict = Field(sa_column=Column(JSON), default={})


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


class RechargeType(Enum):
    alipay = "alipay"


class RechargeStatus(Enum):
    pending = "pending"
    succeeded = "succeeded"
    failed = "failed"


class WorkspaceAccountRecharge(SQLModel, BaseModelMixin, table=True):
    uid: UUID = UID
    workspace: str
    currency: Currency
    amount: int
    type: RechargeType
    pay_url: str
    status: RechargeStatus


WorkspaceAccountRechargeList = PaginatedList[WorkspaceAccountRecharge]


class RechargeWorkspaceAccount(BaseModel):
    amount: int
    currency: Currency
    type: RechargeType
    callback_url: str
