import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const updateUserQuota400Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota400Schema = z.infer<typeof updateUserQuota400Schema>;
/**
 * @description Unauthorized
 */
export const updateUserQuota401Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota401Schema = z.infer<typeof updateUserQuota401Schema>;
/**
 * @description Not found
 */
export const updateUserQuota404Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota404Schema = z.infer<typeof updateUserQuota404Schema>;
/**
 * @description Validation error
 */
export const updateUserQuota422Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota422Schema = z.infer<typeof updateUserQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const updateUserQuota429Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota429Schema = z.infer<typeof updateUserQuota429Schema>;
/**
 * @description Internal server error
 */
export const updateUserQuota500Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota500Schema = z.infer<typeof updateUserQuota500Schema>;
/**
 * @description Service unavailable
 */
export const updateUserQuota503Schema = z.lazy(() => errorSchema);
export type UpdateUserQuota503Schema = z.infer<typeof updateUserQuota503Schema>;
/**
 * @description Successful Response
 */
export const updateUserQuotaMutationResponseSchema = z.lazy(() => userQuotaSchema);
export type UpdateUserQuotaMutationResponseSchema = z.infer<typeof updateUserQuotaMutationResponseSchema>;
