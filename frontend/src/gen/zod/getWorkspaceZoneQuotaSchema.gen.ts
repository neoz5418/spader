import { z } from "@/utils/zod.ts";
import { workspaceZoneQuotaSchema } from "./workspaceZoneQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const getWorkspaceZoneQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceZoneQuota400Schema = z.infer<typeof getWorkspaceZoneQuota400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceZoneQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceZoneQuota401Schema = z.infer<typeof getWorkspaceZoneQuota401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceZoneQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceZoneQuota404Schema = z.infer<typeof getWorkspaceZoneQuota404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceZoneQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceZoneQuota409Schema = z.infer<typeof getWorkspaceZoneQuota409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceZoneQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceZoneQuota412Schema = z.infer<typeof getWorkspaceZoneQuota412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceZoneQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceZoneQuota422Schema = z.infer<typeof getWorkspaceZoneQuota422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceZoneQuota500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceZoneQuota500Schema = z.infer<typeof getWorkspaceZoneQuota500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceZoneQuotaQueryResponseSchema = z.lazy(() => workspaceZoneQuotaSchema);
export type GetWorkspaceZoneQuotaQueryResponseSchema = z.infer<typeof getWorkspaceZoneQuotaQueryResponseSchema>;
