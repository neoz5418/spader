import { z } from "@/utils/zod.ts";
import { watchEventSchema } from "./watchEventSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const watchWorkspaceZonesPathParamsSchema = z.object({ "workspace": z.string() });
export type WatchWorkspaceZonesPathParamsSchema = z.infer<typeof watchWorkspaceZonesPathParamsSchema>;
/**
 * @description Successful Response
 */
export const watchWorkspaceZones200Schema = z.lazy(() => watchEventSchema);
export type WatchWorkspaceZones200Schema = z.infer<typeof watchWorkspaceZones200Schema>;
/**
 * @description Request error
 */
export const watchWorkspaceZones400Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones400Schema = z.infer<typeof watchWorkspaceZones400Schema>;
/**
 * @description Unauthorized
 */
export const watchWorkspaceZones401Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones401Schema = z.infer<typeof watchWorkspaceZones401Schema>;
/**
 * @description Not found
 */
export const watchWorkspaceZones404Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones404Schema = z.infer<typeof watchWorkspaceZones404Schema>;
/**
 * @description Validation error
 */
export const watchWorkspaceZones422Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones422Schema = z.infer<typeof watchWorkspaceZones422Schema>;
/**
 * @description Rate limit exceeded
 */
export const watchWorkspaceZones429Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones429Schema = z.infer<typeof watchWorkspaceZones429Schema>;
/**
 * @description Internal server error
 */
export const watchWorkspaceZones500Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones500Schema = z.infer<typeof watchWorkspaceZones500Schema>;
/**
 * @description Service unavailable
 */
export const watchWorkspaceZones503Schema = z.lazy(() => errorSchema);
export type WatchWorkspaceZones503Schema = z.infer<typeof watchWorkspaceZones503Schema>;
/**
 * @description Successful Response
 */
export const watchWorkspaceZonesQueryResponseSchema = z.lazy(() => watchEventSchema);
export type WatchWorkspaceZonesQueryResponseSchema = z.infer<typeof watchWorkspaceZonesQueryResponseSchema>;
