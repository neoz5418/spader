import { z } from "@/utils/zod.ts";


export const auditLogResourceTypeSchema = z.enum(["instance", "image", "file_storage", "workspace", "user", "ssh_key", "api_key"]);
export type AuditLogResourceTypeSchema = z.infer<typeof auditLogResourceTypeSchema>;