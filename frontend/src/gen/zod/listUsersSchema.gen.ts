import { z } from "@/utils/zod.ts";
import { listUsersSortOptionsSchema } from "./listUsersSortOptionsSchema.gen";
import { directionSchema } from "./directionSchema.gen";
import { paginatedListUserSchema } from "./paginatedListUserSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listUsersQueryParamsSchema = z.object({ "sort": z.lazy(() => listUsersSortOptionsSchema).optional(), "direction": z.lazy(() => directionSchema).optional(), "phone_number": z.string().optional(), "display_name": z.string().optional(), "email": z.string().email().optional(), "name": z.string().optional(), "limit": z.number().int().min(1).max(100).default(20).optional(), "page": z.number().int().min(1).default(1).optional(), "before": z.string().default("").optional(), "after": z.string().default("").optional() }).optional();
export type ListUsersQueryParamsSchema = z.infer<typeof listUsersQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listUsers200Schema = z.lazy(() => paginatedListUserSchema);
export type ListUsers200Schema = z.infer<typeof listUsers200Schema>;
/**
 * @description Request error
 */
export const listUsers400Schema = z.lazy(() => errorSchema);
export type ListUsers400Schema = z.infer<typeof listUsers400Schema>;
/**
 * @description Unauthorized
 */
export const listUsers401Schema = z.lazy(() => errorSchema);
export type ListUsers401Schema = z.infer<typeof listUsers401Schema>;
/**
 * @description Not found
 */
export const listUsers404Schema = z.lazy(() => errorSchema);
export type ListUsers404Schema = z.infer<typeof listUsers404Schema>;
/**
 * @description Validation error
 */
export const listUsers422Schema = z.lazy(() => errorSchema);
export type ListUsers422Schema = z.infer<typeof listUsers422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listUsers429Schema = z.lazy(() => errorSchema);
export type ListUsers429Schema = z.infer<typeof listUsers429Schema>;
/**
 * @description Internal server error
 */
export const listUsers500Schema = z.lazy(() => errorSchema);
export type ListUsers500Schema = z.infer<typeof listUsers500Schema>;
/**
 * @description Service unavailable
 */
export const listUsers503Schema = z.lazy(() => errorSchema);
export type ListUsers503Schema = z.infer<typeof listUsers503Schema>;
/**
 * @description Successful Response
 */
export const listUsersQueryResponseSchema = z.lazy(() => paginatedListUserSchema);
export type ListUsersQueryResponseSchema = z.infer<typeof listUsersQueryResponseSchema>;