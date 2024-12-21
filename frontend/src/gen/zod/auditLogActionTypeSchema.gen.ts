import { z } from "@/utils/zod.ts";


export const auditLogActionTypeSchema = z.enum(["create", "update", "delete", "start", "stop", "list"]);
export type AuditLogActionTypeSchema = z.infer<typeof auditLogActionTypeSchema>;