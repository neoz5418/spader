import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypePublicSchema } from "./paginatedListGpuTypePublicSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listWorkspaceGpuTypesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceGpuTypesPathParamsSchema = z.infer<typeof listWorkspaceGpuTypesPathParamsSchema>;

 export const listWorkspaceGpuTypesQueryParamsSchema = z.object({ "zone": z.union([z.string(), z.null()]).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceGpuTypesQueryParamsSchema = z.infer<typeof listWorkspaceGpuTypesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceGpuTypes200Schema = z.lazy(() => paginatedListGpuTypePublicSchema);
export type ListWorkspaceGpuTypes200Schema = z.infer<typeof listWorkspaceGpuTypes200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceGpuTypes422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceGpuTypes422Schema = z.infer<typeof listWorkspaceGpuTypes422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceGpuTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypePublicSchema);
export type ListWorkspaceGpuTypesQueryResponseSchema = z.infer<typeof listWorkspaceGpuTypesQueryResponseSchema>;