import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceAccountRechargeSchema } from "./paginatedListWorkspaceAccountRechargeSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const listWorkspaceAccountRecharges400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceAccountRecharges400Schema = z.infer<typeof listWorkspaceAccountRecharges400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceAccountRecharges401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceAccountRecharges401Schema = z.infer<typeof listWorkspaceAccountRecharges401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceAccountRecharges404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceAccountRecharges404Schema = z.infer<typeof listWorkspaceAccountRecharges404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceAccountRecharges409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceAccountRecharges409Schema = z.infer<typeof listWorkspaceAccountRecharges409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceAccountRecharges412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceAccountRecharges412Schema = z.infer<typeof listWorkspaceAccountRecharges412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceAccountRecharges422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceAccountRecharges422Schema = z.infer<typeof listWorkspaceAccountRecharges422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceAccountRecharges500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceAccountRecharges500Schema = z.infer<typeof listWorkspaceAccountRecharges500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceAccountRechargesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceAccountRechargeSchema);
export type ListWorkspaceAccountRechargesQueryResponseSchema = z.infer<typeof listWorkspaceAccountRechargesQueryResponseSchema>;
