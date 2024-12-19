export const fileStorageStatus = {
    "provisioning": "provisioning",
    "ready": "ready",
    "failed": "failed",
    "deleting": "deleting"
} as const;
export type FileStorageStatusType = (typeof fileStorageStatus)[keyof typeof fileStorageStatus];