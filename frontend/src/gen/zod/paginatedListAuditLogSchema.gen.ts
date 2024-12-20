import { auditLogSchema } from "./auditLogSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListAuditLogSchema = z.object({ "items": z.array(z.lazy(() => auditLogSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListAuditLogSchema = z.infer<typeof paginatedListAuditLogSchema>;