import { z } from "@/utils/zod.ts";


export const auditLogResourceTypeSchema = z.enum(["1", "2", "3", "4", "5", "6", "7"]);
export type AuditLogResourceTypeSchema = z.infer<typeof auditLogResourceTypeSchema>;