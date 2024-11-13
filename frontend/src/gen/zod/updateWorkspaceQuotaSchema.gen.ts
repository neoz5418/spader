import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const updateWorkspaceQuotaPathParamsSchema = z.object({ "workspace": z.string() });
export type UpdateWorkspaceQuotaPathParamsSchema = z.infer<typeof updateWorkspaceQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const updateWorkspaceQuota200Schema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuota200Schema = z.infer<typeof updateWorkspaceQuota200Schema>;
/**
 * @description Request error
 */
export const updateWorkspaceQuota400Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota400Schema = z.infer<typeof updateWorkspaceQuota400Schema>;
/**
 * @description Unauthorized
 */
export const updateWorkspaceQuota401Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota401Schema = z.infer<typeof updateWorkspaceQuota401Schema>;
/**
 * @description Not found
 */
export const updateWorkspaceQuota404Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota404Schema = z.infer<typeof updateWorkspaceQuota404Schema>;
/**
 * @description Validation error
 */
export const updateWorkspaceQuota422Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota422Schema = z.infer<typeof updateWorkspaceQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const updateWorkspaceQuota429Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota429Schema = z.infer<typeof updateWorkspaceQuota429Schema>;
/**
 * @description Internal server error
 */
export const updateWorkspaceQuota500Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota500Schema = z.infer<typeof updateWorkspaceQuota500Schema>;
/**
 * @description Service unavailable
 */
export const updateWorkspaceQuota503Schema = z.lazy(() => errorSchema);
export type UpdateWorkspaceQuota503Schema = z.infer<typeof updateWorkspaceQuota503Schema>;

 export const updateWorkspaceQuotaMutationRequestSchema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuotaMutationRequestSchema = z.infer<typeof updateWorkspaceQuotaMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const updateWorkspaceQuotaMutationResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuotaMutationResponseSchema = z.infer<typeof updateWorkspaceQuotaMutationResponseSchema>;