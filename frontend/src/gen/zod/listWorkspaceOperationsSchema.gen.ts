import { z } from "@/utils/zod.ts";
import { cursorListOperationSchema } from "./cursorListOperationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listWorkspaceOperationsPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceOperationsPathParamsSchema = z.infer<typeof listWorkspaceOperationsPathParamsSchema>;

 export const listWorkspaceOperationsQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceOperationsQueryParamsSchema = z.infer<typeof listWorkspaceOperationsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceOperations200Schema = z.lazy(() => cursorListOperationSchema);
export type ListWorkspaceOperations200Schema = z.infer<typeof listWorkspaceOperations200Schema>;
/**
 * @description Request error
 */
export const listWorkspaceOperations400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceOperations400Schema = z.infer<typeof listWorkspaceOperations400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceOperations401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceOperations401Schema = z.infer<typeof listWorkspaceOperations401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceOperations404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceOperations404Schema = z.infer<typeof listWorkspaceOperations404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceOperations409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceOperations409Schema = z.infer<typeof listWorkspaceOperations409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceOperations412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceOperations412Schema = z.infer<typeof listWorkspaceOperations412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceOperations422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceOperations422Schema = z.infer<typeof listWorkspaceOperations422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceOperations500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceOperations500Schema = z.infer<typeof listWorkspaceOperations500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceOperationsQueryResponseSchema = z.lazy(() => cursorListOperationSchema);
export type ListWorkspaceOperationsQueryResponseSchema = z.infer<typeof listWorkspaceOperationsQueryResponseSchema>;
