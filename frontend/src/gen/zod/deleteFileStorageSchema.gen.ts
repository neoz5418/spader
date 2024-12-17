import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const deleteFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type DeleteFileStoragePathParamsSchema = z.infer<typeof deleteFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteFileStorage200Schema = z.lazy(() => operationSchema);
export type DeleteFileStorage200Schema = z.infer<typeof deleteFileStorage200Schema>;
/**
 * @description Request error
 */
export const deleteFileStorage400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type DeleteFileStorage400Schema = z.infer<typeof deleteFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const deleteFileStorage401Schema = z.lazy(() => errorUnauthorizedSchema);
export type DeleteFileStorage401Schema = z.infer<typeof deleteFileStorage401Schema>;
/**
 * @description Not found
 */
export const deleteFileStorage404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type DeleteFileStorage404Schema = z.infer<typeof deleteFileStorage404Schema>;
/**
 * @description Resource conflict
 */
export const deleteFileStorage409Schema = z.lazy(() => errorResourceConflictSchema);
export type DeleteFileStorage409Schema = z.infer<typeof deleteFileStorage409Schema>;
/**
 * @description Precondition failed
 */
export const deleteFileStorage412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type DeleteFileStorage412Schema = z.infer<typeof deleteFileStorage412Schema>;
/**
 * @description Validation error
 */
export const deleteFileStorage422Schema = z.lazy(() => errorValidationFailedSchema);
export type DeleteFileStorage422Schema = z.infer<typeof deleteFileStorage422Schema>;
/**
 * @description Internal server error
 */
export const deleteFileStorage500Schema = z.lazy(() => errorInternalSchema);
export type DeleteFileStorage500Schema = z.infer<typeof deleteFileStorage500Schema>;
/**
 * @description Successful Response
 */
export const deleteFileStorageMutationResponseSchema = z.lazy(() => operationSchema);
export type DeleteFileStorageMutationResponseSchema = z.infer<typeof deleteFileStorageMutationResponseSchema>;
