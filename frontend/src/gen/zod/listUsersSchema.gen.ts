import { z } from "@/utils/zod.ts";
import { listUsersSortOptionsSchema } from "./listUsersSortOptionsSchema.gen";
import { directionSchema } from "./directionSchema.gen";
import { paginatedListUserSchema } from "./paginatedListUserSchema.gen";
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


export const listUsersQueryParamsSchema = z.object({ "sort": z.lazy(() => listUsersSortOptionsSchema).optional(), "direction": z.lazy(() => directionSchema).optional(), "phone_number": z.string().optional(), "display_name": z.string().optional(), "email": z.string().email().optional(), "name": z.string().optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListUsersQueryParamsSchema = z.infer<typeof listUsersQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listUsers200Schema = z.lazy(() => paginatedListUserSchema);
export type ListUsers200Schema = z.infer<typeof listUsers200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listUsers422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListUsers422Schema = z.infer<typeof listUsers422Schema>;
/**
 * @description Successful Response
 */
export const listUsersQueryResponseSchema = z.lazy(() => paginatedListUserSchema);
export type ListUsersQueryResponseSchema = z.infer<typeof listUsersQueryResponseSchema>;