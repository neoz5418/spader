import re
from datetime import datetime, timedelta
from enum import auto, Enum
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
    utcnow,
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


class WorkspaceAccount(BaseModel):
    workspace: UUID
    balance: int
    # total_top_up: int
    rate_per_hour: int
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


class DiskType(str, Enum):
    SSD = "SSD"
    HDD = "HDD"


class BillingPeriod(str, Enum):
    one_hour = "one_hour"
    one_day = "one_day"
    one_week = "one_week"
    one_month = "one_month"
    real_time = "real_time"


class Price(BaseModel):
    currency: Currency
    price: int
    period: BillingPeriod


class BillingPrice(SQLModel, ActiveRecordMixin, table=True):
    name: str = Field(primary_key=True)
    real_time: int
    one_hour: int
    one_day: int
    one_week: int
    one_month: int
    currency: Currency

    def to_price_list(self) -> list[Price]:
        price_list = []
        if self.real_time >= 0:
            price_list.append(
                Price(
                    currency=self.currency,
                    price=self.real_time,
                    period=BillingPeriod.real_time,
                )
            )
        if self.one_hour >= 0:
            price_list.append(
                Price(
                    currency=self.currency,
                    price=self.one_hour,
                    period=BillingPeriod.one_hour,
                )
            )
        if self.one_day >= 0:
            price_list.append(
                Price(
                    currency=self.currency,
                    price=self.one_day,
                    period=BillingPeriod.one_day,
                )
            )
        if self.one_week >= 0:
            price_list.append(
                Price(
                    currency=self.currency,
                    price=self.one_week,
                    period=BillingPeriod.one_week,
                )
            )
        if self.one_month >= 0:
            price_list.append(
                Price(
                    currency=self.currency,
                    price=self.one_month,
                    period=BillingPeriod.one_month,
                )
            )
        return price_list


class ResourceType(str, Enum):
    instance = "instance"
    volume = "volume"
    snapshot = "snapshot"


# 定义计费记录类型（充值或扣款）
class BillingRecordType(str, Enum):
    deduction = "deduction"  # 扣款
    top_up = "top_up"  # 充值


# 定义计费记录表
class BillingRecord(SQLModel, ActiveRecordMixin, table=True):
    uid: UUID = UID  # 记录唯一标识
    type: BillingRecordType = Field(index=True)  # 记录类型（扣款或充值）
    resource_type: Optional[ResourceType]  # 资源类型（如充值，则无）
    resource_id: Optional[UUID] = Field(index=True)  # 资源 ID（如充值，则无）
    amount: int  # 交易金额（分，正数表示充值，负数表示扣款）
    billing_time: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 记录时间
    balance_before: int  # 交易前余额
    balance_after: int  # 交易后余额
    account: UUID  # 关联账户
    coupon: Optional[UUID] = None  # 关联的优惠券（如使用优惠券）
    meta_data: Optional[dict] = Field(
        default_factory=dict, sa_column=Column(JSON)
    )  # 额外信息（如备注，折扣）


BillingRecordList = PaginatedList[BillingRecord]


# 定义实时计费记录表
class BillingRealTimeRecord(SQLModel, ActiveRecordMixin, table=True):
    uid: UUID = UID  # 记录唯一标识
    account: UUID = Field(index=True)  # 关联账户
    start_time: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 计费开始时间
    end_time: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 计费结束时间，如果为 datetime.min，则计费未结束
    rate_per_hour: int  # 每小时价格（分）
    resource_type: ResourceType
    resource_id: UUID = Field(index=True)
    coupon: Optional[UUID] = None  # 关联的优惠券（如使用优惠券来抵扣）
    meta_data: Optional[dict] = Field(
        default_factory=dict, sa_column=Column(JSON)
    )  # 额外信息，折扣等


class LeaseStatus(str, Enum):
    active = "active"  # 活跃状态
    in_debt = "in_debt"  # 已欠费
    expired = "expired"  # 已过期
    deleted = "deleted"  # 已删除


