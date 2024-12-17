import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const replaceWorkspaceQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ReplaceWorkspaceQuota400Schema = z.infer<typeof replaceWorkspaceQuota400Schema>;
/**
 * @description Unauthorized
 */
export const replaceWorkspaceQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ReplaceWorkspaceQuota401Schema = z.infer<typeof replaceWorkspaceQuota401Schema>;
/**
 * @description Not found
 */
export const replaceWorkspaceQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ReplaceWorkspaceQuota404Schema = z.infer<typeof replaceWorkspaceQuota404Schema>;
/**
 * @description Resource conflict
 */
export const replaceWorkspaceQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type ReplaceWorkspaceQuota409Schema = z.infer<typeof replaceWorkspaceQuota409Schema>;
/**
 * @description Precondition failed
 */
export const replaceWorkspaceQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ReplaceWorkspaceQuota412Schema = z.infer<typeof replaceWorkspaceQuota412Schema>;
/**
 * @description Validation error
 */
export const replaceWorkspaceQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type ReplaceWorkspaceQuota422Schema = z.infer<typeof replaceWorkspaceQuota422Schema>;
/**
 * @description Internal server error
 */
export const replaceWorkspaceQuota500Schema = z.lazy(() => errorInternalSchema);
export type ReplaceWorkspaceQuota500Schema = z.infer<typeof replaceWorkspaceQuota500Schema>;

 export const replaceWorkspaceQuotaMutationRequestSchema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuotaMutationRequestSchema = z.infer<typeof replaceWorkspaceQuotaMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuotaMutationResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuotaMutationResponseSchema = z.infer<typeof replaceWorkspaceQuotaMutationResponseSchema>;
