import { z } from "@/utils/zod.ts";
import { paginatedListZoneSchema } from "./paginatedListZoneSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listZonesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListZonesQueryParamsSchema = z.infer<typeof listZonesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listZones200Schema = z.lazy(() => paginatedListZoneSchema);
export type ListZones200Schema = z.infer<typeof listZones200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listZones422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListZones422Schema = z.infer<typeof listZones422Schema>;
/**
 * @description Successful Response
 */
export const listZonesQueryResponseSchema = z.lazy(() => paginatedListZoneSchema);
export type ListZonesQueryResponseSchema = z.infer<typeof listZonesQueryResponseSchema>;