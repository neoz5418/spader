import { z } from "@/utils/zod.ts";
import { cursorListOperationSchema } from "./cursorListOperationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceOperationPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "uid": z.string().uuid() });
export type GetWorkspaceOperationPathParamsSchema = z.infer<typeof getWorkspaceOperationPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperation200Schema = z.lazy(() => cursorListOperationSchema);
export type GetWorkspaceOperation200Schema = z.infer<typeof getWorkspaceOperation200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceOperation400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation400Schema = z.infer<typeof getWorkspaceOperation400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceOperation401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation401Schema = z.infer<typeof getWorkspaceOperation401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceOperation404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation404Schema = z.infer<typeof getWorkspaceOperation404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceOperation422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation422Schema = z.infer<typeof getWorkspaceOperation422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceOperation429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation429Schema = z.infer<typeof getWorkspaceOperation429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceOperation500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation500Schema = z.infer<typeof getWorkspaceOperation500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceOperation503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceOperation503Schema = z.infer<typeof getWorkspaceOperation503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperationQueryResponseSchema = z.lazy(() => cursorListOperationSchema);
export type GetWorkspaceOperationQueryResponseSchema = z.infer<typeof getWorkspaceOperationQueryResponseSchema>;