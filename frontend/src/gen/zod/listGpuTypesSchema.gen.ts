import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypeSchema } from "./paginatedListGpuTypeSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listGpuTypesPathParamsSchema = z.object({ "zone": z.string() });
export type ListGpuTypesPathParamsSchema = z.infer<typeof listGpuTypesPathParamsSchema>;

 export const listGpuTypesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListGpuTypesQueryParamsSchema = z.infer<typeof listGpuTypesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listGpuTypes200Schema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListGpuTypes200Schema = z.infer<typeof listGpuTypes200Schema>;
/**
 * @description Request error
 */
export const listGpuTypes400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListGpuTypes400Schema = z.infer<typeof listGpuTypes400Schema>;
/**
 * @description Unauthorized
 */
export const listGpuTypes401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListGpuTypes401Schema = z.infer<typeof listGpuTypes401Schema>;
/**
 * @description Not found
 */
export const listGpuTypes404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListGpuTypes404Schema = z.infer<typeof listGpuTypes404Schema>;
/**
 * @description Resource conflict
 */
export const listGpuTypes409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListGpuTypes409Schema = z.infer<typeof listGpuTypes409Schema>;
/**
 * @description Precondition failed
 */
export const listGpuTypes412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListGpuTypes412Schema = z.infer<typeof listGpuTypes412Schema>;
/**
 * @description Validation error
 */
export const listGpuTypes422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListGpuTypes422Schema = z.infer<typeof listGpuTypes422Schema>;
/**
 * @description Internal server error
 */
export const listGpuTypes500Schema = z.lazy(() => errorInternalSchema);
export type ListGpuTypes500Schema = z.infer<typeof listGpuTypes500Schema>;
/**
 * @description Successful Response
 */
export const listGpuTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListGpuTypesQueryResponseSchema = z.infer<typeof listGpuTypesQueryResponseSchema>;
