import { z } from "@/utils/zod.ts";
import { paginatedListFileStorageSchema } from "./paginatedListFileStorageSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceFileStoragesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceFileStoragesPathParamsSchema = z.infer<typeof listWorkspaceFileStoragesPathParamsSchema>;

 export const listWorkspaceFileStoragesQueryParamsSchema = z.object({ "limit": z.number().int().min(1).max(100).default(20).optional(), "page": z.number().int().min(1).default(1).optional(), "before": z.string().default("").optional(), "after": z.string().default("").optional() }).optional();
export type ListWorkspaceFileStoragesQueryParamsSchema = z.infer<typeof listWorkspaceFileStoragesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceFileStorages200Schema = z.lazy(() => paginatedListFileStorageSchema);
export type ListWorkspaceFileStorages200Schema = z.infer<typeof listWorkspaceFileStorages200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceFileStorages400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages400Schema = z.infer<typeof listWorkspaceFileStorages400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceFileStorages401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages401Schema = z.infer<typeof listWorkspaceFileStorages401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceFileStorages404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages404Schema = z.infer<typeof listWorkspaceFileStorages404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceFileStorages422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages422Schema = z.infer<typeof listWorkspaceFileStorages422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceFileStorages429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages429Schema = z.infer<typeof listWorkspaceFileStorages429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceFileStorages500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages500Schema = z.infer<typeof listWorkspaceFileStorages500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceFileStorages503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceFileStorages503Schema = z.infer<typeof listWorkspaceFileStorages503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceFileStoragesQueryResponseSchema = z.lazy(() => paginatedListFileStorageSchema);
export type ListWorkspaceFileStoragesQueryResponseSchema = z.infer<typeof listWorkspaceFileStoragesQueryResponseSchema>;