class AutoRenewPeriod(str, Enum):
    none = "none"  # 不自动续租
    one_hour = BillingPeriod.one_hour.value
    one_day = BillingPeriod.one_day.value
    one_week = BillingPeriod.one_week.value
    one_month = BillingPeriod.one_month.value
    real_time = BillingPeriod.real_time.value


class LeaseBase(BaseModel):
    lease_period: BillingPeriod = Field(
        index=True, default=BillingPeriod.real_time
    )  # 租约类型
    auto_renew_period: AutoRenewPeriod = Field(
        default=AutoRenewPeriod.none, index=True
    )  # 自动续租类型
    coupon: Optional[UUID] = Field(default=None, index=True)

    def calculate_end_time(self, start_time: datetime) -> datetime:
        end_time = datetime.max
        if self.lease_period != BillingPeriod.real_time:
            match self.lease_period:
                case BillingPeriod.one_hour:
                    end_time = start_time + timedelta(hours=1)
                case BillingPeriod.one_day:
                    end_time = start_time + timedelta(days=1)
                case BillingPeriod.one_week:
                    end_time = start_time + timedelta(weeks=1)
                case BillingPeriod.one_month:
                    end_time = start_time + timedelta(days=30)
        return end_time


class BillingLease(SQLModel, LeaseBase, ActiveRecordMixin, table=True):
    uid: UUID = UID
    account: UUID = Field(index=True)  # 关联的用户账户
    resource_id: UUID = Field(index=True)  # 关联的资源 ID
    resource_type: ResourceType = Field(index=True)  # 资源类型
    status: LeaseStatus = Field(default=LeaseStatus.active, index=True)  # 租约状态
    lease_price: str = Field(index=True)  # 租约价格
    start_time: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 租约开始时间
    end_time: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 租约到期时间
    meta_data: Optional[dict] = Field(
        default_factory=dict, sa_column=Column(JSON)
    )  # 扩展字段


class BillingBalance(BaseModel):
    balance: int = Field(default=0)  # 当前余额（分）


# 定义账户表
class BillingAccount(SQLModel, ActiveRecordMixin, BillingBalance, table=True):
    uid: UUID = UID  # 账户唯一标识
    meta_data: Optional[dict] = Field(
        default_factory=dict, sa_column=Column(JSON)
    )  # 额外信息


class CouponType(str, Enum):
    discount = "discount"  # 满减券
    cash = "cash"  # 代金券


class PricingDetails(BaseModel):
    original_price: int  # 原价（分）
    discount_amount: int  # 优惠金额（分）
    final_price: int  # 最终价格（分）


class BillingCouponBase(BillingBalance):
    display_name: DisplayName
    type: CouponType = Field(index=True)  # 优惠券类型
    max_discount_value: int = Field(default=0)  # 最大抵扣金额（分，满减卷有效）
    min_purchase: int = Field(default=0)  # 生效门槛（分，满减券有效）
    discount_rate: int = Field(default=100)  # 折扣比例（0-100，例如80表示八折）
    applicable_resource_type: str = Field(default="")  # 适用资源类型（支持通配符*）
    valid_from: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 优惠券有效期开始时间
    valid_to: datetime = Field(
        sa_type=DateTime(timezone=True), index=True
    )  # 优惠券有效期结束时间

    def calculate_final_price(self, original_price: int) -> int:
        """
        计算优惠后的金额
        :param original_price: 总金额（分）
        :return: 优惠后的金额（分）
        """
        # 如果不满足生效门槛，返回原始金额
        if original_price < self.min_purchase:
            return original_price

        # 如果是全额折扣（0折），直接优惠到最大折扣金额
        if self.discount_rate == 0:
            if self.max_discount_value > 0:
                return max(original_price - self.max_discount_value, 0)
            else:
                return 0

        # 如果是不打折（100%），直接返回原始金额
        if self.discount_rate == 100:
            return original_price

        # 计算优惠金额（原价 * 优惠比例）
        discount_by_rate = int(original_price * (100 - self.discount_rate) / 100)

        # 如果有最大折扣限制，则优惠金额不能超过最大抵扣金额
        if self.max_discount_value > 0:
            discount_amount = min(discount_by_rate, self.max_discount_value)
        else:
            discount_amount = discount_by_rate

        # 应用优惠，返回优惠后的金额
        return max(original_price - discount_amount, 0)


