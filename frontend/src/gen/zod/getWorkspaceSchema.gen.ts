import { z } from "@/utils/zod.ts";
import { workspaceSchema } from "./workspaceSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getWorkspacePathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspacePathParamsSchema = z.infer<typeof getWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspace200Schema = z.lazy(() => workspaceSchema);
export type GetWorkspace200Schema = z.infer<typeof getWorkspace200Schema>;
/**
 * @description Request error
 */
export const getWorkspace400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspace400Schema = z.infer<typeof getWorkspace400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspace401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspace401Schema = z.infer<typeof getWorkspace401Schema>;
/**
 * @description Not found
 */
export const getWorkspace404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspace404Schema = z.infer<typeof getWorkspace404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspace409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspace409Schema = z.infer<typeof getWorkspace409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspace412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspace412Schema = z.infer<typeof getWorkspace412Schema>;
/**
 * @description Validation error
 */
export const getWorkspace422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspace422Schema = z.infer<typeof getWorkspace422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspace500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspace500Schema = z.infer<typeof getWorkspace500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceQueryResponseSchema = z.lazy(() => workspaceSchema);
export type GetWorkspaceQueryResponseSchema = z.infer<typeof getWorkspaceQueryResponseSchema>;
