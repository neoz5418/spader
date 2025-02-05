import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceInvitationSchema } from "./paginatedListWorkspaceInvitationSchema.gen";
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


export const getWorkspaceInvitationsPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceInvitationsPathParamsSchema = z.infer<typeof getWorkspaceInvitationsPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceInvitations200Schema = z.lazy(() => paginatedListWorkspaceInvitationSchema);
export type GetWorkspaceInvitations200Schema = z.infer<typeof getWorkspaceInvitations200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceInvitations422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceInvitations422Schema = z.infer<typeof getWorkspaceInvitations422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceInvitationsQueryResponseSchema = z.lazy(() => paginatedListWorkspaceInvitationSchema);
export type GetWorkspaceInvitationsQueryResponseSchema = z.infer<typeof getWorkspaceInvitationsQueryResponseSchema>;