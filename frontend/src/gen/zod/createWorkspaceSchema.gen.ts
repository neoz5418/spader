import { z } from "@/utils/zod.ts";
import { workspaceSchema } from "./workspaceSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { workspaceCreateSchema } from "./workspaceCreateSchema.gen";


export const createWorkspacePathParamsSchema = z.object({ "username": z.string() });
export type CreateWorkspacePathParamsSchema = z.infer<typeof createWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createWorkspace201Schema = z.lazy(() => workspaceSchema);
export type CreateWorkspace201Schema = z.infer<typeof createWorkspace201Schema>;
/**
 * @description Unprocessable Entity
 */
export const createWorkspace422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateWorkspace422Schema = z.infer<typeof createWorkspace422Schema>;

 export const createWorkspaceMutationRequestSchema = z.lazy(() => workspaceCreateSchema);
export type CreateWorkspaceMutationRequestSchema = z.infer<typeof createWorkspaceMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createWorkspaceMutationResponseSchema = z.lazy(() => workspaceSchema);
export type CreateWorkspaceMutationResponseSchema = z.infer<typeof createWorkspaceMutationResponseSchema>;