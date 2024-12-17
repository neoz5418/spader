import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const createImagePathParamsSchema = z.object({ "zone": z.string() });
export type CreateImagePathParamsSchema = z.infer<typeof createImagePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createImage201Schema = z.lazy(() => imageSchema);
export type CreateImage201Schema = z.infer<typeof createImage201Schema>;
/**
 * @description Request error
 */
export const createImage400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateImage400Schema = z.infer<typeof createImage400Schema>;
/**
 * @description Unauthorized
 */
export const createImage401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateImage401Schema = z.infer<typeof createImage401Schema>;
/**
 * @description Not found
 */
export const createImage404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateImage404Schema = z.infer<typeof createImage404Schema>;
/**
 * @description Resource conflict
 */
export const createImage409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateImage409Schema = z.infer<typeof createImage409Schema>;
/**
 * @description Precondition failed
 */
export const createImage412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateImage412Schema = z.infer<typeof createImage412Schema>;
/**
 * @description Validation error
 */
export const createImage422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateImage422Schema = z.infer<typeof createImage422Schema>;
/**
 * @description Internal server error
 */
export const createImage500Schema = z.lazy(() => errorInternalSchema);
export type CreateImage500Schema = z.infer<typeof createImage500Schema>;

 export const createImageMutationRequestSchema = z.lazy(() => imageSchema);
export type CreateImageMutationRequestSchema = z.infer<typeof createImageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createImageMutationResponseSchema = z.lazy(() => imageSchema);
export type CreateImageMutationResponseSchema = z.infer<typeof createImageMutationResponseSchema>;
