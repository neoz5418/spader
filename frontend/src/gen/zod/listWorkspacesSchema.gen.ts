import { z } from "@/utils/zod.ts";
import { listWorkspacesSortOptionsSchema } from "./listWorkspacesSortOptionsSchema.gen";
import { directionSchema } from "./directionSchema.gen";
import { paginatedListWorkspaceSchema } from "./paginatedListWorkspaceSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listWorkspacesQueryParamsSchema = z.object({ "sort": z.lazy(() => listWorkspacesSortOptionsSchema).optional(), "direction": z.lazy(() => directionSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspacesQueryParamsSchema = z.infer<typeof listWorkspacesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaces200Schema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListWorkspaces200Schema = z.infer<typeof listWorkspaces200Schema>;
/**
 * @description Request error
 */
export const listWorkspaces400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaces400Schema = z.infer<typeof listWorkspaces400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaces401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaces401Schema = z.infer<typeof listWorkspaces401Schema>;
/**
 * @description Not found
 */
export const listWorkspaces404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaces404Schema = z.infer<typeof listWorkspaces404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaces409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaces409Schema = z.infer<typeof listWorkspaces409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaces412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaces412Schema = z.infer<typeof listWorkspaces412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaces422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaces422Schema = z.infer<typeof listWorkspaces422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaces500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaces500Schema = z.infer<typeof listWorkspaces500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspacesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListWorkspacesQueryResponseSchema = z.infer<typeof listWorkspacesQueryResponseSchema>;
