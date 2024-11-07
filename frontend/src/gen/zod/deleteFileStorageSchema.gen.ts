import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const deleteFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type DeleteFileStoragePathParamsSchema = z.infer<typeof deleteFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteFileStorage200Schema = z.lazy(() => operationSchema);
export type DeleteFileStorage200Schema = z.infer<typeof deleteFileStorage200Schema>;
/**
 * @description Request error
 */
export const deleteFileStorage400Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage400Schema = z.infer<typeof deleteFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const deleteFileStorage401Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage401Schema = z.infer<typeof deleteFileStorage401Schema>;
/**
 * @description Not found
 */
export const deleteFileStorage404Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage404Schema = z.infer<typeof deleteFileStorage404Schema>;
/**
 * @description Validation error
 */
export const deleteFileStorage422Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage422Schema = z.infer<typeof deleteFileStorage422Schema>;
/**
 * @description Rate limit exceeded
 */
export const deleteFileStorage429Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage429Schema = z.infer<typeof deleteFileStorage429Schema>;
/**
 * @description Internal server error
 */
export const deleteFileStorage500Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage500Schema = z.infer<typeof deleteFileStorage500Schema>;
/**
 * @description Service unavailable
 */
export const deleteFileStorage503Schema = z.lazy(() => errorSchema);
export type DeleteFileStorage503Schema = z.infer<typeof deleteFileStorage503Schema>;
/**
 * @description Successful Response
 */
export const deleteFileStorageMutationResponseSchema = z.lazy(() => operationSchema);
export type DeleteFileStorageMutationResponseSchema = z.infer<typeof deleteFileStorageMutationResponseSchema>;
