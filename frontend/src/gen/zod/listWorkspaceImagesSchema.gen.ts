import { z } from "@/utils/zod.ts";
import { paginatedListImageSchema } from "./paginatedListImageSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listWorkspaceImagesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceImagesPathParamsSchema = z.infer<typeof listWorkspaceImagesPathParamsSchema>;

 export const listWorkspaceImagesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceImagesQueryParamsSchema = z.infer<typeof listWorkspaceImagesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceImages200Schema = z.lazy(() => paginatedListImageSchema);
export type ListWorkspaceImages200Schema = z.infer<typeof listWorkspaceImages200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceImages400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceImages400Schema = z.infer<typeof listWorkspaceImages400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceImages401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceImages401Schema = z.infer<typeof listWorkspaceImages401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceImages404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceImages404Schema = z.infer<typeof listWorkspaceImages404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceImages409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceImages409Schema = z.infer<typeof listWorkspaceImages409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceImages412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceImages412Schema = z.infer<typeof listWorkspaceImages412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceImages422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceImages422Schema = z.infer<typeof listWorkspaceImages422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceImages500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceImages500Schema = z.infer<typeof listWorkspaceImages500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceImagesQueryResponseSchema = z.lazy(() => paginatedListImageSchema);
export type ListWorkspaceImagesQueryResponseSchema = z.infer<typeof listWorkspaceImagesQueryResponseSchema>;
