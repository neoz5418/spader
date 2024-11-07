import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const updateImage400Schema = z.lazy(() => errorSchema);
export type UpdateImage400Schema = z.infer<typeof updateImage400Schema>;
/**
 * @description Unauthorized
 */
export const updateImage401Schema = z.lazy(() => errorSchema);
export type UpdateImage401Schema = z.infer<typeof updateImage401Schema>;
/**
 * @description Not found
 */
export const updateImage404Schema = z.lazy(() => errorSchema);
export type UpdateImage404Schema = z.infer<typeof updateImage404Schema>;
/**
 * @description Validation error
 */
export const updateImage422Schema = z.lazy(() => errorSchema);
export type UpdateImage422Schema = z.infer<typeof updateImage422Schema>;
/**
 * @description Rate limit exceeded
 */
export const updateImage429Schema = z.lazy(() => errorSchema);
export type UpdateImage429Schema = z.infer<typeof updateImage429Schema>;
/**
 * @description Internal server error
 */
export const updateImage500Schema = z.lazy(() => errorSchema);
export type UpdateImage500Schema = z.infer<typeof updateImage500Schema>;
/**
 * @description Service unavailable
 */
export const updateImage503Schema = z.lazy(() => errorSchema);
export type UpdateImage503Schema = z.infer<typeof updateImage503Schema>;
/**
 * @description Successful Response
 */
export const updateImageMutationResponseSchema = z.lazy(() => imageSchema);
export type UpdateImageMutationResponseSchema = z.infer<typeof updateImageMutationResponseSchema>;
