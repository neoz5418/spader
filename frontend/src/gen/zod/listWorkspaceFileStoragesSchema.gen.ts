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
import { paginatedListFileStorageSchema } from "./paginatedListFileStorageSchema.gen";

export const listWorkspaceFileStoragesPathParamsSchema = z.object({
	workspace: z.string(),
	zone: z.string(),
});
export type ListWorkspaceFileStoragesPathParamsSchema = z.infer<
	typeof listWorkspaceFileStoragesPathParamsSchema
>;

export const listWorkspaceFileStoragesQueryParamsSchema = z
	.object({
		offset: z.number().int().min(0).default(0).optional(),
		limit: z.number().int().min(1).max(100).default(20).optional(),
	})
	.optional();
export type ListWorkspaceFileStoragesQueryParamsSchema = z.infer<
	typeof listWorkspaceFileStoragesQueryParamsSchema
>;
/**
 * @description Successful Response
 */
export const listWorkspaceFileStorages200Schema = z.lazy(
	() => paginatedListFileStorageSchema,
);
export type ListWorkspaceFileStorages200Schema = z.infer<
	typeof listWorkspaceFileStorages200Schema
>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceFileStorages422Schema = z.union([
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
export type ListWorkspaceFileStorages422Schema = z.infer<
	typeof listWorkspaceFileStorages422Schema
>;
/**
 * @description Successful Response
 */
export const listWorkspaceFileStoragesQueryResponseSchema = z.lazy(
	() => paginatedListFileStorageSchema,
);
export type ListWorkspaceFileStoragesQueryResponseSchema = z.infer<
	typeof listWorkspaceFileStoragesQueryResponseSchema
>;
