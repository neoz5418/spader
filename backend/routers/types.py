import re
from datetime import datetime
from enum import auto, Enum, StrEnum
from typing import Annotated, Literal, Optional
from pydantic import (
    BaseModel,
    ByteSize,
    EmailStr,
    field_validator,
)
from pydantic_extra_types.phone_numbers import PhoneNumber
from sqlalchemy import Column, DateTime, JSON
from sqlmodel import Field
from sqlmodel import SQLModel
from uuid import UUID

from services.active_record import ActiveRecordMixin
from services.common import (
    DisplayName,
    Name,
    PaginatedList,
    TimestampsMixin,
    UID,
)


class BaseModelMixin(ActiveRecordMixin, TimestampsMixin):
    pass


class SortOrder(Enum):
    ASC = "asc"
    DESC = "desc"


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


class Role(Enum):
    global_admin = "global_admin"
    user = "user"


class UserBase(SQLModel):
    uid: UUID = UID
    name: Name
    email: EmailStr
    display_name: DisplayName
    phone_number: PhoneNumber


class User(UserBase, BaseModelMixin, table=True):
    hashed_password: str
    role: Role


UserList = PaginatedList[User]


class UserPublic(UserBase, BaseModelMixin):
    pass


PasswordType = Annotated[
    str, Field(min_length=8, max_length=32, description=PASSWORD_DESCRIPTION)
]


class UserCreate(UserBase):
    password: PasswordType

    # don't know why the field_validator should before classmethod
    # if not, this validator will not run
    @field_validator("password")
    @classmethod
    def validate_password(cls, value: str) -> str:
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


class SendOneTimePasswordRequest(UserCreate):
    type: OneTimePasswordValidateType
    email: Optional[EmailStr] = None
    # phone_number: Optional[PhoneNumber] = None


class SendOneTimePasswordResponse(BaseModel):
    type: OneTimePasswordValidateType
    email: Optional[EmailStr] = None
    phone_number: Optional[PhoneNumber] = None


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


class SSHKeyCreate(BaseModel):
    name: Name
    public_key: str


class SSHKey(SQLModel, BaseModelMixin, table=True):
    workspace: str
    name: Name
    uid: UUID = UID
    public_key: str


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


class Currency(str, Enum):
    CNY = "CNY"
    USD = "USD"


class WorkspaceAccount(SQLModel, ActiveRecordMixin, table=True):
    workspace: str = Field(primary_key=True, nullable=False)
    balance: int
    currency: Currency

    def check_balance(self, price_pre_hour: int, hours: int = 1) -> bool:
        if price_pre_hour * hours > self.balance:
            return False
        return True


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


class BillingPeriod(StrEnum):
    one_hour = "one_hour"
    one_day = "one_day"
    one_week = "one_week"
    two_week = "two_week"
    one_month = "one_month"
    three_month = "three_month"


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
    gpu_memory: ByteSize
    memory: ByteSize
    cpu: int
    disk_size: ByteSize
    disk_type: DiskType
    zones: list[str] = Field(sa_column=Column(JSON))


class GPUTypePublic(GPUTypeBase):
    prices: list[Price]


class GPUTypePriceList(list[Price]):
    @property
    def one_hour_price(self) -> Price | None:
        for price in self:
            p = Price.model_validate(price)
            if p.period == BillingPeriod.one_hour:
                return p
        return None


class GPUType(GPUTypeBase, BaseModelMixin, table=True):
    provider_config: dict = Field(sa_column=Column(JSON))
    price_config: list = Field(sa_column=Column(JSON))

    @property
    def prices(self) -> GPUTypePriceList:
        return GPUTypePriceList(self.price_config)

    @property
    def ecloud(self) -> GPUProviderConfigEcloud:
        return GPUProviderConfigEcloud(**self.provider_config)

    @ecloud.setter
    def ecloud(self, value):
        self.provider_config = value

    @property
    def is_cpu_instance(self) -> bool:
        return self.name.startswith("cpu")


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
    display_name: DisplayName


class Zone(ZoneBase, BaseModelMixin, table=True):
    provider: Provider
    provider_config: dict = Field(sa_column=Column(JSON))

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


class OperationType(str, Enum):
    start_instance = auto()
    delete_instance = auto()
    stop_instance = auto()
    create_instance = auto()


class Operation(SQLModel, ActiveRecordMixin, table=True):
    uid: UUID = UID
    type: OperationType

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


# OperationList = CursorList[Operation]
OperationList = PaginatedList[Operation]


class InstanceStatus(str, Enum):
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


class InstanceBase(SQLModel, BaseModelMixin):
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


class Instance(InstanceBase, table=True):
    pass


class InstancePublic(InstanceBase):
    gpu_display_name: str
    zone_display_name: str


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
InstancePublicList = PaginatedList[InstancePublic]


class CreateInstanceRequest(BaseModel):
    name: Name
    display_name: DisplayName

    zone: str
    gpu_count: int
    gpu_type: str

    file_storages: list[str] = []

    image: str


class UpdateInstanceRequest(BaseModel):
    display_name: DisplayName


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


class AuditLogActionType(str, Enum):
    create = "create"
    update = "update"
    delete = "delete"
    start = "start"
    stop = "stop"
    list = "list"


class AuditLogResourceType(str, Enum):
    instance = "instance"
    image = "image"
    file_storage = "file_storage"
    workspace = "workspace"
    user = "user"
    ssh_key = "ssh_key"
    api_key = "api_key"


class AuditLog(SQLModel, ActiveRecordMixin, table=True):
    uid: UUID = UID
    user_id: UUID
    user_email: Optional[str] = None
    resource_id: UUID
    resource_type: AuditLogResourceType
    action: AuditLogActionType
    create_time: datetime
    description: Optional[str] = None
    workspace: Optional[
        str
    ] = None  # empty string if the action is not related to a workspace
    zone: Optional[str] = None  # empty string if the action is not related to a zone


AuditLogList = PaginatedList[AuditLog]
