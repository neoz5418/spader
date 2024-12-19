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
import { operationSchema } from "./operationSchema.gen";

export const deleteFileStoragePathParamsSchema = z.object({
	workspace: z.string(),
	zone: z.string(),
	name: z.string(),
});
export type DeleteFileStoragePathParamsSchema = z.infer<
	typeof deleteFileStoragePathParamsSchema
>;
/**
 * @description Successful Response
 */
export const deleteFileStorage200Schema = z.lazy(() => operationSchema);
export type DeleteFileStorage200Schema = z.infer<
	typeof deleteFileStorage200Schema
>;
/**
 * @description Unprocessable Entity
 */
export const deleteFileStorage422Schema = z.union([
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
export type DeleteFileStorage422Schema = z.infer<
	typeof deleteFileStorage422Schema
>;
/**
 * @description Successful Response
 */
export const deleteFileStorageMutationResponseSchema = z.lazy(
	() => operationSchema,
);
export type DeleteFileStorageMutationResponseSchema = z.infer<
	typeof deleteFileStorageMutationResponseSchema
>;
