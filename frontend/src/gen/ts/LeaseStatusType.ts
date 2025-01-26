export const leaseStatus = {
    "active": "active",
    "in_debt": "in_debt",
    "expired": "expired",
    "deleted": "deleted",
    "completed": "completed"
} as const;
export type LeaseStatusType = (typeof leaseStatus)[keyof typeof leaseStatus];