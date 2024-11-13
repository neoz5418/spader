import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypeSchema } from "./paginatedListGpuTypeSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listGpuTypesPathParamsSchema = z.object({ "zone": z.string() });
export type ListGpuTypesPathParamsSchema = z.infer<typeof listGpuTypesPathParamsSchema>;

 export const listGpuTypesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListGpuTypesQueryParamsSchema = z.infer<typeof listGpuTypesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listGpuTypes200Schema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListGpuTypes200Schema = z.infer<typeof listGpuTypes200Schema>;
/**
 * @description Request error
 */
export const listGpuTypes400Schema = z.lazy(() => errorSchema);
export type ListGpuTypes400Schema = z.infer<typeof listGpuTypes400Schema>;
/**
 * @description Unauthorized
 */
export const listGpuTypes401Schema = z.lazy(() => errorSchema);
export type ListGpuTypes401Schema = z.infer<typeof listGpuTypes401Schema>;
/**
 * @description Not found
 */
export const listGpuTypes404Schema = z.lazy(() => errorSchema);
export type ListGpuTypes404Schema = z.infer<typeof listGpuTypes404Schema>;
/**
 * @description Validation error
 */
export const listGpuTypes422Schema = z.lazy(() => errorSchema);
export type ListGpuTypes422Schema = z.infer<typeof listGpuTypes422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listGpuTypes429Schema = z.lazy(() => errorSchema);
export type ListGpuTypes429Schema = z.infer<typeof listGpuTypes429Schema>;
/**
 * @description Internal server error
 */
export const listGpuTypes500Schema = z.lazy(() => errorSchema);
export type ListGpuTypes500Schema = z.infer<typeof listGpuTypes500Schema>;
/**
 * @description Service unavailable
 */
export const listGpuTypes503Schema = z.lazy(() => errorSchema);
export type ListGpuTypes503Schema = z.infer<typeof listGpuTypes503Schema>;
/**
 * @description Successful Response
 */
export const listGpuTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListGpuTypesQueryResponseSchema = z.infer<typeof listGpuTypesQueryResponseSchema>;