import { z } from "@/utils/zod.ts";
import { paginatedListGpuTypePublicSchema } from "./paginatedListGpuTypePublicSchema.gen";
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


export const listAcceleratorTypesQueryParamsSchema = z.object({ "zone": z.union([z.string(), z.null()]), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() });
export type ListAcceleratorTypesQueryParamsSchema = z.infer<typeof listAcceleratorTypesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listAcceleratorTypes200Schema = z.lazy(() => paginatedListGpuTypePublicSchema);
export type ListAcceleratorTypes200Schema = z.infer<typeof listAcceleratorTypes200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listAcceleratorTypes422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListAcceleratorTypes422Schema = z.infer<typeof listAcceleratorTypes422Schema>;
/**
 * @description Successful Response
 */
export const listAcceleratorTypesQueryResponseSchema = z.lazy(() => paginatedListGpuTypePublicSchema);
export type ListAcceleratorTypesQueryResponseSchema = z.infer<typeof listAcceleratorTypesQueryResponseSchema>;