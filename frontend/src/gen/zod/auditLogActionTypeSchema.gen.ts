import { z } from "@/utils/zod.ts";


export const auditLogActionTypeSchema = z.enum(["1", "2", "3", "4", "5", "6"]);
export type AuditLogActionTypeSchema = z.infer<typeof auditLogActionTypeSchema>;