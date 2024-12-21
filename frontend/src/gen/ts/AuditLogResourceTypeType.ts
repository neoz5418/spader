export const auditLogResourceType = {
    "instance": "instance",
    "image": "image",
    "file_storage": "file_storage",
    "workspace": "workspace",
    "user": "user",
    "ssh_key": "ssh_key",
    "api_key": "api_key"
} as const;
export type AuditLogResourceTypeType = (typeof auditLogResourceType)[keyof typeof auditLogResourceType];