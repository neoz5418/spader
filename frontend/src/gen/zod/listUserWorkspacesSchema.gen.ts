import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceSchema } from "./paginatedListWorkspaceSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listUserWorkspacesPathParamsSchema = z.object({ "username": z.string() });
export type ListUserWorkspacesPathParamsSchema = z.infer<typeof listUserWorkspacesPathParamsSchema>;

 export const listUserWorkspacesQueryParamsSchema = z.object({ "search": z.string().optional(), "limit": z.number().int().min(1).max(100).default(20).optional(), "page": z.number().int().min(1).default(1).optional(), "before": z.string().default("").optional(), "after": z.string().default("").optional() }).optional();
export type ListUserWorkspacesQueryParamsSchema = z.infer<typeof listUserWorkspacesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listUserWorkspaces200Schema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListUserWorkspaces200Schema = z.infer<typeof listUserWorkspaces200Schema>;
/**
 * @description Request error
 */
export const listUserWorkspaces400Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces400Schema = z.infer<typeof listUserWorkspaces400Schema>;
/**
 * @description Unauthorized
 */
export const listUserWorkspaces401Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces401Schema = z.infer<typeof listUserWorkspaces401Schema>;
/**
 * @description Not found
 */
export const listUserWorkspaces404Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces404Schema = z.infer<typeof listUserWorkspaces404Schema>;
/**
 * @description Validation error
 */
export const listUserWorkspaces422Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces422Schema = z.infer<typeof listUserWorkspaces422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listUserWorkspaces429Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces429Schema = z.infer<typeof listUserWorkspaces429Schema>;
/**
 * @description Internal server error
 */
export const listUserWorkspaces500Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces500Schema = z.infer<typeof listUserWorkspaces500Schema>;
/**
 * @description Service unavailable
 */
export const listUserWorkspaces503Schema = z.lazy(() => errorSchema);
export type ListUserWorkspaces503Schema = z.infer<typeof listUserWorkspaces503Schema>;
/**
 * @description Successful Response
 */
export const listUserWorkspacesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceSchema);
export type ListUserWorkspacesQueryResponseSchema = z.infer<typeof listUserWorkspacesQueryResponseSchema>;
