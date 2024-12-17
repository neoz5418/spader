import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { createFileStorageRequestSchema } from "./createFileStorageRequestSchema.gen";


export const createFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type CreateFileStoragePathParamsSchema = z.infer<typeof createFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createFileStorage201Schema = z.lazy(() => operationSchema);
export type CreateFileStorage201Schema = z.infer<typeof createFileStorage201Schema>;
/**
 * @description Request error
 */
export const createFileStorage400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateFileStorage400Schema = z.infer<typeof createFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const createFileStorage401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateFileStorage401Schema = z.infer<typeof createFileStorage401Schema>;
/**
 * @description Not found
 */
export const createFileStorage404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateFileStorage404Schema = z.infer<typeof createFileStorage404Schema>;
/**
 * @description Resource conflict
 */
export const createFileStorage409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateFileStorage409Schema = z.infer<typeof createFileStorage409Schema>;
/**
 * @description Precondition failed
 */
export const createFileStorage412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateFileStorage412Schema = z.infer<typeof createFileStorage412Schema>;
/**
 * @description Validation error
 */
export const createFileStorage422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateFileStorage422Schema = z.infer<typeof createFileStorage422Schema>;
/**
 * @description Internal server error
 */
export const createFileStorage500Schema = z.lazy(() => errorInternalSchema);
export type CreateFileStorage500Schema = z.infer<typeof createFileStorage500Schema>;

 export const createFileStorageMutationRequestSchema = z.lazy(() => createFileStorageRequestSchema);
export type CreateFileStorageMutationRequestSchema = z.infer<typeof createFileStorageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createFileStorageMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateFileStorageMutationResponseSchema = z.infer<typeof createFileStorageMutationResponseSchema>;
