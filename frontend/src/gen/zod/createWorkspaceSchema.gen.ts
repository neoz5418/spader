import { z } from "@/utils/zod.ts";
import { workspaceSchema } from "./workspaceSchema.gen";
import { errorSchema } from "./errorSchema.gen";
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
export const createWorkspace400Schema = z.lazy(() => errorSchema);
export type CreateWorkspace400Schema = z.infer<typeof createWorkspace400Schema>;
/**
 * @description Unauthorized
 */
export const createWorkspace401Schema = z.lazy(() => errorSchema);
export type CreateWorkspace401Schema = z.infer<typeof createWorkspace401Schema>;
/**
 * @description Not found
 */
export const createWorkspace404Schema = z.lazy(() => errorSchema);
export type CreateWorkspace404Schema = z.infer<typeof createWorkspace404Schema>;
/**
 * @description Validation error
 */
export const createWorkspace422Schema = z.lazy(() => errorSchema);
export type CreateWorkspace422Schema = z.infer<typeof createWorkspace422Schema>;
/**
 * @description Rate limit exceeded
 */
export const createWorkspace429Schema = z.lazy(() => errorSchema);
export type CreateWorkspace429Schema = z.infer<typeof createWorkspace429Schema>;
/**
 * @description Internal server error
 */
export const createWorkspace500Schema = z.lazy(() => errorSchema);
export type CreateWorkspace500Schema = z.infer<typeof createWorkspace500Schema>;
/**
 * @description Service unavailable
 */
export const createWorkspace503Schema = z.lazy(() => errorSchema);
export type CreateWorkspace503Schema = z.infer<typeof createWorkspace503Schema>;

 export const createWorkspaceMutationRequestSchema = z.lazy(() => workspaceCreateSchema);
export type CreateWorkspaceMutationRequestSchema = z.infer<typeof createWorkspaceMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createWorkspaceMutationResponseSchema = z.lazy(() => workspaceSchema);
export type CreateWorkspaceMutationResponseSchema = z.infer<typeof createWorkspaceMutationResponseSchema>;
