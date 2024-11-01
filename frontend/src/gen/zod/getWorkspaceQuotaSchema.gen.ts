import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceQuotaPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceQuotaPathParamsSchema = z.infer<typeof getWorkspaceQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceQuota200Schema = z.lazy(() => workspaceQuotaSchema);
export type GetWorkspaceQuota200Schema = z.infer<typeof getWorkspaceQuota200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceQuota400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota400Schema = z.infer<typeof getWorkspaceQuota400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceQuota401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota401Schema = z.infer<typeof getWorkspaceQuota401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceQuota404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota404Schema = z.infer<typeof getWorkspaceQuota404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceQuota422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota422Schema = z.infer<typeof getWorkspaceQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceQuota429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota429Schema = z.infer<typeof getWorkspaceQuota429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceQuota500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota500Schema = z.infer<typeof getWorkspaceQuota500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceQuota503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceQuota503Schema = z.infer<typeof getWorkspaceQuota503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceQuotaQueryResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type GetWorkspaceQuotaQueryResponseSchema = z.infer<typeof getWorkspaceQuotaQueryResponseSchema>;