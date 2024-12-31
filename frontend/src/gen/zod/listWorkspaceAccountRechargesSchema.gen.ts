import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceAccountRechargeSchema } from "./paginatedListWorkspaceAccountRechargeSchema.gen";
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
 * @description Unprocessable Entity
 */
export const listWorkspaceAccountRecharges422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceAccountRecharges422Schema = z.infer<typeof listWorkspaceAccountRecharges422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceAccountRechargesQueryResponseSchema = z.lazy(() => paginatedListWorkspaceAccountRechargeSchema);
export type ListWorkspaceAccountRechargesQueryResponseSchema = z.infer<typeof listWorkspaceAccountRechargesQueryResponseSchema>;
