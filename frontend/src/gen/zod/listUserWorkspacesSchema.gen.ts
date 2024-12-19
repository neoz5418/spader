import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceSchema } from "./paginatedListWorkspaceSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


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
 * @description Unprocessable Entity
 */
export const listUserWorkspaces422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListUserWorkspaces422Schema = z.infer<typeof listUserWorkspaces422Schema>;
/**
 * @description Successful Response
 */
export const listUserWorkspacesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListUserWorkspacesQueryResponseSchema = z.infer<typeof listUserWorkspacesQueryResponseSchema>;