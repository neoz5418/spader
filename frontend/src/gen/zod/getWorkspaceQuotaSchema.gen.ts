import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const getWorkspaceQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceQuota400Schema = z.infer<typeof getWorkspaceQuota400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceQuota401Schema = z.infer<typeof getWorkspaceQuota401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceQuota404Schema = z.infer<typeof getWorkspaceQuota404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceQuota409Schema = z.infer<typeof getWorkspaceQuota409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceQuota412Schema = z.infer<typeof getWorkspaceQuota412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceQuota422Schema = z.infer<typeof getWorkspaceQuota422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceQuota500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceQuota500Schema = z.infer<typeof getWorkspaceQuota500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceQuotaQueryResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type GetWorkspaceQuotaQueryResponseSchema = z.infer<typeof getWorkspaceQuotaQueryResponseSchema>;
