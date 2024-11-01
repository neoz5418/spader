import { z } from "@/utils/zod.ts";
import { workspaceZoneQuotaSchema } from "./workspaceZoneQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceZoneQuotaPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type GetWorkspaceZoneQuotaPathParamsSchema = z.infer<typeof getWorkspaceZoneQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceZoneQuota200Schema = z.lazy(() => workspaceZoneQuotaSchema);
export type GetWorkspaceZoneQuota200Schema = z.infer<typeof getWorkspaceZoneQuota200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceZoneQuota400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota400Schema = z.infer<typeof getWorkspaceZoneQuota400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceZoneQuota401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota401Schema = z.infer<typeof getWorkspaceZoneQuota401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceZoneQuota404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota404Schema = z.infer<typeof getWorkspaceZoneQuota404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceZoneQuota422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota422Schema = z.infer<typeof getWorkspaceZoneQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceZoneQuota429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota429Schema = z.infer<typeof getWorkspaceZoneQuota429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceZoneQuota500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota500Schema = z.infer<typeof getWorkspaceZoneQuota500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceZoneQuota503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceZoneQuota503Schema = z.infer<typeof getWorkspaceZoneQuota503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceZoneQuotaQueryResponseSchema = z.lazy(() => workspaceZoneQuotaSchema);
export type GetWorkspaceZoneQuotaQueryResponseSchema = z.infer<typeof getWorkspaceZoneQuotaQueryResponseSchema>;