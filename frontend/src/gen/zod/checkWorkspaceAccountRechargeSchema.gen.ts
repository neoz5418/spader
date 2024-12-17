import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const checkWorkspaceAccountRechargePathParamsSchema = z.object({ "recharge_id": z.string().uuid() });
export type CheckWorkspaceAccountRechargePathParamsSchema = z.infer<typeof checkWorkspaceAccountRechargePathParamsSchema>;
/**
 * @description Successful Response
 */
export const checkWorkspaceAccountRecharge200Schema = z.lazy(() => workspaceAccountRechargeSchema);
export type CheckWorkspaceAccountRecharge200Schema = z.infer<typeof checkWorkspaceAccountRecharge200Schema>;
/**
 * @description Request error
 */
export const checkWorkspaceAccountRecharge400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CheckWorkspaceAccountRecharge400Schema = z.infer<typeof checkWorkspaceAccountRecharge400Schema>;
/**
 * @description Unauthorized
 */
export const checkWorkspaceAccountRecharge401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CheckWorkspaceAccountRecharge401Schema = z.infer<typeof checkWorkspaceAccountRecharge401Schema>;
/**
 * @description Not found
 */
export const checkWorkspaceAccountRecharge404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CheckWorkspaceAccountRecharge404Schema = z.infer<typeof checkWorkspaceAccountRecharge404Schema>;
/**
 * @description Resource conflict
 */
export const checkWorkspaceAccountRecharge409Schema = z.lazy(() => errorResourceConflictSchema);
export type CheckWorkspaceAccountRecharge409Schema = z.infer<typeof checkWorkspaceAccountRecharge409Schema>;
/**
 * @description Precondition failed
 */
export const checkWorkspaceAccountRecharge412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CheckWorkspaceAccountRecharge412Schema = z.infer<typeof checkWorkspaceAccountRecharge412Schema>;
/**
 * @description Validation error
 */
export const checkWorkspaceAccountRecharge422Schema = z.lazy(() => errorValidationFailedSchema);
export type CheckWorkspaceAccountRecharge422Schema = z.infer<typeof checkWorkspaceAccountRecharge422Schema>;
/**
 * @description Internal server error
 */
export const checkWorkspaceAccountRecharge500Schema = z.lazy(() => errorInternalSchema);
export type CheckWorkspaceAccountRecharge500Schema = z.infer<typeof checkWorkspaceAccountRecharge500Schema>;
/**
 * @description Successful Response
 */
export const checkWorkspaceAccountRechargeMutationResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type CheckWorkspaceAccountRechargeMutationResponseSchema = z.infer<typeof checkWorkspaceAccountRechargeMutationResponseSchema>;
