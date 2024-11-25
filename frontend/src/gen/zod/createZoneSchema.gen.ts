import { z } from "@/utils/zod.ts";
import { zoneSchema } from "./zoneSchema.gen";
import { errorSchema } from "./errorSchema.gen";
import { zoneBaseSchema } from "./zoneBaseSchema.gen";

 /**
 * @description Successful Response
 */
export const createZone201Schema = z.lazy(() => zoneSchema);
export type CreateZone201Schema = z.infer<typeof createZone201Schema>;
/**
 * @description Request error
 */
export const createZone400Schema = z.lazy(() => errorSchema);
export type CreateZone400Schema = z.infer<typeof createZone400Schema>;
/**
 * @description Unauthorized
 */
export const createZone401Schema = z.lazy(() => errorSchema);
export type CreateZone401Schema = z.infer<typeof createZone401Schema>;
/**
 * @description Not found
 */
export const createZone404Schema = z.lazy(() => errorSchema);
export type CreateZone404Schema = z.infer<typeof createZone404Schema>;
/**
 * @description Validation error
 */
export const createZone422Schema = z.lazy(() => errorSchema);
export type CreateZone422Schema = z.infer<typeof createZone422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createZone429Schema = z.lazy(() => errorSchema);
export type CreateZone429Schema = z.infer<typeof createZone429Schema>;
/**
 * @description Internal server error
 */
export const createZone500Schema = z.lazy(() => errorSchema);
export type CreateZone500Schema = z.infer<typeof createZone500Schema>;
/**
 * @description Service unavailable
 */
export const createZone503Schema = z.lazy(() => errorSchema);
export type CreateZone503Schema = z.infer<typeof createZone503Schema>;

 export const createZoneMutationRequestSchema = z.lazy(() => zoneBaseSchema);
export type CreateZoneMutationRequestSchema = z.infer<typeof createZoneMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createZoneMutationResponseSchema = z.lazy(() => zoneSchema);
export type CreateZoneMutationResponseSchema = z.infer<typeof createZoneMutationResponseSchema>;