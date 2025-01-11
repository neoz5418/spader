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


export const getWorkspaceAccountRechargePathParamsSchema = z.object({ "workspace": z.string(), "recharge_id": z.string().uuid() });
export type GetWorkspaceAccountRechargePathParamsSchema = z.infer<typeof getWorkspaceAccountRechargePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountRecharge200Schema = z.lazy(() => workspaceAccountRechargeSchema);
export type GetWorkspaceAccountRecharge200Schema = z.infer<typeof getWorkspaceAccountRecharge200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceAccountRecharge422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceAccountRecharge422Schema = z.infer<typeof getWorkspaceAccountRecharge422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountRechargeQueryResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type GetWorkspaceAccountRechargeQueryResponseSchema = z.infer<typeof getWorkspaceAccountRechargeQueryResponseSchema>;