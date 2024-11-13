import { z } from "@/utils/zod.ts";
import { userQuotaSchema } from "./userQuotaSchema.gen";
import { errorSchema } from "./errorSchema.gen";


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
export const getUserQuota400Schema = z.lazy(() => errorSchema);
export type GetUserQuota400Schema = z.infer<typeof getUserQuota400Schema>;
/**
 * @description Unauthorized
 */
export const getUserQuota401Schema = z.lazy(() => errorSchema);
export type GetUserQuota401Schema = z.infer<typeof getUserQuota401Schema>;
/**
 * @description Not found
 */
export const getUserQuota404Schema = z.lazy(() => errorSchema);
export type GetUserQuota404Schema = z.infer<typeof getUserQuota404Schema>;
/**
 * @description Validation error
 */
export const getUserQuota422Schema = z.lazy(() => errorSchema);
export type GetUserQuota422Schema = z.infer<typeof getUserQuota422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getUserQuota429Schema = z.lazy(() => errorSchema);
export type GetUserQuota429Schema = z.infer<typeof getUserQuota429Schema>;
/**
 * @description Internal server error
 */
export const getUserQuota500Schema = z.lazy(() => errorSchema);
export type GetUserQuota500Schema = z.infer<typeof getUserQuota500Schema>;
/**
 * @description Service unavailable
 */
export const getUserQuota503Schema = z.lazy(() => errorSchema);
export type GetUserQuota503Schema = z.infer<typeof getUserQuota503Schema>;
/**
 * @description Successful Response
 */
export const getUserQuotaQueryResponseSchema = z.lazy(() => userQuotaSchema);
export type GetUserQuotaQueryResponseSchema = z.infer<typeof getUserQuotaQueryResponseSchema>;