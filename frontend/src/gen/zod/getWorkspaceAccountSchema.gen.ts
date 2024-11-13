import { z } from "@/utils/zod.ts";
import { workspaceAccountSchema } from "./workspaceAccountSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceAccountPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceAccountPathParamsSchema = z.infer<typeof getWorkspaceAccountPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccount200Schema = z.lazy(() => workspaceAccountSchema);
export type GetWorkspaceAccount200Schema = z.infer<typeof getWorkspaceAccount200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceAccount400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount400Schema = z.infer<typeof getWorkspaceAccount400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceAccount401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount401Schema = z.infer<typeof getWorkspaceAccount401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceAccount404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount404Schema = z.infer<typeof getWorkspaceAccount404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceAccount422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount422Schema = z.infer<typeof getWorkspaceAccount422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceAccount429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount429Schema = z.infer<typeof getWorkspaceAccount429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceAccount500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount500Schema = z.infer<typeof getWorkspaceAccount500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceAccount503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccount503Schema = z.infer<typeof getWorkspaceAccount503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountQueryResponseSchema = z.lazy(() => workspaceAccountSchema);
export type GetWorkspaceAccountQueryResponseSchema = z.infer<typeof getWorkspaceAccountQueryResponseSchema>;