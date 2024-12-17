import { z } from "@/utils/zod.ts";
import { paginatedListFileStorageSchema } from "./paginatedListFileStorageSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listWorkspaceFileStoragesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceFileStoragesPathParamsSchema = z.infer<typeof listWorkspaceFileStoragesPathParamsSchema>;

 export const listWorkspaceFileStoragesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceFileStoragesQueryParamsSchema = z.infer<typeof listWorkspaceFileStoragesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceFileStorages200Schema = z.lazy(() => paginatedListFileStorageSchema);
export type ListWorkspaceFileStorages200Schema = z.infer<typeof listWorkspaceFileStorages200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceFileStorages400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceFileStorages400Schema = z.infer<typeof listWorkspaceFileStorages400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceFileStorages401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceFileStorages401Schema = z.infer<typeof listWorkspaceFileStorages401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceFileStorages404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceFileStorages404Schema = z.infer<typeof listWorkspaceFileStorages404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceFileStorages409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceFileStorages409Schema = z.infer<typeof listWorkspaceFileStorages409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceFileStorages412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceFileStorages412Schema = z.infer<typeof listWorkspaceFileStorages412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceFileStorages422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceFileStorages422Schema = z.infer<typeof listWorkspaceFileStorages422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceFileStorages500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceFileStorages500Schema = z.infer<typeof listWorkspaceFileStorages500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceFileStoragesQueryResponseSchema = z.lazy(() => paginatedListFileStorageSchema);
export type ListWorkspaceFileStoragesQueryResponseSchema = z.infer<typeof listWorkspaceFileStoragesQueryResponseSchema>;
