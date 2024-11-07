import { z } from "@/utils/zod.ts";
import { cursorListOperationSchema } from "./cursorListOperationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceOperationsPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceOperationsPathParamsSchema = z.infer<typeof listWorkspaceOperationsPathParamsSchema>;

 export const listWorkspaceOperationsQueryParamsSchema = z.object({ "limit": z.number().int().min(1).max(100).default(20).optional(), "page": z.number().int().min(1).default(1).optional(), "before": z.string().default("").optional(), "after": z.string().default("").optional() }).optional();
export type ListWorkspaceOperationsQueryParamsSchema = z.infer<typeof listWorkspaceOperationsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceOperations200Schema = z.lazy(() => cursorListOperationSchema);
export type ListWorkspaceOperations200Schema = z.infer<typeof listWorkspaceOperations200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceOperations400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations400Schema = z.infer<typeof listWorkspaceOperations400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceOperations401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations401Schema = z.infer<typeof listWorkspaceOperations401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceOperations404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations404Schema = z.infer<typeof listWorkspaceOperations404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceOperations422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations422Schema = z.infer<typeof listWorkspaceOperations422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceOperations429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations429Schema = z.infer<typeof listWorkspaceOperations429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceOperations500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations500Schema = z.infer<typeof listWorkspaceOperations500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceOperations503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceOperations503Schema = z.infer<typeof listWorkspaceOperations503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceOperationsQueryResponseSchema = z.lazy(() => cursorListOperationSchema);
export type ListWorkspaceOperationsQueryResponseSchema = z.infer<typeof listWorkspaceOperationsQueryResponseSchema>;
