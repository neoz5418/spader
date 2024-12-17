import { z } from "@/utils/zod.ts";
import { workspaceSchema } from "./workspaceSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { workspaceCreateSchema } from "./workspaceCreateSchema.gen";


export const createWorkspacePathParamsSchema = z.object({ "username": z.string() });
export type CreateWorkspacePathParamsSchema = z.infer<typeof createWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createWorkspace201Schema = z.lazy(() => workspaceSchema);
export type CreateWorkspace201Schema = z.infer<typeof createWorkspace201Schema>;
/**
 * @description Request error
 */
export const createWorkspace400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateWorkspace400Schema = z.infer<typeof createWorkspace400Schema>;
/**
 * @description Unauthorized
 */
export const createWorkspace401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateWorkspace401Schema = z.infer<typeof createWorkspace401Schema>;
/**
 * @description Not found
 */
export const createWorkspace404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateWorkspace404Schema = z.infer<typeof createWorkspace404Schema>;
/**
 * @description Resource conflict
 */
export const createWorkspace409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateWorkspace409Schema = z.infer<typeof createWorkspace409Schema>;
/**
 * @description Precondition failed
 */
export const createWorkspace412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateWorkspace412Schema = z.infer<typeof createWorkspace412Schema>;
/**
 * @description Validation error
 */
export const createWorkspace422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateWorkspace422Schema = z.infer<typeof createWorkspace422Schema>;
/**
 * @description Internal server error
 */
export const createWorkspace500Schema = z.lazy(() => errorInternalSchema);
export type CreateWorkspace500Schema = z.infer<typeof createWorkspace500Schema>;

 export const createWorkspaceMutationRequestSchema = z.lazy(() => workspaceCreateSchema);
export type CreateWorkspaceMutationRequestSchema = z.infer<typeof createWorkspaceMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createWorkspaceMutationResponseSchema = z.lazy(() => workspaceSchema);
export type CreateWorkspaceMutationResponseSchema = z.infer<typeof createWorkspaceMutationResponseSchema>;
