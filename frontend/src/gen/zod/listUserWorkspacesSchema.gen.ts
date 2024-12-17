import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceSchema } from "./paginatedListWorkspaceSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listUserWorkspacesPathParamsSchema = z.object({ "username": z.string() });
export type ListUserWorkspacesPathParamsSchema = z.infer<typeof listUserWorkspacesPathParamsSchema>;

 export const listUserWorkspacesQueryParamsSchema = z.object({ "search": z.string().optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListUserWorkspacesQueryParamsSchema = z.infer<typeof listUserWorkspacesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listUserWorkspaces200Schema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListUserWorkspaces200Schema = z.infer<typeof listUserWorkspaces200Schema>;
/**
 * @description Request error
 */
export const listUserWorkspaces400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListUserWorkspaces400Schema = z.infer<typeof listUserWorkspaces400Schema>;
/**
 * @description Unauthorized
 */
export const listUserWorkspaces401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListUserWorkspaces401Schema = z.infer<typeof listUserWorkspaces401Schema>;
/**
 * @description Not found
 */
export const listUserWorkspaces404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListUserWorkspaces404Schema = z.infer<typeof listUserWorkspaces404Schema>;
/**
 * @description Resource conflict
 */
export const listUserWorkspaces409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListUserWorkspaces409Schema = z.infer<typeof listUserWorkspaces409Schema>;
/**
 * @description Precondition failed
 */
export const listUserWorkspaces412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListUserWorkspaces412Schema = z.infer<typeof listUserWorkspaces412Schema>;
/**
 * @description Validation error
 */
export const listUserWorkspaces422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListUserWorkspaces422Schema = z.infer<typeof listUserWorkspaces422Schema>;
/**
 * @description Internal server error
 */
export const listUserWorkspaces500Schema = z.lazy(() => errorInternalSchema);
export type ListUserWorkspaces500Schema = z.infer<typeof listUserWorkspaces500Schema>;
/**
 * @description Successful Response
 */
export const listUserWorkspacesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListUserWorkspacesQueryResponseSchema = z.infer<typeof listUserWorkspacesQueryResponseSchema>;
