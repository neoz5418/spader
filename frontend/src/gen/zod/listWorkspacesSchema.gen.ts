import { z } from "@/utils/zod.ts";
import { listWorkspacesSortOptionsSchema } from "./listWorkspacesSortOptionsSchema.gen";
import { directionSchema } from "./directionSchema.gen";
import { paginatedListWorkspaceSchema } from "./paginatedListWorkspaceSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listWorkspacesQueryParamsSchema = z.object({ "sort": z.lazy(() => listWorkspacesSortOptionsSchema).optional(), "direction": z.lazy(() => directionSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspacesQueryParamsSchema = z.infer<typeof listWorkspacesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaces200Schema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListWorkspaces200Schema = z.infer<typeof listWorkspaces200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaces422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaces422Schema = z.infer<typeof listWorkspaces422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspacesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListWorkspacesQueryResponseSchema = z.infer<typeof listWorkspacesQueryResponseSchema>;