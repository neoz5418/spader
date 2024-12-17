import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const replaceUserQuotaPathParamsSchema = z.object({ "username": z.string() });
export type ReplaceUserQuotaPathParamsSchema = z.infer<typeof replaceUserQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const replaceUserQuota200Schema = z.lazy(() => userQuotaSchema);
export type ReplaceUserQuota200Schema = z.infer<typeof replaceUserQuota200Schema>;
/**
 * @description Request error
 */
export const replaceUserQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ReplaceUserQuota400Schema = z.infer<typeof replaceUserQuota400Schema>;
/**
 * @description Unauthorized
 */
export const replaceUserQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ReplaceUserQuota401Schema = z.infer<typeof replaceUserQuota401Schema>;
/**
 * @description Not found
 */
export const replaceUserQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ReplaceUserQuota404Schema = z.infer<typeof replaceUserQuota404Schema>;
/**
 * @description Resource conflict
 */
export const replaceUserQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type ReplaceUserQuota409Schema = z.infer<typeof replaceUserQuota409Schema>;
/**
 * @description Precondition failed
 */
export const replaceUserQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ReplaceUserQuota412Schema = z.infer<typeof replaceUserQuota412Schema>;
/**
 * @description Validation error
 */
export const replaceUserQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type ReplaceUserQuota422Schema = z.infer<typeof replaceUserQuota422Schema>;
/**
 * @description Internal server error
 */
export const replaceUserQuota500Schema = z.lazy(() => errorInternalSchema);
export type ReplaceUserQuota500Schema = z.infer<typeof replaceUserQuota500Schema>;
/**
 * @description Successful Response
 */
export const replaceUserQuotaMutationResponseSchema = z.lazy(() => userQuotaSchema);
export type ReplaceUserQuotaMutationResponseSchema = z.infer<typeof replaceUserQuotaMutationResponseSchema>;
