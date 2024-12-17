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


export const listInstancesQueryParamsSchema = z.object({ "zone": z.string().optional(), "search": z.string().optional(), "sort": z.lazy(() => listInstancesSortOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListInstancesQueryParamsSchema = z.infer<typeof listInstancesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listInstances200Schema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListInstances200Schema = z.infer<typeof listInstances200Schema>;
/**
 * @description Request error
 */
export const listInstances400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListInstances400Schema = z.infer<typeof listInstances400Schema>;
/**
 * @description Unauthorized
 */
export const listInstances401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListInstances401Schema = z.infer<typeof listInstances401Schema>;
/**
 * @description Not found
 */
export const listInstances404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListInstances404Schema = z.infer<typeof listInstances404Schema>;
/**
 * @description Resource conflict
 */
export const listInstances409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListInstances409Schema = z.infer<typeof listInstances409Schema>;
/**
 * @description Precondition failed
 */
export const listInstances412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListInstances412Schema = z.infer<typeof listInstances412Schema>;
/**
 * @description Validation error
 */
export const listInstances422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListInstances422Schema = z.infer<typeof listInstances422Schema>;
/**
 * @description Internal server error
 */
export const listInstances500Schema = z.lazy(() => errorInternalSchema);
export type ListInstances500Schema = z.infer<typeof listInstances500Schema>;
/**
 * @description Successful Response
 */
export const listInstancesQueryResponseSchema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListInstancesQueryResponseSchema = z.infer<typeof listInstancesQueryResponseSchema>;
