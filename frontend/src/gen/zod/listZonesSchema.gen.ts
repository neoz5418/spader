import { z } from "@/utils/zod.ts";
import { paginatedListZoneSchema } from "./paginatedListZoneSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listZonesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListZonesQueryParamsSchema = z.infer<typeof listZonesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listZones200Schema = z.lazy(() => paginatedListZoneSchema);
export type ListZones200Schema = z.infer<typeof listZones200Schema>;
/**
 * @description Request error
 */
export const listZones400Schema = z.lazy(() => errorSchema);
export type ListZones400Schema = z.infer<typeof listZones400Schema>;
/**
 * @description Unauthorized
 */
export const listZones401Schema = z.lazy(() => errorSchema);
export type ListZones401Schema = z.infer<typeof listZones401Schema>;
/**
 * @description Not found
 */
export const listZones404Schema = z.lazy(() => errorSchema);
export type ListZones404Schema = z.infer<typeof listZones404Schema>;
/**
 * @description Validation error
 */
export const listZones422Schema = z.lazy(() => errorSchema);
export type ListZones422Schema = z.infer<typeof listZones422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listZones429Schema = z.lazy(() => errorSchema);
export type ListZones429Schema = z.infer<typeof listZones429Schema>;
/**
 * @description Internal server error
 */
export const listZones500Schema = z.lazy(() => errorSchema);
export type ListZones500Schema = z.infer<typeof listZones500Schema>;
/**
 * @description Service unavailable
 */
export const listZones503Schema = z.lazy(() => errorSchema);
export type ListZones503Schema = z.infer<typeof listZones503Schema>;
/**
 * @description Successful Response
 */
export const listZonesQueryResponseSchema = z.lazy(() => paginatedListZoneSchema);
export type ListZonesQueryResponseSchema = z.infer<typeof listZonesQueryResponseSchema>;