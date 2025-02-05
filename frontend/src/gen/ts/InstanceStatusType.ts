export const instanceStatus = {
    "provisioning": "provisioning",
    "staging": "staging",
    "running": "running",
    "stopping": "stopping",
    "terminated": "terminated",
    "deleted": "deleted"
} as const;
export type InstanceStatusType = (typeof instanceStatus)[keyof typeof instanceStatus];