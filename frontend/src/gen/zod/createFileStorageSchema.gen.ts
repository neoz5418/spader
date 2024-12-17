import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorRequestValidationFailedSchema } from "./errorRequestValidationFailedSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { createFileStorageRequestSchema } from "./createFileStorageRequestSchema.gen";


export const createFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type CreateFileStoragePathParamsSchema = z.infer<typeof createFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createFileStorage201Schema = z.lazy(() => operationSchema);
export type CreateFileStorage201Schema = z.infer<typeof createFileStorage201Schema>;
/**
 * @description Unprocessable Entity
 */
export const createFileStorage422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorPreconditionFailedSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorRequestValidationFailedSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateFileStorage422Schema = z.infer<typeof createFileStorage422Schema>;

 export const createFileStorageMutationRequestSchema = z.lazy(() => createFileStorageRequestSchema);
export type CreateFileStorageMutationRequestSchema = z.infer<typeof createFileStorageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createFileStorageMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateFileStorageMutationResponseSchema = z.infer<typeof createFileStorageMutationResponseSchema>;
