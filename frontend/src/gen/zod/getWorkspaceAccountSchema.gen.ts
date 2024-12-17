import { z } from "@/utils/zod.ts";
import { workspaceAccountSchema } from "./workspaceAccountSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getWorkspaceAccountPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceAccountPathParamsSchema = z.infer<typeof getWorkspaceAccountPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccount200Schema = z.lazy(() => workspaceAccountSchema);
export type GetWorkspaceAccount200Schema = z.infer<typeof getWorkspaceAccount200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceAccount400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceAccount400Schema = z.infer<typeof getWorkspaceAccount400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceAccount401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceAccount401Schema = z.infer<typeof getWorkspaceAccount401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceAccount404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceAccount404Schema = z.infer<typeof getWorkspaceAccount404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceAccount409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceAccount409Schema = z.infer<typeof getWorkspaceAccount409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceAccount412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceAccount412Schema = z.infer<typeof getWorkspaceAccount412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceAccount422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceAccount422Schema = z.infer<typeof getWorkspaceAccount422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceAccount500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceAccount500Schema = z.infer<typeof getWorkspaceAccount500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountQueryResponseSchema = z.lazy(() => workspaceAccountSchema);
export type GetWorkspaceAccountQueryResponseSchema = z.infer<typeof getWorkspaceAccountQueryResponseSchema>;
