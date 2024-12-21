export const auditLogActionType = {
    "create": "create",
    "update": "update",
    "delete": "delete",
    "start": "start",
    "stop": "stop",
    "list": "list"
} as const;
export type AuditLogActionTypeType = (typeof auditLogActionType)[keyof typeof auditLogActionType];