import { z } from "@/utils/zod.ts";
import { workspaceSchema } from "./workspaceSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspacePathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspacePathParamsSchema = z.infer<typeof getWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspace200Schema = z.lazy(() => workspaceSchema);
export type GetWorkspace200Schema = z.infer<typeof getWorkspace200Schema>;
/**
 * @description Request error
 */
export const getWorkspace400Schema = z.lazy(() => errorSchema);
export type GetWorkspace400Schema = z.infer<typeof getWorkspace400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspace401Schema = z.lazy(() => errorSchema);
export type GetWorkspace401Schema = z.infer<typeof getWorkspace401Schema>;
/**
 * @description Not found
 */
export const getWorkspace404Schema = z.lazy(() => errorSchema);
export type GetWorkspace404Schema = z.infer<typeof getWorkspace404Schema>;
/**
 * @description Validation error
 */
export const getWorkspace422Schema = z.lazy(() => errorSchema);
export type GetWorkspace422Schema = z.infer<typeof getWorkspace422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspace429Schema = z.lazy(() => errorSchema);
export type GetWorkspace429Schema = z.infer<typeof getWorkspace429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspace500Schema = z.lazy(() => errorSchema);
export type GetWorkspace500Schema = z.infer<typeof getWorkspace500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspace503Schema = z.lazy(() => errorSchema);
export type GetWorkspace503Schema = z.infer<typeof getWorkspace503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceQueryResponseSchema = z.lazy(() => workspaceSchema);
export type GetWorkspaceQueryResponseSchema = z.infer<typeof getWorkspaceQueryResponseSchema>;
