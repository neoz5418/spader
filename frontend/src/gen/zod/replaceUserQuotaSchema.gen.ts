import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const replaceUserQuotaPathParamsSchema = z.object({ "username": z.string() });
export type ReplaceUserQuotaPathParamsSchema = z.infer<typeof replaceUserQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const replaceUserQuota200Schema = z.lazy(() => userQuotaSchema);
export type ReplaceUserQuota200Schema = z.infer<typeof replaceUserQuota200Schema>;
/**
 * @description Unprocessable Entity
 */
export const replaceUserQuota422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ReplaceUserQuota422Schema = z.infer<typeof replaceUserQuota422Schema>;
/**
 * @description Successful Response
 */
export const replaceUserQuotaMutationResponseSchema = z.lazy(() => userQuotaSchema);
export type ReplaceUserQuotaMutationResponseSchema = z.infer<typeof replaceUserQuotaMutationResponseSchema>;