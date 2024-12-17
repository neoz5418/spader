import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypeSchema } from "./paginatedListGpuTypeSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listWorkspaceZoneGpuTypesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceZoneGpuTypesPathParamsSchema = z.infer<typeof listWorkspaceZoneGpuTypesPathParamsSchema>;

 export const listWorkspaceZoneGpuTypesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceZoneGpuTypesQueryParamsSchema = z.infer<typeof listWorkspaceZoneGpuTypesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZoneGpuTypes200Schema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListWorkspaceZoneGpuTypes200Schema = z.infer<typeof listWorkspaceZoneGpuTypes200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceZoneGpuTypes400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceZoneGpuTypes400Schema = z.infer<typeof listWorkspaceZoneGpuTypes400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceZoneGpuTypes401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceZoneGpuTypes401Schema = z.infer<typeof listWorkspaceZoneGpuTypes401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceZoneGpuTypes404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceZoneGpuTypes404Schema = z.infer<typeof listWorkspaceZoneGpuTypes404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceZoneGpuTypes409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceZoneGpuTypes409Schema = z.infer<typeof listWorkspaceZoneGpuTypes409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceZoneGpuTypes412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceZoneGpuTypes412Schema = z.infer<typeof listWorkspaceZoneGpuTypes412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceZoneGpuTypes422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceZoneGpuTypes422Schema = z.infer<typeof listWorkspaceZoneGpuTypes422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceZoneGpuTypes500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceZoneGpuTypes500Schema = z.infer<typeof listWorkspaceZoneGpuTypes500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZoneGpuTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListWorkspaceZoneGpuTypesQueryResponseSchema = z.infer<typeof listWorkspaceZoneGpuTypesQueryResponseSchema>;
