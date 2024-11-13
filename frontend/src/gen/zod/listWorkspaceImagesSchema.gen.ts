import { z } from "@/utils/zod.ts";
import { paginatedListImageSchema } from "./paginatedListImageSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceImagesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceImagesPathParamsSchema = z.infer<typeof listWorkspaceImagesPathParamsSchema>;

 export const listWorkspaceImagesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceImagesQueryParamsSchema = z.infer<typeof listWorkspaceImagesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceImages200Schema = z.lazy(() => paginatedListImageSchema);
export type ListWorkspaceImages200Schema = z.infer<typeof listWorkspaceImages200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceImages400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages400Schema = z.infer<typeof listWorkspaceImages400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceImages401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages401Schema = z.infer<typeof listWorkspaceImages401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceImages404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages404Schema = z.infer<typeof listWorkspaceImages404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceImages422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages422Schema = z.infer<typeof listWorkspaceImages422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceImages429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages429Schema = z.infer<typeof listWorkspaceImages429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceImages500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages500Schema = z.infer<typeof listWorkspaceImages500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceImages503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceImages503Schema = z.infer<typeof listWorkspaceImages503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceImagesQueryResponseSchema = z.lazy(() => paginatedListImageSchema);
export type ListWorkspaceImagesQueryResponseSchema = z.infer<typeof listWorkspaceImagesQueryResponseSchema>;