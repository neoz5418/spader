import { z } from "@/utils/zod.ts";
import { listWorkspacesSortOptionsSchema } from "./listWorkspacesSortOptionsSchema.gen";
import { directionSchema } from "./directionSchema.gen";
import { paginatedListWorkspaceSchema } from "./paginatedListWorkspaceSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspacesQueryParamsSchema = z.object({ "sort": z.lazy(() => listWorkspacesSortOptionsSchema).optional(), "direction": z.lazy(() => directionSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspacesQueryParamsSchema = z.infer<typeof listWorkspacesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaces200Schema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListWorkspaces200Schema = z.infer<typeof listWorkspaces200Schema>;
/**
 * @description Request error
 */
export const listWorkspaces400Schema = z.lazy(() => errorSchema);
export type ListWorkspaces400Schema = z.infer<typeof listWorkspaces400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaces401Schema = z.lazy(() => errorSchema);
export type ListWorkspaces401Schema = z.infer<typeof listWorkspaces401Schema>;
/**
 * @description Not found
 */
export const listWorkspaces404Schema = z.lazy(() => errorSchema);
export type ListWorkspaces404Schema = z.infer<typeof listWorkspaces404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaces422Schema = z.lazy(() => errorSchema);
export type ListWorkspaces422Schema = z.infer<typeof listWorkspaces422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaces429Schema = z.lazy(() => errorSchema);
export type ListWorkspaces429Schema = z.infer<typeof listWorkspaces429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaces500Schema = z.lazy(() => errorSchema);
export type ListWorkspaces500Schema = z.infer<typeof listWorkspaces500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaces503Schema = z.lazy(() => errorSchema);
export type ListWorkspaces503Schema = z.infer<typeof listWorkspaces503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspacesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListWorkspacesQueryResponseSchema = z.infer<typeof listWorkspacesQueryResponseSchema>;