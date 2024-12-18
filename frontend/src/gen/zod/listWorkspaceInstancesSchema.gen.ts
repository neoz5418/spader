import { z } from "@/utils/zod.ts";
import { listInstancesSortOptionsSchema } from "./listInstancesSortOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListInstancePublicSchema } from "./paginatedListInstancePublicSchema.gen";
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


export const listWorkspaceInstancesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceInstancesPathParamsSchema = z.infer<typeof listWorkspaceInstancesPathParamsSchema>;

 export const listWorkspaceInstancesQueryParamsSchema = z.object({ "zone": z.string().optional(), "search": z.string().optional(), "status": z.string().optional(), "sort": z.lazy(() => listInstancesSortOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceInstancesQueryParamsSchema = z.infer<typeof listWorkspaceInstancesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceInstances200Schema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListWorkspaceInstances200Schema = z.infer<typeof listWorkspaceInstances200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceInstances422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceInstances422Schema = z.infer<typeof listWorkspaceInstances422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceInstancesQueryResponseSchema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListWorkspaceInstancesQueryResponseSchema = z.infer<typeof listWorkspaceInstancesQueryResponseSchema>;
