import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceInvitationSchema } from "./paginatedListWorkspaceInvitationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const getWorkspaceInvitations400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations400Schema = z.infer<typeof getWorkspaceInvitations400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceInvitations401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations401Schema = z.infer<typeof getWorkspaceInvitations401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceInvitations404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations404Schema = z.infer<typeof getWorkspaceInvitations404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceInvitations422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations422Schema = z.infer<typeof getWorkspaceInvitations422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceInvitations429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations429Schema = z.infer<typeof getWorkspaceInvitations429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceInvitations500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations500Schema = z.infer<typeof getWorkspaceInvitations500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceInvitations503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceInvitations503Schema = z.infer<typeof getWorkspaceInvitations503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceInvitationsQueryResponseSchema = z.lazy(() => paginatedListWorkspaceInvitationSchema);
export type GetWorkspaceInvitationsQueryResponseSchema = z.infer<typeof getWorkspaceInvitationsQueryResponseSchema>;
