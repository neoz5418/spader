import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const replaceUserQuota400Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota400Schema = z.infer<typeof replaceUserQuota400Schema>;
/**
 * @description Unauthorized
 */
export const replaceUserQuota401Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota401Schema = z.infer<typeof replaceUserQuota401Schema>;
/**
 * @description Not found
 */
export const replaceUserQuota404Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota404Schema = z.infer<typeof replaceUserQuota404Schema>;
/**
 * @description Validation error
 */
export const replaceUserQuota422Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota422Schema = z.infer<typeof replaceUserQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const replaceUserQuota429Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota429Schema = z.infer<typeof replaceUserQuota429Schema>;
/**
 * @description Internal server error
 */
export const replaceUserQuota500Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota500Schema = z.infer<typeof replaceUserQuota500Schema>;
/**
 * @description Service unavailable
 */
export const replaceUserQuota503Schema = z.lazy(() => errorSchema);
export type ReplaceUserQuota503Schema = z.infer<typeof replaceUserQuota503Schema>;
/**
 * @description Successful Response
 */
export const replaceUserQuotaMutationResponseSchema = z.lazy(() => userQuotaSchema);
export type ReplaceUserQuotaMutationResponseSchema = z.infer<typeof replaceUserQuotaMutationResponseSchema>;
