import { z } from "@/utils/zod.ts";
import { paginatedListResourceUsageRecordSchema } from "./paginatedListResourceUsageRecordSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceResourceUsageRecordsPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceResourceUsageRecordsPathParamsSchema = z.infer<typeof listWorkspaceResourceUsageRecordsPathParamsSchema>;

 export const listWorkspaceResourceUsageRecordsQueryParamsSchema = z.object({ "target_id": z.string().uuid(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() });
export type ListWorkspaceResourceUsageRecordsQueryParamsSchema = z.infer<typeof listWorkspaceResourceUsageRecordsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceResourceUsageRecords200Schema = z.lazy(() => paginatedListResourceUsageRecordSchema);
export type ListWorkspaceResourceUsageRecords200Schema = z.infer<typeof listWorkspaceResourceUsageRecords200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceResourceUsageRecords400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords400Schema = z.infer<typeof listWorkspaceResourceUsageRecords400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceResourceUsageRecords401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords401Schema = z.infer<typeof listWorkspaceResourceUsageRecords401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceResourceUsageRecords404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords404Schema = z.infer<typeof listWorkspaceResourceUsageRecords404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceResourceUsageRecords422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords422Schema = z.infer<typeof listWorkspaceResourceUsageRecords422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceResourceUsageRecords429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords429Schema = z.infer<typeof listWorkspaceResourceUsageRecords429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceResourceUsageRecords500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords500Schema = z.infer<typeof listWorkspaceResourceUsageRecords500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceResourceUsageRecords503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceResourceUsageRecords503Schema = z.infer<typeof listWorkspaceResourceUsageRecords503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceResourceUsageRecordsQueryResponseSchema = z.lazy(() => paginatedListResourceUsageRecordSchema);
export type ListWorkspaceResourceUsageRecordsQueryResponseSchema = z.infer<typeof listWorkspaceResourceUsageRecordsQueryResponseSchema>;
