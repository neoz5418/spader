import { z } from "@/utils/zod.ts";
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


export const deleteWorkspacePathParamsSchema = z.object({ "workspace": z.string() });
export type DeleteWorkspacePathParamsSchema = z.infer<typeof deleteWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteWorkspace204Schema = z.any();
export type DeleteWorkspace204Schema = z.infer<typeof deleteWorkspace204Schema>;
/**
 * @description Unprocessable Entity
 */
export const deleteWorkspace422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type DeleteWorkspace422Schema = z.infer<typeof deleteWorkspace422Schema>;

 export const deleteWorkspaceMutationResponseSchema = z.any();
export type DeleteWorkspaceMutationResponseSchema = z.infer<typeof deleteWorkspaceMutationResponseSchema>;