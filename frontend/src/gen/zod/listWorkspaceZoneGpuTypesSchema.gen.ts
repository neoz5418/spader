import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypeSchema } from "./paginatedListGpuTypeSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceZoneGpuTypesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceZoneGpuTypesPathParamsSchema = z.infer<typeof listWorkspaceZoneGpuTypesPathParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZoneGpuTypes200Schema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListWorkspaceZoneGpuTypes200Schema = z.infer<typeof listWorkspaceZoneGpuTypes200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceZoneGpuTypes400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes400Schema = z.infer<typeof listWorkspaceZoneGpuTypes400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceZoneGpuTypes401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes401Schema = z.infer<typeof listWorkspaceZoneGpuTypes401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceZoneGpuTypes404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes404Schema = z.infer<typeof listWorkspaceZoneGpuTypes404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceZoneGpuTypes422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes422Schema = z.infer<typeof listWorkspaceZoneGpuTypes422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceZoneGpuTypes429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes429Schema = z.infer<typeof listWorkspaceZoneGpuTypes429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceZoneGpuTypes500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes500Schema = z.infer<typeof listWorkspaceZoneGpuTypes500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceZoneGpuTypes503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceZoneGpuTypes503Schema = z.infer<typeof listWorkspaceZoneGpuTypes503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZoneGpuTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListWorkspaceZoneGpuTypesQueryResponseSchema = z.infer<typeof listWorkspaceZoneGpuTypesQueryResponseSchema>;
