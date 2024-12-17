import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorRequestValidationFailedSchema } from "./errorRequestValidationFailedSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const updateWorkspaceQuotaPathParamsSchema = z.object({ "workspace": z.string() });
export type UpdateWorkspaceQuotaPathParamsSchema = z.infer<typeof updateWorkspaceQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const updateWorkspaceQuota200Schema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuota200Schema = z.infer<typeof updateWorkspaceQuota200Schema>;
/**
 * @description Unprocessable Entity
 */
export const updateWorkspaceQuota422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorPreconditionFailedSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorRequestValidationFailedSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type UpdateWorkspaceQuota422Schema = z.infer<typeof updateWorkspaceQuota422Schema>;

 export const updateWorkspaceQuotaMutationRequestSchema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuotaMutationRequestSchema = z.infer<typeof updateWorkspaceQuotaMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const updateWorkspaceQuotaMutationResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type UpdateWorkspaceQuotaMutationResponseSchema = z.infer<typeof updateWorkspaceQuotaMutationResponseSchema>;
