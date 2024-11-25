import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceAccountRechargeSchema } from "./paginatedListWorkspaceAccountRechargeSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listWorkspaceAccountRechargesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceAccountRechargesPathParamsSchema = z.infer<typeof listWorkspaceAccountRechargesPathParamsSchema>;

 export const listWorkspaceAccountRechargesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceAccountRechargesQueryParamsSchema = z.infer<typeof listWorkspaceAccountRechargesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceAccountRecharges200Schema = z.lazy(() => paginatedListWorkspaceAccountRechargeSchema);
export type ListWorkspaceAccountRecharges200Schema = z.infer<typeof listWorkspaceAccountRecharges200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceAccountRecharges400Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges400Schema = z.infer<typeof listWorkspaceAccountRecharges400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceAccountRecharges401Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges401Schema = z.infer<typeof listWorkspaceAccountRecharges401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceAccountRecharges404Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges404Schema = z.infer<typeof listWorkspaceAccountRecharges404Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceAccountRecharges422Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges422Schema = z.infer<typeof listWorkspaceAccountRecharges422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listWorkspaceAccountRecharges429Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges429Schema = z.infer<typeof listWorkspaceAccountRecharges429Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceAccountRecharges500Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges500Schema = z.infer<typeof listWorkspaceAccountRecharges500Schema>;
/**
 * @description Service unavailable
 */
export const listWorkspaceAccountRecharges503Schema = z.lazy(() => errorSchema);
export type ListWorkspaceAccountRecharges503Schema = z.infer<typeof listWorkspaceAccountRecharges503Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceAccountRechargesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceAccountRechargeSchema);
export type ListWorkspaceAccountRechargesQueryResponseSchema = z.infer<typeof listWorkspaceAccountRechargesQueryResponseSchema>;