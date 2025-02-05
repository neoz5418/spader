import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
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


export const updateUserQuotaPathParamsSchema = z.object({ "username": z.string() });
export type UpdateUserQuotaPathParamsSchema = z.infer<typeof updateUserQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const updateUserQuota200Schema = z.lazy(() => userQuotaSchema);
export type UpdateUserQuota200Schema = z.infer<typeof updateUserQuota200Schema>;
/**
 * @description Unprocessable Entity
 */
export const updateUserQuota422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type UpdateUserQuota422Schema = z.infer<typeof updateUserQuota422Schema>;
/**
 * @description Successful Response
 */
export const updateUserQuotaMutationResponseSchema = z.lazy(() => userQuotaSchema);
export type UpdateUserQuotaMutationResponseSchema = z.infer<typeof updateUserQuotaMutationResponseSchema>;