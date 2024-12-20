import { z } from "@/utils/zod.ts";
import { listOperationsSortOptionsSchema } from "./listOperationsSortOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListOperationSchema } from "./paginatedListOperationSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const getWorkspaceOperationsPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceOperationsPathParamsSchema = z.infer<typeof getWorkspaceOperationsPathParamsSchema>;

 export const getWorkspaceOperationsQueryParamsSchema = z.object({ "search": z.string().optional(), "sort": z.lazy(() => listOperationsSortOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type GetWorkspaceOperationsQueryParamsSchema = z.infer<typeof getWorkspaceOperationsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperations200Schema = z.lazy(() => paginatedListOperationSchema);
export type GetWorkspaceOperations200Schema = z.infer<typeof getWorkspaceOperations200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceOperations422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceOperations422Schema = z.infer<typeof getWorkspaceOperations422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperationsQueryResponseSchema = z.lazy(() => paginatedListOperationSchema);
export type GetWorkspaceOperationsQueryResponseSchema = z.infer<typeof getWorkspaceOperationsQueryResponseSchema>;