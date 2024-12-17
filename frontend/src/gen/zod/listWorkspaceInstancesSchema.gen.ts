import { z } from "@/utils/zod.ts";
import { listInstancesSortOptionsSchema } from "./listInstancesSortOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListInstancePublicSchema } from "./paginatedListInstancePublicSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
 * @description Request error
 */
export const listWorkspaceInstances400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListWorkspaceInstances400Schema = z.infer<typeof listWorkspaceInstances400Schema>;
/**
 * @description Unauthorized
 */
export const listWorkspaceInstances401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListWorkspaceInstances401Schema = z.infer<typeof listWorkspaceInstances401Schema>;
/**
 * @description Not found
 */
export const listWorkspaceInstances404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListWorkspaceInstances404Schema = z.infer<typeof listWorkspaceInstances404Schema>;
/**
 * @description Resource conflict
 */
export const listWorkspaceInstances409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListWorkspaceInstances409Schema = z.infer<typeof listWorkspaceInstances409Schema>;
/**
 * @description Precondition failed
 */
export const listWorkspaceInstances412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListWorkspaceInstances412Schema = z.infer<typeof listWorkspaceInstances412Schema>;
/**
 * @description Validation error
 */
export const listWorkspaceInstances422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListWorkspaceInstances422Schema = z.infer<typeof listWorkspaceInstances422Schema>;
/**
 * @description Internal server error
 */
export const listWorkspaceInstances500Schema = z.lazy(() => errorInternalSchema);
export type ListWorkspaceInstances500Schema = z.infer<typeof listWorkspaceInstances500Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceInstancesQueryResponseSchema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListWorkspaceInstancesQueryResponseSchema = z.infer<typeof listWorkspaceInstancesQueryResponseSchema>;
