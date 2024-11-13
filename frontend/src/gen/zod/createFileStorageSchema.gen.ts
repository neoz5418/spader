import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorSchema } from "./errorSchema.gen";
import { createFileStorageRequestSchema } from "./createFileStorageRequestSchema.gen";


export const createFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type CreateFileStoragePathParamsSchema = z.infer<typeof createFileStoragePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createFileStorage201Schema = z.lazy(() => operationSchema);
export type CreateFileStorage201Schema = z.infer<typeof createFileStorage201Schema>;
/**
 * @description Request error
 */
export const createFileStorage400Schema = z.lazy(() => errorSchema);
export type CreateFileStorage400Schema = z.infer<typeof createFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const createFileStorage401Schema = z.lazy(() => errorSchema);
export type CreateFileStorage401Schema = z.infer<typeof createFileStorage401Schema>;
/**
 * @description Not found
 */
export const createFileStorage404Schema = z.lazy(() => errorSchema);
export type CreateFileStorage404Schema = z.infer<typeof createFileStorage404Schema>;
/**
 * @description Validation error
 */
export const createFileStorage422Schema = z.lazy(() => errorSchema);
export type CreateFileStorage422Schema = z.infer<typeof createFileStorage422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createFileStorage429Schema = z.lazy(() => errorSchema);
export type CreateFileStorage429Schema = z.infer<typeof createFileStorage429Schema>;
/**
 * @description Internal server error
 */
export const createFileStorage500Schema = z.lazy(() => errorSchema);
export type CreateFileStorage500Schema = z.infer<typeof createFileStorage500Schema>;
/**
 * @description Service unavailable
 */
export const createFileStorage503Schema = z.lazy(() => errorSchema);
export type CreateFileStorage503Schema = z.infer<typeof createFileStorage503Schema>;

 export const createFileStorageMutationRequestSchema = z.lazy(() => createFileStorageRequestSchema);
export type CreateFileStorageMutationRequestSchema = z.infer<typeof createFileStorageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createFileStorageMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateFileStorageMutationResponseSchema = z.infer<typeof createFileStorageMutationResponseSchema>;