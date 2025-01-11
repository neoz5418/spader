import { z } from "@/utils/zod.ts";
import { workspaceSchema } from "./workspaceSchema.gen";
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


export const getWorkspacePathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspacePathParamsSchema = z.infer<typeof getWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspace200Schema = z.lazy(() => workspaceSchema);
export type GetWorkspace200Schema = z.infer<typeof getWorkspace200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspace422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspace422Schema = z.infer<typeof getWorkspace422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceQueryResponseSchema = z.lazy(() => workspaceSchema);
export type GetWorkspaceQueryResponseSchema = z.infer<typeof getWorkspaceQueryResponseSchema>;