import { z } from "@/utils/zod.ts";
import { paginatedListZoneSchema } from "./paginatedListZoneSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const listZones400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListZones400Schema = z.infer<typeof listZones400Schema>;
/**
 * @description Unauthorized
 */
export const listZones401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListZones401Schema = z.infer<typeof listZones401Schema>;
/**
 * @description Not found
 */
export const listZones404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListZones404Schema = z.infer<typeof listZones404Schema>;
/**
 * @description Resource conflict
 */
export const listZones409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListZones409Schema = z.infer<typeof listZones409Schema>;
/**
 * @description Precondition failed
 */
export const listZones412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListZones412Schema = z.infer<typeof listZones412Schema>;
/**
 * @description Validation error
 */
export const listZones422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListZones422Schema = z.infer<typeof listZones422Schema>;
/**
 * @description Internal server error
 */
export const listZones500Schema = z.lazy(() => errorInternalSchema);
export type ListZones500Schema = z.infer<typeof listZones500Schema>;
/**
 * @description Successful Response
 */
export const listZonesQueryResponseSchema = z.lazy(() => paginatedListZoneSchema);
export type ListZonesQueryResponseSchema = z.infer<typeof listZonesQueryResponseSchema>;
