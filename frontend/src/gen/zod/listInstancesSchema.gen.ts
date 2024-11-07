import { z } from "@/utils/zod.ts";
import { paginatedListInstanceSchema } from "./paginatedListInstanceSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listInstancesQueryParamsSchema = z.object({ "zone": z.string().optional(), "search": z.string().optional(), "limit": z.number().int().min(1).max(100).default(20).optional(), "page": z.number().int().min(1).default(1).optional(), "before": z.string().default("").optional(), "after": z.string().default("").optional() }).optional();
export type ListInstancesQueryParamsSchema = z.infer<typeof listInstancesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listInstances200Schema = z.lazy(() => paginatedListInstanceSchema);
export type ListInstances200Schema = z.infer<typeof listInstances200Schema>;
/**
 * @description Request error
 */
export const listInstances400Schema = z.lazy(() => errorSchema);
export type ListInstances400Schema = z.infer<typeof listInstances400Schema>;
/**
 * @description Unauthorized
 */
export const listInstances401Schema = z.lazy(() => errorSchema);
export type ListInstances401Schema = z.infer<typeof listInstances401Schema>;
/**
 * @description Not found
 */
export const listInstances404Schema = z.lazy(() => errorSchema);
export type ListInstances404Schema = z.infer<typeof listInstances404Schema>;
/**
 * @description Validation error
 */
export const listInstances422Schema = z.lazy(() => errorSchema);
export type ListInstances422Schema = z.infer<typeof listInstances422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listInstances429Schema = z.lazy(() => errorSchema);
export type ListInstances429Schema = z.infer<typeof listInstances429Schema>;
/**
 * @description Internal server error
 */
export const listInstances500Schema = z.lazy(() => errorSchema);
export type ListInstances500Schema = z.infer<typeof listInstances500Schema>;
/**
 * @description Service unavailable
 */
export const listInstances503Schema = z.lazy(() => errorSchema);
export type ListInstances503Schema = z.infer<typeof listInstances503Schema>;
/**
 * @description Successful Response
 */
export const listInstancesQueryResponseSchema = z.lazy(() => paginatedListInstanceSchema);
export type ListInstancesQueryResponseSchema = z.infer<typeof listInstancesQueryResponseSchema>;
