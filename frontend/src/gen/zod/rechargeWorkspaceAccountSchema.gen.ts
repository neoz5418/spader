import { currencySchema } from "./currencySchema.gen";
import { rechargeTypeSchema } from "./rechargeTypeSchema.gen";
import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const rechargeWorkspaceAccountSchema = z.object({ "amount": z.number().int(), "currency": z.lazy(() => currencySchema), "type": z.lazy(() => rechargeTypeSchema), "callback_url": z.string() });
export type RechargeWorkspaceAccountSchema = z.infer<typeof rechargeWorkspaceAccountSchema>;


export const rechargeWorkspaceAccountPathParamsSchema = z.object({ "workspace": z.string() });
export type RechargeWorkspaceAccountPathParamsSchema = z.infer<typeof rechargeWorkspaceAccountPathParamsSchema>;
/**
 * @description Successful Response
 */
export const rechargeWorkspaceAccount200Schema = z.lazy(() => workspaceAccountRechargeSchema);
export type RechargeWorkspaceAccount200Schema = z.infer<typeof rechargeWorkspaceAccount200Schema>;
/**
 * @description Unprocessable Entity
 */
export const rechargeWorkspaceAccount422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type RechargeWorkspaceAccount422Schema = z.infer<typeof rechargeWorkspaceAccount422Schema>;

 export const rechargeWorkspaceAccountMutationRequestSchema = z.lazy(() => rechargeWorkspaceAccountSchema);
export type RechargeWorkspaceAccountMutationRequestSchema = z.infer<typeof rechargeWorkspaceAccountMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const rechargeWorkspaceAccountMutationResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type RechargeWorkspaceAccountMutationResponseSchema = z.infer<typeof rechargeWorkspaceAccountMutationResponseSchema>;