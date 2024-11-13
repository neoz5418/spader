import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const replaceWorkspaceQuotaPathParamsSchema = z.object({ "workspace": z.string() });
export type ReplaceWorkspaceQuotaPathParamsSchema = z.infer<typeof replaceWorkspaceQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuota200Schema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuota200Schema = z.infer<typeof replaceWorkspaceQuota200Schema>;
/**
 * @description Request error
 */
export const replaceWorkspaceQuota400Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota400Schema = z.infer<typeof replaceWorkspaceQuota400Schema>;
/**
 * @description Unauthorized
 */
export const replaceWorkspaceQuota401Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota401Schema = z.infer<typeof replaceWorkspaceQuota401Schema>;
/**
 * @description Not found
 */
export const replaceWorkspaceQuota404Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota404Schema = z.infer<typeof replaceWorkspaceQuota404Schema>;
/**
 * @description Validation error
 */
export const replaceWorkspaceQuota422Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota422Schema = z.infer<typeof replaceWorkspaceQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const replaceWorkspaceQuota429Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota429Schema = z.infer<typeof replaceWorkspaceQuota429Schema>;
/**
 * @description Internal server error
 */
export const replaceWorkspaceQuota500Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota500Schema = z.infer<typeof replaceWorkspaceQuota500Schema>;
/**
 * @description Service unavailable
 */
export const replaceWorkspaceQuota503Schema = z.lazy(() => errorSchema);
export type ReplaceWorkspaceQuota503Schema = z.infer<typeof replaceWorkspaceQuota503Schema>;

 export const replaceWorkspaceQuotaMutationRequestSchema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuotaMutationRequestSchema = z.infer<typeof replaceWorkspaceQuotaMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuotaMutationResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuotaMutationResponseSchema = z.infer<typeof replaceWorkspaceQuotaMutationResponseSchema>;