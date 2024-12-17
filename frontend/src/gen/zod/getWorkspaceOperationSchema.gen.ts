import { z } from "@/utils/zod.ts";
import { cursorListOperationSchema } from "./cursorListOperationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getWorkspaceOperationPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "uid": z.string().uuid() });
export type GetWorkspaceOperationPathParamsSchema = z.infer<typeof getWorkspaceOperationPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperation200Schema = z.lazy(() => cursorListOperationSchema);
export type GetWorkspaceOperation200Schema = z.infer<typeof getWorkspaceOperation200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceOperation400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceOperation400Schema = z.infer<typeof getWorkspaceOperation400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceOperation401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceOperation401Schema = z.infer<typeof getWorkspaceOperation401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceOperation404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceOperation404Schema = z.infer<typeof getWorkspaceOperation404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceOperation409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceOperation409Schema = z.infer<typeof getWorkspaceOperation409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceOperation412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceOperation412Schema = z.infer<typeof getWorkspaceOperation412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceOperation422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceOperation422Schema = z.infer<typeof getWorkspaceOperation422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceOperation500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceOperation500Schema = z.infer<typeof getWorkspaceOperation500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceOperationQueryResponseSchema = z.lazy(() => cursorListOperationSchema);
export type GetWorkspaceOperationQueryResponseSchema = z.infer<typeof getWorkspaceOperationQueryResponseSchema>;
