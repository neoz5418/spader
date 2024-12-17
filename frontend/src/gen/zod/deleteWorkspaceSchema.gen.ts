import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const deleteWorkspacePathParamsSchema = z.object({ "workspace": z.string() });
export type DeleteWorkspacePathParamsSchema = z.infer<typeof deleteWorkspacePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteWorkspace204Schema = z.any();
export type DeleteWorkspace204Schema = z.infer<typeof deleteWorkspace204Schema>;
/**
 * @description Request error
 */
export const deleteWorkspace400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type DeleteWorkspace400Schema = z.infer<typeof deleteWorkspace400Schema>;
/**
 * @description Unauthorized
 */
export const deleteWorkspace401Schema = z.lazy(() => errorUnauthorizedSchema);
export type DeleteWorkspace401Schema = z.infer<typeof deleteWorkspace401Schema>;
/**
 * @description Not found
 */
export const deleteWorkspace404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type DeleteWorkspace404Schema = z.infer<typeof deleteWorkspace404Schema>;
/**
 * @description Resource conflict
 */
export const deleteWorkspace409Schema = z.lazy(() => errorResourceConflictSchema);
export type DeleteWorkspace409Schema = z.infer<typeof deleteWorkspace409Schema>;
/**
 * @description Precondition failed
 */
export const deleteWorkspace412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type DeleteWorkspace412Schema = z.infer<typeof deleteWorkspace412Schema>;
/**
 * @description Validation error
 */
export const deleteWorkspace422Schema = z.lazy(() => errorValidationFailedSchema);
export type DeleteWorkspace422Schema = z.infer<typeof deleteWorkspace422Schema>;
/**
 * @description Internal server error
 */
export const deleteWorkspace500Schema = z.lazy(() => errorInternalSchema);
export type DeleteWorkspace500Schema = z.infer<typeof deleteWorkspace500Schema>;

 export const deleteWorkspaceMutationResponseSchema = z.any();
export type DeleteWorkspaceMutationResponseSchema = z.infer<typeof deleteWorkspaceMutationResponseSchema>;
