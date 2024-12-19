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
import { paginatedListFileInfoSchema } from "./paginatedListFileInfoSchema.gen";

export const listFilesInFileStoragePathParamsSchema = z.object({
	workspace: z.string(),
	zone: z.string(),
	name: z.string(),
});
export type ListFilesInFileStoragePathParamsSchema = z.infer<
	typeof listFilesInFileStoragePathParamsSchema
>;

export const listFilesInFileStorageQueryParamsSchema = z
	.object({ path: z.string().default("/").optional() })
	.optional();
export type ListFilesInFileStorageQueryParamsSchema = z.infer<
	typeof listFilesInFileStorageQueryParamsSchema
>;
/**
 * @description Successful Response
 */
export const listFilesInFileStorage200Schema = z.lazy(
	() => paginatedListFileInfoSchema,
);
export type ListFilesInFileStorage200Schema = z.infer<
	typeof listFilesInFileStorage200Schema
>;
/**
 * @description Unprocessable Entity
 */
export const listFilesInFileStorage422Schema = z.union([
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
export type ListFilesInFileStorage422Schema = z.infer<
	typeof listFilesInFileStorage422Schema
>;
/**
 * @description Successful Response
 */
export const listFilesInFileStorageQueryResponseSchema = z.lazy(
	() => paginatedListFileInfoSchema,
);
export type ListFilesInFileStorageQueryResponseSchema = z.infer<
	typeof listFilesInFileStorageQueryResponseSchema
>;
