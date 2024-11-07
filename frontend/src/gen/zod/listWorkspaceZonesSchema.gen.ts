import { z } from "@/utils/zod.ts";
import { paginatedListZoneSchema } from "./paginatedListZoneSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceZonesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceZonesPathParamsSchema = z.infer<typeof listWorkspaceZonesPathParamsSchema>;

 export const listWorkspaceZonesQueryParamsSchema = z.object({ "limit": z.number().int().min(1).max(100).default(20).optional(), "page": z.number().int().min(1).default(1).optional(), "before": z.string().default("").optional(), "after": z.string().default("").optional() }).optional();
export type ListWorkspaceZonesQueryParamsSchema = z.infer<typeof listWorkspaceZonesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZones200Schema = z.lazy(() => paginatedListZoneSchema);
export type ListWorkspaceZones200Schema = z.infer<typeof listWorkspaceZones200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceZones400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones400Schema = z.infer<typeof listWorkspaceZones400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceZones401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones401Schema = z.infer<typeof listWorkspaceZones401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceZones404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones404Schema = z.infer<typeof listWorkspaceZones404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceZones422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones422Schema = z.infer<typeof listWorkspaceZones422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceZones429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones429Schema = z.infer<typeof listWorkspaceZones429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceZones500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones500Schema = z.infer<typeof listWorkspaceZones500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceZones503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZones503Schema = z.infer<typeof listWorkspaceZones503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZonesQueryResponseSchema = z.lazy(() => paginatedListZoneSchema);
export type ListWorkspaceZonesQueryResponseSchema = z.infer<typeof listWorkspaceZonesQueryResponseSchema>;
