import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
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
export const createFileStorage422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateFileStorage422Schema = z.infer<typeof createFileStorage422Schema>;

 export const createFileStorageMutationRequestSchema = z.lazy(() => createFileStorageRequestSchema);
export type CreateFileStorageMutationRequestSchema = z.infer<typeof createFileStorageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createFileStorageMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateFileStorageMutationResponseSchema = z.infer<typeof createFileStorageMutationResponseSchema>;