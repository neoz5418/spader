import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const updateImagePathParamsSchema = z.object({ "zone": z.string(), "name": z.string() });
export type UpdateImagePathParamsSchema = z.infer<typeof updateImagePathParamsSchema>;
/**
 * @description Successful Response
 */
export const updateImage200Schema = z.lazy(() => imageSchema);
export type UpdateImage200Schema = z.infer<typeof updateImage200Schema>;
/**
 * @description Request error
 */
export const updateImage400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type UpdateImage400Schema = z.infer<typeof updateImage400Schema>;
/**
 * @description Unauthorized
 */
export const updateImage401Schema = z.lazy(() => errorUnauthorizedSchema);
export type UpdateImage401Schema = z.infer<typeof updateImage401Schema>;
/**
 * @description Not found
 */
export const updateImage404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type UpdateImage404Schema = z.infer<typeof updateImage404Schema>;
/**
 * @description Resource conflict
 */
export const updateImage409Schema = z.lazy(() => errorResourceConflictSchema);
export type UpdateImage409Schema = z.infer<typeof updateImage409Schema>;
/**
 * @description Precondition failed
 */
export const updateImage412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type UpdateImage412Schema = z.infer<typeof updateImage412Schema>;
/**
 * @description Validation error
 */
export const updateImage422Schema = z.lazy(() => errorValidationFailedSchema);
export type UpdateImage422Schema = z.infer<typeof updateImage422Schema>;
/**
 * @description Internal server error
 */
export const updateImage500Schema = z.lazy(() => errorInternalSchema);
export type UpdateImage500Schema = z.infer<typeof updateImage500Schema>;
/**
 * @description Successful Response
 */
export const updateImageMutationResponseSchema = z.lazy(() => imageSchema);
export type UpdateImageMutationResponseSchema = z.infer<typeof updateImageMutationResponseSchema>;