class BillingCoupon(SQLModel, ActiveRecordMixin, BillingCouponBase, table=True):
    uid: UUID = UID  # 优惠券唯一标识
    name: str
    account: UUID = Field(index=True)  # 关联账户
    used: bool = Field(default=False, index=True)  # 是否已使用
    meta_data: dict = Field(default_factory=dict, sa_column=Column(JSON))  # 扩展字段
    claim_time: datetime = Field(sa_type=DateTime(timezone=True), index=True)


BillingCouponList = PaginatedList[BillingCoupon]


# 分配规则枚举
class BillingCouponDistributionRule(str, Enum):
    manual = "manual"  # 手动分配
    auto_registered = "auto_registered"  # 自动分配给已注册用户
    user_claim = "user_claim"  # 用户自行领取
    magic_link = "magic_link"  # 通过特殊链接领取


# 领取次数限制枚举
class BillingCouponClaimLimit(str, Enum):
    unlimited = "unlimited"  # 可多次领取
    once_per_account = "once_per_account"  # 每个账户仅领取一次
    # once_per_month = "once_per_month"  # 每个账户每月领取一次


class BillingCouponClass(SQLModel, ActiveRecordMixin, BillingCouponBase, table=True):
    name: str = Field(primary_key=True)
    meta_data: dict = Field(default_factory=dict, sa_column=Column(JSON))  # 扩展字段
    distribution_rule: BillingCouponDistributionRule  # 分配规则
    claim_limit: BillingCouponClaimLimit  # 领取次数限制

    def assign_coupon(self, account: UUID) -> BillingCoupon:
        return BillingCoupon.model_validate(
            self,
            update={
                "account": account,
                "used": False,
                "claim_time": utcnow(),
            },
        )


class ExpensesResponse(SQLModel):
    date: datetime
    total: int
    expense_detail: dict[str, int]


class ListExpensesResponse(SQLModel):
    expense_types: list[str]
    expenses: list[ExpensesResponse]


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
    accelerator_type: Optional[str] = None



class GPUTypePublic(GPUTypeBase):
    prices: list[Price]


class PricedResourceMixin(BaseModel):
    price_name: str


class GPUType(GPUTypeBase, BaseModelMixin, PricedResourceMixin, table=True):
    provider_config: dict = Field(sa_column=Column(JSON))

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

    gpu_type: str

    image: str

    target_id: str = Field(default="")

    services: dict = Field(sa_column=Column(JSON), default={})


class Instance(InstanceBase, table=True):
    pass


class InstancePublic(InstanceBase, LeaseBase):
    gpu_display_name: str
    zone_display_name: str


class InstanceCost(PricingDetails):
    coupon: Optional[BillingCoupon]


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


class CreateInstanceRequest(LeaseBase):
    name: Name
    display_name: DisplayName

    zone: str
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


class AcceleratorTypeBase(SQLModel):
    name: str = Field(primary_key=True, nullable=False)
    display_name: DisplayName
    description: Optional[str] = None
    enable: bool = False
    gpu_memory: ByteSize
    memory_size: ByteSize
    memory_type: str
    memory_bandwidth: Optional[str] = None
    int8_tensor_core: Optional[str] = None
    bf16_tensor_core: Optional[str] = None
    tf32_tensor_core: Optional[str] = None
    fp32: Optional[str] = None
    fp64: Optional[str] = None
    mig: Optional[str] = None
    l2_cache: Optional[str] = None
    power: Optional[str] = None
    pcie: Optional[str] = None
    nvlink: Optional[str] = None
    architecture: Optional[str] = None


class AcceleratorType(AcceleratorTypeBase, BaseModelMixin, table=True):
    pass


AcceleratorTypeList = PaginatedList[AcceleratorType]


