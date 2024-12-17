import { z } from "@/utils/zod.ts";
import { workspaceAccountRechargeSchema } from "./workspaceAccountRechargeSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const getWorkspaceAccountRecharge400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceAccountRecharge400Schema = z.infer<typeof getWorkspaceAccountRecharge400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceAccountRecharge401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceAccountRecharge401Schema = z.infer<typeof getWorkspaceAccountRecharge401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceAccountRecharge404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceAccountRecharge404Schema = z.infer<typeof getWorkspaceAccountRecharge404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceAccountRecharge409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceAccountRecharge409Schema = z.infer<typeof getWorkspaceAccountRecharge409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceAccountRecharge412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceAccountRecharge412Schema = z.infer<typeof getWorkspaceAccountRecharge412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceAccountRecharge422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceAccountRecharge422Schema = z.infer<typeof getWorkspaceAccountRecharge422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceAccountRecharge500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceAccountRecharge500Schema = z.infer<typeof getWorkspaceAccountRecharge500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountRechargeQueryResponseSchema = z.lazy(() => workspaceAccountRechargeSchema);
export type GetWorkspaceAccountRechargeQueryResponseSchema = z.infer<typeof getWorkspaceAccountRechargeQueryResponseSchema>;
