import { z } from "@/utils/zod.ts";
import { workspaceAccountSchema } from "./workspaceAccountSchema.gen";
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
import { rechargeBaseSchema } from "./rechargeBaseSchema.gen";


export const rechargeWorkspaceAccountByAdminPathParamsSchema = z.object({ "workspace": z.string() });
export type RechargeWorkspaceAccountByAdminPathParamsSchema = z.infer<typeof rechargeWorkspaceAccountByAdminPathParamsSchema>;
/**
 * @description Successful Response
 */
export const rechargeWorkspaceAccountByAdmin201Schema = z.lazy(() => workspaceAccountSchema);
export type RechargeWorkspaceAccountByAdmin201Schema = z.infer<typeof rechargeWorkspaceAccountByAdmin201Schema>;
/**
 * @description Unprocessable Entity
 */
export const rechargeWorkspaceAccountByAdmin422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type RechargeWorkspaceAccountByAdmin422Schema = z.infer<typeof rechargeWorkspaceAccountByAdmin422Schema>;

 export const rechargeWorkspaceAccountByAdminMutationRequestSchema = z.lazy(() => rechargeBaseSchema);
export type RechargeWorkspaceAccountByAdminMutationRequestSchema = z.infer<typeof rechargeWorkspaceAccountByAdminMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const rechargeWorkspaceAccountByAdminMutationResponseSchema = z.lazy(() => workspaceAccountSchema);
export type RechargeWorkspaceAccountByAdminMutationResponseSchema = z.infer<typeof rechargeWorkspaceAccountByAdminMutationResponseSchema>;