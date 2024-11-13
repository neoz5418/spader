import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const createImage400Schema = z.lazy(() => errorSchema);
export type CreateImage400Schema = z.infer<typeof createImage400Schema>;
/**
 * @description Unauthorized
 */
export const createImage401Schema = z.lazy(() => errorSchema);
export type CreateImage401Schema = z.infer<typeof createImage401Schema>;
/**
 * @description Not found
 */
export const createImage404Schema = z.lazy(() => errorSchema);
export type CreateImage404Schema = z.infer<typeof createImage404Schema>;
/**
 * @description Validation error
 */
export const createImage422Schema = z.lazy(() => errorSchema);
export type CreateImage422Schema = z.infer<typeof createImage422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createImage429Schema = z.lazy(() => errorSchema);
export type CreateImage429Schema = z.infer<typeof createImage429Schema>;
/**
 * @description Internal server error
 */
export const createImage500Schema = z.lazy(() => errorSchema);
export type CreateImage500Schema = z.infer<typeof createImage500Schema>;
/**
 * @description Service unavailable
 */
export const createImage503Schema = z.lazy(() => errorSchema);
export type CreateImage503Schema = z.infer<typeof createImage503Schema>;

 export const createImageMutationRequestSchema = z.lazy(() => imageSchema);
export type CreateImageMutationRequestSchema = z.infer<typeof createImageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createImageMutationResponseSchema = z.lazy(() => imageSchema);
export type CreateImageMutationResponseSchema = z.infer<typeof createImageMutationResponseSchema>;