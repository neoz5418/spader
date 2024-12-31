import { z } from "@/utils/zod.ts";
import { workspaceQuotaSchema } from "./workspaceQuotaSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const replaceWorkspaceQuotaPathParamsSchema = z.object({ "workspace": z.string() });
export type ReplaceWorkspaceQuotaPathParamsSchema = z.infer<typeof replaceWorkspaceQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuota200Schema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuota200Schema = z.infer<typeof replaceWorkspaceQuota200Schema>;
/**
 * @description Unprocessable Entity
 */
export const replaceWorkspaceQuota422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ReplaceWorkspaceQuota422Schema = z.infer<typeof replaceWorkspaceQuota422Schema>;

 export const replaceWorkspaceQuotaMutationRequestSchema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuotaMutationRequestSchema = z.infer<typeof replaceWorkspaceQuotaMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const replaceWorkspaceQuotaMutationResponseSchema = z.lazy(() => workspaceQuotaSchema);
export type ReplaceWorkspaceQuotaMutationResponseSchema = z.infer<typeof replaceWorkspaceQuotaMutationResponseSchema>;
