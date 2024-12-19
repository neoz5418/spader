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
import { workspaceZoneQuotaSchema } from "./workspaceZoneQuotaSchema.gen";

export const getWorkspaceZoneQuotaPathParamsSchema = z.object({
	workspace: z.string(),
	zone: z.string(),
});
export type GetWorkspaceZoneQuotaPathParamsSchema = z.infer<
	typeof getWorkspaceZoneQuotaPathParamsSchema
>;
/**
 * @description Successful Response
 */
export const getWorkspaceZoneQuota200Schema = z.lazy(
	() => workspaceZoneQuotaSchema,
);
export type GetWorkspaceZoneQuota200Schema = z.infer<
	typeof getWorkspaceZoneQuota200Schema
>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceZoneQuota422Schema = z.union([
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
export type GetWorkspaceZoneQuota422Schema = z.infer<
	typeof getWorkspaceZoneQuota422Schema
>;
/**
 * @description Successful Response
 */
export const getWorkspaceZoneQuotaQueryResponseSchema = z.lazy(
	() => workspaceZoneQuotaSchema,
);
export type GetWorkspaceZoneQuotaQueryResponseSchema = z.infer<
	typeof getWorkspaceZoneQuotaQueryResponseSchema
>;
