import { z } from "@/utils/zod.ts";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";

export const getWorkspaceQuotaPathParamsSchema = z.object({
	workspace: z.string(),
});
export type GetWorkspaceQuotaPathParamsSchema = z.infer<
	typeof getWorkspaceQuotaPathParamsSchema
>;
/**
 * @description Successful Response
 */
export const getWorkspaceQuota200Schema = z.lazy(() => workspaceQuotaSchema);
export type GetWorkspaceQuota200Schema = z.infer<
	typeof getWorkspaceQuota200Schema
>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceQuota422Schema = z.union([
	z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema),
	z.lazy(() => errorResourceNotFoundSchema),
	z.lazy(() => errorInternalSchema),
	z.lazy(() => errorInvalidArgumentSchema),
	z.lazy(() => errorPasswordMismatchSchema),
	z.lazy(() => errorRefreshTokenCannotBeEmptySchema),
	z.lazy(() => errorRefreshTokenExpiredSchema),
	z.lazy(() => errorRefreshTokenInvalidSchema),
	z.lazy(() => errorResourceConflictSchema),
	z.lazy(() => errorForbiddenSchema),
	z.lazy(() => errorUnauthorizedSchema),
	z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema),
	z.lazy(() => errorValidationFailedSchema),
]);
export type GetWorkspaceQuota422Schema = z.infer<
	typeof getWorkspaceQuota422Schema
>;
/**
 * @description Successful Response
 */
export const getWorkspaceQuotaQueryResponseSchema = z.lazy(
	() => workspaceQuotaSchema,
);
export type GetWorkspaceQuotaQueryResponseSchema = z.infer<
	typeof getWorkspaceQuotaQueryResponseSchema
>;
