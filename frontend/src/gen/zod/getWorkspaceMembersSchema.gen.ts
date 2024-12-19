import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceMemberSchema } from "./paginatedListWorkspaceMemberSchema.gen";
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


export const getWorkspaceMembersPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceMembersPathParamsSchema = z.infer<typeof getWorkspaceMembersPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceMembers200Schema = z.lazy(() => paginatedListWorkspaceMemberSchema);
export type GetWorkspaceMembers200Schema = z.infer<typeof getWorkspaceMembers200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceMembers422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceMembers422Schema = z.infer<typeof getWorkspaceMembers422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceMembersQueryResponseSchema = z.lazy(() => paginatedListWorkspaceMemberSchema);
export type GetWorkspaceMembersQueryResponseSchema = z.infer<typeof getWorkspaceMembersQueryResponseSchema>;