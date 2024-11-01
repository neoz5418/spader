import { z } from "@/utils/zod.ts";
import { fileStorageSchema } from "./fileStorageSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type GetFileStoragePathParamsSchema = z.infer<typeof getFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getFileStorage200Schema = z.lazy(() => fileStorageSchema);
export type GetFileStorage200Schema = z.infer<typeof getFileStorage200Schema>;
/**
 * @description Request error
 */
export const getFileStorage400Schema = z.lazy(() => errorSchema);
export type GetFileStorage400Schema = z.infer<typeof getFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const getFileStorage401Schema = z.lazy(() => errorSchema);
export type GetFileStorage401Schema = z.infer<typeof getFileStorage401Schema>;
/**
 * @description Not found
 */
export const getFileStorage404Schema = z.lazy(() => errorSchema);
export type GetFileStorage404Schema = z.infer<typeof getFileStorage404Schema>;
/**
 * @description Validation error
 */
export const getFileStorage422Schema = z.lazy(() => errorSchema);
export type GetFileStorage422Schema = z.infer<typeof getFileStorage422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getFileStorage429Schema = z.lazy(() => errorSchema);
export type GetFileStorage429Schema = z.infer<typeof getFileStorage429Schema>;
/**
 * @description Internal server error
 */
export const getFileStorage500Schema = z.lazy(() => errorSchema);
export type GetFileStorage500Schema = z.infer<typeof getFileStorage500Schema>;
/**
 * @description Service unavailable
 */
export const getFileStorage503Schema = z.lazy(() => errorSchema);
export type GetFileStorage503Schema = z.infer<typeof getFileStorage503Schema>;
/**
 * @description Successful Response
 */
export const getFileStorageQueryResponseSchema = z.lazy(() => fileStorageSchema);
export type GetFileStorageQueryResponseSchema = z.infer<typeof getFileStorageQueryResponseSchema>;