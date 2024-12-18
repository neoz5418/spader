import { z } from "@/utils/zod.ts";
import { cursorListOperationSchema } from "./cursorListOperationSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


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
 * @description Unprocessable Entity
 */
export const listWorkspaceOperations422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceOperations422Schema = z.infer<typeof listWorkspaceOperations422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceOperationsQueryResponseSchema = z.lazy(() => cursorListOperationSchema);
export type ListWorkspaceOperationsQueryResponseSchema = z.infer<typeof listWorkspaceOperationsQueryResponseSchema>;
