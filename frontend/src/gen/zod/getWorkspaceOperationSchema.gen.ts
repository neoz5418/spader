import { z } from "@/utils/zod.ts";
import { paginatedListOperationSchema } from "./paginatedListOperationSchema.gen";
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


export const getWorkspaceOperationPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "uid": z.string().uuid() });
export type GetWorkspaceOperationPathParamsSchema = z.infer<typeof getWorkspaceOperationPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperation200Schema = z.lazy(() => paginatedListOperationSchema);
export type GetWorkspaceOperation200Schema = z.infer<typeof getWorkspaceOperation200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceOperation422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceOperation422Schema = z.infer<typeof getWorkspaceOperation422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperationQueryResponseSchema = z.lazy(() => paginatedListOperationSchema);
export type GetWorkspaceOperationQueryResponseSchema = z.infer<typeof getWorkspaceOperationQueryResponseSchema>;