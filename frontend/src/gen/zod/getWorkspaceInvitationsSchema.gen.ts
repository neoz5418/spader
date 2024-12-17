import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceInvitationSchema } from "./paginatedListWorkspaceInvitationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getWorkspaceInvitationsPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceInvitationsPathParamsSchema = z.infer<typeof getWorkspaceInvitationsPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceInvitations200Schema = z.lazy(() => paginatedListWorkspaceInvitationSchema);
export type GetWorkspaceInvitations200Schema = z.infer<typeof getWorkspaceInvitations200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceInvitations400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceInvitations400Schema = z.infer<typeof getWorkspaceInvitations400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceInvitations401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceInvitations401Schema = z.infer<typeof getWorkspaceInvitations401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceInvitations404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceInvitations404Schema = z.infer<typeof getWorkspaceInvitations404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceInvitations409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceInvitations409Schema = z.infer<typeof getWorkspaceInvitations409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceInvitations412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceInvitations412Schema = z.infer<typeof getWorkspaceInvitations412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceInvitations422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceInvitations422Schema = z.infer<typeof getWorkspaceInvitations422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceInvitations500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceInvitations500Schema = z.infer<typeof getWorkspaceInvitations500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceInvitationsQueryResponseSchema = z.lazy(() => paginatedListWorkspaceInvitationSchema);
export type GetWorkspaceInvitationsQueryResponseSchema = z.infer<typeof getWorkspaceInvitationsQueryResponseSchema>;
