export const auditLogActionType = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6"
} as const;
export type AuditLogActionTypeType = (typeof auditLogActionType)[keyof typeof auditLogActionType];