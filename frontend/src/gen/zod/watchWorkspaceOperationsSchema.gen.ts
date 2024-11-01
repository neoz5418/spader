import { z } from "@/utils/zod.ts";
import { watchEventSchema } from "./watchEventSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const watchWorkspaceOperationsPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type WatchWorkspaceOperationsPathParamsSchema = z.infer<typeof watchWorkspaceOperationsPathParamsSchema>;
/**
 * @description Successful Response
 */
export const watchWorkspaceOperations200Schema = z.lazy(() => watchEventSchema);
export type WatchWorkspaceOperations200Schema = z.infer<typeof watchWorkspaceOperations200Schema>;
/**
 * @description Request error
 */
export const watchWorkspaceOperations400Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations400Schema = z.infer<typeof watchWorkspaceOperations400Schema>;
/**
 * @description Unauthorized
 */
export const watchWorkspaceOperations401Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations401Schema = z.infer<typeof watchWorkspaceOperations401Schema>;
/**
 * @description Not found
 */
export const watchWorkspaceOperations404Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations404Schema = z.infer<typeof watchWorkspaceOperations404Schema>;
/**
 * @description Validation error
 */
export const watchWorkspaceOperations422Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations422Schema = z.infer<typeof watchWorkspaceOperations422Schema>;
/**
 * @description Rate limit exceeded
 */
export const watchWorkspaceOperations429Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations429Schema = z.infer<typeof watchWorkspaceOperations429Schema>;
/**
 * @description Internal server error
 */
export const watchWorkspaceOperations500Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations500Schema = z.infer<typeof watchWorkspaceOperations500Schema>;
/**
 * @description Service unavailable
 */
export const watchWorkspaceOperations503Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceOperations503Schema = z.infer<typeof watchWorkspaceOperations503Schema>;
/**
 * @description Successful Response
 */
export const watchWorkspaceOperationsQueryResponseSchema = z.lazy(() => watchEventSchema);
export type WatchWorkspaceOperationsQueryResponseSchema = z.infer<typeof watchWorkspaceOperationsQueryResponseSchema>;