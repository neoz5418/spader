import { z } from "@/utils/zod.ts";
import { listInstancesSortOptionsSchema } from "./listInstancesSortOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListInstancePublicSchema } from "./paginatedListInstancePublicSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listInstancesQueryParamsSchema = z.object({ "search": z.string().optional(), "sort": z.lazy(() => listInstancesSortOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "zone": z.union([z.string(), z.null()]).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListInstancesQueryParamsSchema = z.infer<typeof listInstancesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listInstances200Schema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListInstances200Schema = z.infer<typeof listInstances200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listInstances422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListInstances422Schema = z.infer<typeof listInstances422Schema>;
/**
 * @description Successful Response
 */
export const listInstancesQueryResponseSchema = z.lazy(() => paginatedListInstancePublicSchema);
export type ListInstancesQueryResponseSchema = z.infer<typeof listInstancesQueryResponseSchema>;