import { z } from "@/utils/zod.ts";
import { listAuditLogsSortOptionsSchema } from "./listAuditLogsSortOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListAuditLogSchema } from "./paginatedListAuditLogSchema.gen";
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


export const getWorkspaceAuditLogsPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceAuditLogsPathParamsSchema = z.infer<typeof getWorkspaceAuditLogsPathParamsSchema>;

 export const getWorkspaceAuditLogsQueryParamsSchema = z.object({ "search": z.string().optional(), "sort": z.lazy(() => listAuditLogsSortOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type GetWorkspaceAuditLogsQueryParamsSchema = z.infer<typeof getWorkspaceAuditLogsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAuditLogs200Schema = z.lazy(() => paginatedListAuditLogSchema);
export type GetWorkspaceAuditLogs200Schema = z.infer<typeof getWorkspaceAuditLogs200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceAuditLogs422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceAuditLogs422Schema = z.infer<typeof getWorkspaceAuditLogs422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAuditLogsQueryResponseSchema = z.lazy(() => paginatedListAuditLogSchema);
export type GetWorkspaceAuditLogsQueryResponseSchema = z.infer<typeof getWorkspaceAuditLogsQueryResponseSchema>;
