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


export const getUserQuotaPathParamsSchema = z.object({ "username": z.string() });
export type GetUserQuotaPathParamsSchema = z.infer<typeof getUserQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getUserQuota200Schema = z.lazy(() => userQuotaSchema);
export type GetUserQuota200Schema = z.infer<typeof getUserQuota200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getUserQuota422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetUserQuota422Schema = z.infer<typeof getUserQuota422Schema>;
/**
 * @description Successful Response
 */
export const getUserQuotaQueryResponseSchema = z.lazy(() => userQuotaSchema);
export type GetUserQuotaQueryResponseSchema = z.infer<typeof getUserQuotaQueryResponseSchema>;