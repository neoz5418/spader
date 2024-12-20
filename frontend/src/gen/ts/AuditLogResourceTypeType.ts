export const auditLogResourceType = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7"
} as const;
export type AuditLogResourceTypeType = (typeof auditLogResourceType)[keyof typeof auditLogResourceType];