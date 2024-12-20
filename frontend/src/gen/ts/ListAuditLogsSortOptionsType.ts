export const listAuditLogsSortOptions = {
    "create_time": "create_time"
} as const;
export type ListAuditLogsSortOptionsType = (typeof listAuditLogsSortOptions)[keyof typeof listAuditLogsSortOptions];