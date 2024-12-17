import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const updateUserQuotaPathParamsSchema = z.object({ "username": z.string() });
export type UpdateUserQuotaPathParamsSchema = z.infer<typeof updateUserQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const updateUserQuota200Schema = z.lazy(() => userQuotaSchema);
export type UpdateUserQuota200Schema = z.infer<typeof updateUserQuota200Schema>;
/**
 * @description Request error
 */
export const updateUserQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type UpdateUserQuota400Schema = z.infer<typeof updateUserQuota400Schema>;
/**
 * @description Unauthorized
 */
export const updateUserQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type UpdateUserQuota401Schema = z.infer<typeof updateUserQuota401Schema>;
/**
 * @description Not found
 */
export const updateUserQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type UpdateUserQuota404Schema = z.infer<typeof updateUserQuota404Schema>;
/**
 * @description Resource conflict
 */
export const updateUserQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type UpdateUserQuota409Schema = z.infer<typeof updateUserQuota409Schema>;
/**
 * @description Precondition failed
 */
export const updateUserQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type UpdateUserQuota412Schema = z.infer<typeof updateUserQuota412Schema>;
/**
 * @description Validation error
 */
export const updateUserQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type UpdateUserQuota422Schema = z.infer<typeof updateUserQuota422Schema>;
/**
 * @description Internal server error
 */
export const updateUserQuota500Schema = z.lazy(() => errorInternalSchema);
export type UpdateUserQuota500Schema = z.infer<typeof updateUserQuota500Schema>;
/**
 * @description Successful Response
 */
export const updateUserQuotaMutationResponseSchema = z.lazy(() => userQuotaSchema);
export type UpdateUserQuotaMutationResponseSchema = z.infer<typeof updateUserQuotaMutationResponseSchema>;
