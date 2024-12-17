import { currencySchema } from "./currencySchema.gen";
import { rechargeTypeSchema } from "./rechargeTypeSchema.gen";
import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
 * @description Request error
 */
export const rechargeWorkspaceAccount400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type RechargeWorkspaceAccount400Schema = z.infer<typeof rechargeWorkspaceAccount400Schema>;
/**
 * @description Unauthorized
 */
export const rechargeWorkspaceAccount401Schema = z.lazy(() => errorUnauthorizedSchema);
export type RechargeWorkspaceAccount401Schema = z.infer<typeof rechargeWorkspaceAccount401Schema>;
/**
 * @description Not found
 */
export const rechargeWorkspaceAccount404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type RechargeWorkspaceAccount404Schema = z.infer<typeof rechargeWorkspaceAccount404Schema>;
/**
 * @description Resource conflict
 */
export const rechargeWorkspaceAccount409Schema = z.lazy(() => errorResourceConflictSchema);
export type RechargeWorkspaceAccount409Schema = z.infer<typeof rechargeWorkspaceAccount409Schema>;
/**
 * @description Precondition failed
 */
export const rechargeWorkspaceAccount412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type RechargeWorkspaceAccount412Schema = z.infer<typeof rechargeWorkspaceAccount412Schema>;
/**
 * @description Validation error
 */
export const rechargeWorkspaceAccount422Schema = z.lazy(() => errorValidationFailedSchema);
export type RechargeWorkspaceAccount422Schema = z.infer<typeof rechargeWorkspaceAccount422Schema>;
/**
 * @description Internal server error
 */
export const rechargeWorkspaceAccount500Schema = z.lazy(() => errorInternalSchema);
export type RechargeWorkspaceAccount500Schema = z.infer<typeof rechargeWorkspaceAccount500Schema>;

 export const rechargeWorkspaceAccountMutationRequestSchema = z.lazy(() => rechargeWorkspaceAccountSchema);
export type RechargeWorkspaceAccountMutationRequestSchema = z.infer<typeof rechargeWorkspaceAccountMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const rechargeWorkspaceAccountMutationResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type RechargeWorkspaceAccountMutationResponseSchema = z.infer<typeof rechargeWorkspaceAccountMutationResponseSchema>;
