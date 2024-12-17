import { z } from "@/utils/zod.ts";
import { fileStorageSchema } from "./fileStorageSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type GetFileStoragePathParamsSchema = z.infer<typeof getFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getFileStorage200Schema = z.lazy(() => fileStorageSchema);
export type GetFileStorage200Schema = z.infer<typeof getFileStorage200Schema>;
/**
 * @description Request error
 */
export const getFileStorage400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetFileStorage400Schema = z.infer<typeof getFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const getFileStorage401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetFileStorage401Schema = z.infer<typeof getFileStorage401Schema>;
/**
 * @description Not found
 */
export const getFileStorage404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetFileStorage404Schema = z.infer<typeof getFileStorage404Schema>;
/**
 * @description Resource conflict
 */
export const getFileStorage409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetFileStorage409Schema = z.infer<typeof getFileStorage409Schema>;
/**
 * @description Precondition failed
 */
export const getFileStorage412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetFileStorage412Schema = z.infer<typeof getFileStorage412Schema>;
/**
 * @description Validation error
 */
export const getFileStorage422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetFileStorage422Schema = z.infer<typeof getFileStorage422Schema>;
/**
 * @description Internal server error
 */
export const getFileStorage500Schema = z.lazy(() => errorInternalSchema);
export type GetFileStorage500Schema = z.infer<typeof getFileStorage500Schema>;
/**
 * @description Successful Response
 */
export const getFileStorageQueryResponseSchema = z.lazy(() => fileStorageSchema);
export type GetFileStorageQueryResponseSchema = z.infer<typeof getFileStorageQueryResponseSchema>;
