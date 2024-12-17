import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const updateWorkspaceQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type UpdateWorkspaceQuota400Schema = z.infer<typeof updateWorkspaceQuota400Schema>;
/**
 * @description Unauthorized
 */
export const updateWorkspaceQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type UpdateWorkspaceQuota401Schema = z.infer<typeof updateWorkspaceQuota401Schema>;
/**
 * @description Not found
 */
export const updateWorkspaceQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type UpdateWorkspaceQuota404Schema = z.infer<typeof updateWorkspaceQuota404Schema>;
/**
 * @description Resource conflict
 */
export const updateWorkspaceQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type UpdateWorkspaceQuota409Schema = z.infer<typeof updateWorkspaceQuota409Schema>;
/**
 * @description Precondition failed
 */
export const updateWorkspaceQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type UpdateWorkspaceQuota412Schema = z.infer<typeof updateWorkspaceQuota412Schema>;
/**
 * @description Validation error
 */
export const updateWorkspaceQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type UpdateWorkspaceQuota422Schema = z.infer<typeof updateWorkspaceQuota422Schema>;
/**
 * @description Internal server error
 */
export const updateWorkspaceQuota500Schema = z.lazy(() => errorInternalSchema);
export type UpdateWorkspaceQuota500Schema = z.infer<typeof updateWorkspaceQuota500Schema>;

 export const updateWorkspaceQuotaMutationRequestSchema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuotaMutationRequestSchema = z.infer<typeof updateWorkspaceQuotaMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const updateWorkspaceQuotaMutationResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuotaMutationResponseSchema = z.infer<typeof updateWorkspaceQuotaMutationResponseSchema>;
