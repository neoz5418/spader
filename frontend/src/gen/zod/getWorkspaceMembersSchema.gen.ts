import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceMemberSchema } from "./paginatedListWorkspaceMemberSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getWorkspaceMembersPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceMembersPathParamsSchema = z.infer<typeof getWorkspaceMembersPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceMembers200Schema = z.lazy(() => paginatedListWorkspaceMemberSchema);
export type GetWorkspaceMembers200Schema = z.infer<typeof getWorkspaceMembers200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceMembers400Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers400Schema = z.infer<typeof getWorkspaceMembers400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceMembers401Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers401Schema = z.infer<typeof getWorkspaceMembers401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceMembers404Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers404Schema = z.infer<typeof getWorkspaceMembers404Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceMembers422Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers422Schema = z.infer<typeof getWorkspaceMembers422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getWorkspaceMembers429Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers429Schema = z.infer<typeof getWorkspaceMembers429Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceMembers500Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers500Schema = z.infer<typeof getWorkspaceMembers500Schema>;
/**
 * @description Service unavailable
 */
export const getWorkspaceMembers503Schema = z.lazy(() => errorSchema);
export type GetWorkspaceMembers503Schema = z.infer<typeof getWorkspaceMembers503Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceMembersQueryResponseSchema = z.lazy(() => paginatedListWorkspaceMemberSchema);
export type GetWorkspaceMembersQueryResponseSchema = z.infer<typeof getWorkspaceMembersQueryResponseSchema>;