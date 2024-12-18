import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypeSchema } from "./paginatedListGpuTypeSchema.gen";
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
 * @description Unprocessable Entity
 */
export const listGpuTypes422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListGpuTypes422Schema = z.infer<typeof listGpuTypes422Schema>;
/**
 * @description Successful Response
 */
export const listGpuTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypeSchema);
export type ListGpuTypesQueryResponseSchema = z.infer<typeof listGpuTypesQueryResponseSchema>;
