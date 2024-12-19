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

export const replaceWorkspaceQuotaPathParamsSchema = z.object({
	workspace: z.string(),
});
export type ReplaceWorkspaceQuotaPathParamsSchema = z.infer<
	typeof replaceWorkspaceQuotaPathParamsSchema
>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuota200Schema = z.lazy(
	() => workspaceQuotaSchema,
);
export type ReplaceWorkspaceQuota200Schema = z.infer<
	typeof replaceWorkspaceQuota200Schema
>;
/**
 * @description Unprocessable Entity
 */
export const replaceWorkspaceQuota422Schema = z.union([
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
export type ReplaceWorkspaceQuota422Schema = z.infer<
	typeof replaceWorkspaceQuota422Schema
>;

export const replaceWorkspaceQuotaMutationRequestSchema = z.lazy(
	() => workspaceQuotaSchema,
);
export type ReplaceWorkspaceQuotaMutationRequestSchema = z.infer<
	typeof replaceWorkspaceQuotaMutationRequestSchema
>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuotaMutationResponseSchema = z.lazy(
	() => workspaceQuotaSchema,
);
export type ReplaceWorkspaceQuotaMutationResponseSchema = z.infer<
	typeof replaceWorkspaceQuotaMutationResponseSchema
>;
