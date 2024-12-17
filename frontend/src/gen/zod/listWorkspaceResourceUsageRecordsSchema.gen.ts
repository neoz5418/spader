import { z } from "@/utils/zod.ts";
import { paginatedListResourceUsageRecordSchema } from "./paginatedListResourceUsageRecordSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const listWorkspaceResourceUsageRecords400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceResourceUsageRecords400Schema = z.infer<typeof listWorkspaceResourceUsageRecords400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceResourceUsageRecords401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceResourceUsageRecords401Schema = z.infer<typeof listWorkspaceResourceUsageRecords401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceResourceUsageRecords404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceResourceUsageRecords404Schema = z.infer<typeof listWorkspaceResourceUsageRecords404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceResourceUsageRecords409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceResourceUsageRecords409Schema = z.infer<typeof listWorkspaceResourceUsageRecords409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceResourceUsageRecords412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceResourceUsageRecords412Schema = z.infer<typeof listWorkspaceResourceUsageRecords412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceResourceUsageRecords422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceResourceUsageRecords422Schema = z.infer<typeof listWorkspaceResourceUsageRecords422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceResourceUsageRecords500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceResourceUsageRecords500Schema = z.infer<typeof listWorkspaceResourceUsageRecords500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceResourceUsageRecordsQueryResponseSchema = z.lazy(() => paginatedListResourceUsageRecordSchema);
export type ListWorkspaceResourceUsageRecordsQueryResponseSchema = z.infer<typeof listWorkspaceResourceUsageRecordsQueryResponseSchema>;
