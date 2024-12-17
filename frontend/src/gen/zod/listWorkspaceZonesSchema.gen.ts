import { z } from "@/utils/zod.ts";
import { paginatedListZoneSchema } from "./paginatedListZoneSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listWorkspaceZonesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceZonesPathParamsSchema = z.infer<typeof listWorkspaceZonesPathParamsSchema>;

 export const listWorkspaceZonesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceZonesQueryParamsSchema = z.infer<typeof listWorkspaceZonesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZones200Schema = z.lazy(() => paginatedListZoneSchema);
export type ListWorkspaceZones200Schema = z.infer<typeof listWorkspaceZones200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceZones400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceZones400Schema = z.infer<typeof listWorkspaceZones400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceZones401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceZones401Schema = z.infer<typeof listWorkspaceZones401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceZones404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceZones404Schema = z.infer<typeof listWorkspaceZones404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceZones409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceZones409Schema = z.infer<typeof listWorkspaceZones409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceZones412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceZones412Schema = z.infer<typeof listWorkspaceZones412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceZones422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceZones422Schema = z.infer<typeof listWorkspaceZones422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceZones500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceZones500Schema = z.infer<typeof listWorkspaceZones500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZonesQueryResponseSchema = z.lazy(() => paginatedListZoneSchema);
export type ListWorkspaceZonesQueryResponseSchema = z.infer<typeof listWorkspaceZonesQueryResponseSchema>;
