import { z } from "@/utils/zod.ts";
import { listInstancesSortOptionsSchema } from "./listInstancesSortOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListInstancePublicSchema } from "./paginatedListInstancePublicSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceInstancesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceInstancesPathParamsSchema = z.infer<typeof listWorkspaceInstancesPathParamsSchema>;

 export const listWorkspaceInstancesQueryParamsSchema = z.object({ "zone": z.string().optional(), "search": z.string().optional(), "status": z.string().optional(), "sort": z.lazy(() => listInstancesSortOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceInstancesQueryParamsSchema = z.infer<typeof listWorkspaceInstancesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceInstances200Schema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListWorkspaceInstances200Schema = z.infer<typeof listWorkspaceInstances200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceInstances400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances400Schema = z.infer<typeof listWorkspaceInstances400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceInstances401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances401Schema = z.infer<typeof listWorkspaceInstances401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceInstances404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances404Schema = z.infer<typeof listWorkspaceInstances404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceInstances422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances422Schema = z.infer<typeof listWorkspaceInstances422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceInstances429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances429Schema = z.infer<typeof listWorkspaceInstances429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceInstances500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances500Schema = z.infer<typeof listWorkspaceInstances500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceInstances503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceInstances503Schema = z.infer<typeof listWorkspaceInstances503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceInstancesQueryResponseSchema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListWorkspaceInstancesQueryResponseSchema = z.infer<typeof listWorkspaceInstancesQueryResponseSchema>;
