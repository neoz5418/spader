import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceAccountRechargePathParamsSchema = z.object({ "workspace": z.string(), "recharge_id": z.string().uuid() });
export type GetWorkspaceAccountRechargePathParamsSchema = z.infer<typeof getWorkspaceAccountRechargePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountRecharge200Schema = z.lazy(() => workspaceAccountRechargeSchema);
export type GetWorkspaceAccountRecharge200Schema = z.infer<typeof getWorkspaceAccountRecharge200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceAccountRecharge400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge400Schema = z.infer<typeof getWorkspaceAccountRecharge400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceAccountRecharge401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge401Schema = z.infer<typeof getWorkspaceAccountRecharge401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceAccountRecharge404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge404Schema = z.infer<typeof getWorkspaceAccountRecharge404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceAccountRecharge422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge422Schema = z.infer<typeof getWorkspaceAccountRecharge422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceAccountRecharge429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge429Schema = z.infer<typeof getWorkspaceAccountRecharge429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceAccountRecharge500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge500Schema = z.infer<typeof getWorkspaceAccountRecharge500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceAccountRecharge503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceAccountRecharge503Schema = z.infer<typeof getWorkspaceAccountRecharge503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountRechargeQueryResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type GetWorkspaceAccountRechargeQueryResponseSchema = z.infer<typeof getWorkspaceAccountRechargeQueryResponseSchema>;
