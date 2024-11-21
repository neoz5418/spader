import { currencySchema } from "./currencySchema.gen";
import { rechargeTypeSchema } from "./rechargeTypeSchema.gen";
import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const rechargeWorkspaceAccount400Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount400Schema = z.infer<typeof rechargeWorkspaceAccount400Schema>;
/**
 * @description Unauthorized
 */
export const rechargeWorkspaceAccount401Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount401Schema = z.infer<typeof rechargeWorkspaceAccount401Schema>;
/**
 * @description Not found
 */
export const rechargeWorkspaceAccount404Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount404Schema = z.infer<typeof rechargeWorkspaceAccount404Schema>;
/**
 * @description Validation error
 */
export const rechargeWorkspaceAccount422Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount422Schema = z.infer<typeof rechargeWorkspaceAccount422Schema>;
/**
 * @description Rate limit exceeded
 */
export const rechargeWorkspaceAccount429Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount429Schema = z.infer<typeof rechargeWorkspaceAccount429Schema>;
/**
 * @description Internal server error
 */
export const rechargeWorkspaceAccount500Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount500Schema = z.infer<typeof rechargeWorkspaceAccount500Schema>;
/**
 * @description Service unavailable
 */
export const rechargeWorkspaceAccount503Schema = z.lazy(() => errorSchema);
export type RechargeWorkspaceAccount503Schema = z.infer<typeof rechargeWorkspaceAccount503Schema>;

 export const rechargeWorkspaceAccountMutationRequestSchema = z.lazy(() => rechargeWorkspaceAccountSchema);
export type RechargeWorkspaceAccountMutationRequestSchema = z.infer<typeof rechargeWorkspaceAccountMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const rechargeWorkspaceAccountMutationResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type RechargeWorkspaceAccountMutationResponseSchema = z.infer<typeof rechargeWorkspaceAccountMutationResponseSchema>;
