import { z } from "@/utils/zod.ts";


export const listAuditLogsSortOptionsSchema = z.enum(["create_time"]);
export type ListAuditLogsSortOptionsSchema = z.infer<typeof listAuditLogsSortOptionsSchema>;