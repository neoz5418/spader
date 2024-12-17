import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getUserQuotaPathParamsSchema = z.object({ "username": z.string() });
export type GetUserQuotaPathParamsSchema = z.infer<typeof getUserQuotaPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getUserQuota200Schema = z.lazy(() => userQuotaSchema);
export type GetUserQuota200Schema = z.infer<typeof getUserQuota200Schema>;
/**
 * @description Request error
 */
export const getUserQuota400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetUserQuota400Schema = z.infer<typeof getUserQuota400Schema>;
/**
 * @description Unauthorized
 */
export const getUserQuota401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetUserQuota401Schema = z.infer<typeof getUserQuota401Schema>;
/**
 * @description Not found
 */
export const getUserQuota404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetUserQuota404Schema = z.infer<typeof getUserQuota404Schema>;
/**
 * @description Resource conflict
 */
export const getUserQuota409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetUserQuota409Schema = z.infer<typeof getUserQuota409Schema>;
/**
 * @description Precondition failed
 */
export const getUserQuota412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetUserQuota412Schema = z.infer<typeof getUserQuota412Schema>;
/**
 * @description Validation error
 */
export const getUserQuota422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetUserQuota422Schema = z.infer<typeof getUserQuota422Schema>;
/**
 * @description Internal server error
 */
export const getUserQuota500Schema = z.lazy(() => errorInternalSchema);
export type GetUserQuota500Schema = z.infer<typeof getUserQuota500Schema>;
/**
 * @description Successful Response
 */
export const getUserQuotaQueryResponseSchema = z.lazy(() => userQuotaSchema);
export type GetUserQuotaQueryResponseSchema = z.infer<typeof getUserQuotaQueryResponseSchema>;
