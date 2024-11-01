import { z } from "@/utils/zod.ts";
import { paginatedListFileInfoSchema } from "./paginatedListFileInfoSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listFilesInFileStoragePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type ListFilesInFileStoragePathParamsSchema = z.infer<typeof listFilesInFileStoragePathParamsSchema>;

 export const listFilesInFileStorageQueryParamsSchema = z.object({ "path": z.string().default("/").optional() }).optional();
export type ListFilesInFileStorageQueryParamsSchema = z.infer<typeof listFilesInFileStorageQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listFilesInFileStorage200Schema = z.lazy(() => paginatedListFileInfoSchema);
export type ListFilesInFileStorage200Schema = z.infer<typeof listFilesInFileStorage200Schema>;
/**
 * @description Request error
 */
export const listFilesInFileStorage400Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage400Schema = z.infer<typeof listFilesInFileStorage400Schema>;
/**
 * @description Unauthorized
 */
export const listFilesInFileStorage401Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage401Schema = z.infer<typeof listFilesInFileStorage401Schema>;
/**
 * @description Not found
 */
export const listFilesInFileStorage404Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage404Schema = z.infer<typeof listFilesInFileStorage404Schema>;
/**
 * @description Validation error
 */
export const listFilesInFileStorage422Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage422Schema = z.infer<typeof listFilesInFileStorage422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listFilesInFileStorage429Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage429Schema = z.infer<typeof listFilesInFileStorage429Schema>;
/**
 * @description Internal server error
 */
export const listFilesInFileStorage500Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage500Schema = z.infer<typeof listFilesInFileStorage500Schema>;
/**
 * @description Service unavailable
 */
export const listFilesInFileStorage503Schema = z.lazy(() => errorSchema);
export type ListFilesInFileStorage503Schema = z.infer<typeof listFilesInFileStorage503Schema>;
/**
 * @description Successful Response
 */
export const listFilesInFileStorageQueryResponseSchema = z.lazy(() => paginatedListFileInfoSchema);
export type ListFilesInFileStorageQueryResponseSchema = z.infer<typeof listFilesInFileStorageQueryResponseSchema>;