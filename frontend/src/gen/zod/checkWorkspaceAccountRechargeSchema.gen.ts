import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const checkWorkspaceAccountRecharge400Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge400Schema = z.infer<typeof checkWorkspaceAccountRecharge400Schema>;
/**
 * @description Unauthorized
 */
export const checkWorkspaceAccountRecharge401Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge401Schema = z.infer<typeof checkWorkspaceAccountRecharge401Schema>;
/**
 * @description Not found
 */
export const checkWorkspaceAccountRecharge404Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge404Schema = z.infer<typeof checkWorkspaceAccountRecharge404Schema>;
/**
 * @description Validation error
 */
export const checkWorkspaceAccountRecharge422Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge422Schema = z.infer<typeof checkWorkspaceAccountRecharge422Schema>;
/**
 * @description Rate limit exceeded
 */
export const checkWorkspaceAccountRecharge429Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge429Schema = z.infer<typeof checkWorkspaceAccountRecharge429Schema>;
/**
 * @description Internal server error
 */
export const checkWorkspaceAccountRecharge500Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge500Schema = z.infer<typeof checkWorkspaceAccountRecharge500Schema>;
/**
 * @description Service unavailable
 */
export const checkWorkspaceAccountRecharge503Schema = z.lazy(() => errorSchema);
export type CheckWorkspaceAccountRecharge503Schema = z.infer<typeof checkWorkspaceAccountRecharge503Schema>;
/**
 * @description Successful Response
 */
export const checkWorkspaceAccountRechargeMutationResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type CheckWorkspaceAccountRechargeMutationResponseSchema = z.infer<typeof checkWorkspaceAccountRechargeMutationResponseSchema>;
