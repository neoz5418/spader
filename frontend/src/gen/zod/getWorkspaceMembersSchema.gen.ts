import { z } from "@/utils/zod.ts";
import { paginatedListWorkspaceMemberSchema } from "./paginatedListWorkspaceMemberSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const getWorkspaceMembers400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceMembers400Schema = z.infer<typeof getWorkspaceMembers400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceMembers401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceMembers401Schema = z.infer<typeof getWorkspaceMembers401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceMembers404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceMembers404Schema = z.infer<typeof getWorkspaceMembers404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceMembers409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceMembers409Schema = z.infer<typeof getWorkspaceMembers409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceMembers412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceMembers412Schema = z.infer<typeof getWorkspaceMembers412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceMembers422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceMembers422Schema = z.infer<typeof getWorkspaceMembers422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceMembers500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceMembers500Schema = z.infer<typeof getWorkspaceMembers500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceMembersQueryResponseSchema = z.lazy(() => paginatedListWorkspaceMemberSchema);
export type GetWorkspaceMembersQueryResponseSchema = z.infer<typeof getWorkspaceMembersQueryResponseSchema>;
