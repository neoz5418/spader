import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
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


export const checkWorkspaceAccountRechargePathParamsSchema = z.object({ "recharge_id": z.string().uuid() });
export type CheckWorkspaceAccountRechargePathParamsSchema = z.infer<typeof checkWorkspaceAccountRechargePathParamsSchema>;
/**
 * @description Successful Response
 */
export const checkWorkspaceAccountRecharge200Schema = z.lazy(() => workspaceAccountRechargeSchema);
export type CheckWorkspaceAccountRecharge200Schema = z.infer<typeof checkWorkspaceAccountRecharge200Schema>;
/**
 * @description Unprocessable Entity
 */
export const checkWorkspaceAccountRecharge422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CheckWorkspaceAccountRecharge422Schema = z.infer<typeof checkWorkspaceAccountRecharge422Schema>;
/**
 * @description Successful Response
 */
export const checkWorkspaceAccountRechargeMutationResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type CheckWorkspaceAccountRechargeMutationResponseSchema = z.infer<typeof checkWorkspaceAccountRechargeMutationResponseSchema>;