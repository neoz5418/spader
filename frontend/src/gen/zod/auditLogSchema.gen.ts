import { auditLogResourceTypeSchema } from "./auditLogResourceTypeSchema.gen";
import { auditLogActionTypeSchema } from "./auditLogActionTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const auditLogSchema = z.object({ "uid": z.string().uuid().optional(), "user_id": z.string().uuid(), "user_email": z.union([z.string(), z.null()]).optional(), "resource_id": z.string().uuid(), "resource_type": z.lazy(() => auditLogResourceTypeSchema), "action": z.lazy(() => auditLogActionTypeSchema), "create_time": z.string().datetime(), "description": z.union([z.string(), z.null()]).optional(), "workspace": z.union([z.string(), z.null()]).optional(), "zone": z.union([z.string(), z.null()]).optional() });
export type AuditLogSchema = z.infer<typeof auditLogSchema>;