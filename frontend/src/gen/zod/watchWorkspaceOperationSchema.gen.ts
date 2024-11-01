import { z } from "@/utils/zod.ts";
import { watchEventSchema } from "./watchEventSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const watchWorkspaceOperationPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "uid": z.string().uuid() });
export type WatchWorkspaceOperationPathParamsSchema = z.infer<typeof watchWorkspaceOperationPathParamsSchema>;
/**
 * @description Successful Response
 */
export const watchWorkspaceOperation200Schema = z.lazy(() => watchEventSchema);
export type WatchWorkspaceOperation200Schema = z.infer<typeof watchWorkspaceOperation200Schema>;
/**
 * @description Request error
 */
export const watchWorkspaceOperation400Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation400Schema = z.infer<typeof watchWorkspaceOperation400Schema>;
/**
 * @description Unauthorized
 */
export const watchWorkspaceOperation401Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation401Schema = z.infer<typeof watchWorkspaceOperation401Schema>;
/**
 * @description Not found
 */
export const watchWorkspaceOperation404Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation404Schema = z.infer<typeof watchWorkspaceOperation404Schema>;
/**
 * @description Validation error
 */
export const watchWorkspaceOperation422Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation422Schema = z.infer<typeof watchWorkspaceOperation422Schema>;
/**
 * @description Rate limit exceeded
 */
export const watchWorkspaceOperation429Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation429Schema = z.infer<typeof watchWorkspaceOperation429Schema>;
/**
 * @description Internal server error
 */
export const watchWorkspaceOperation500Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation500Schema = z.infer<typeof watchWorkspaceOperation500Schema>;
/**
 * @description Service unavailable
 */
export const watchWorkspaceOperation503Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperation503Schema = z.infer<typeof watchWorkspaceOperation503Schema>;
/**
 * @description Successful Response
 */
export const watchWorkspaceOperationQueryResponseSchema = z.lazy(() => watchEventSchema);
export type WatchWorkspaceOperationQueryResponseSchema = z.infer<typeof watchWorkspaceOperationQueryResponseSchema>;