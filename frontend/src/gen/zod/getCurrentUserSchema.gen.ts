import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
import { errorSchema } from "./errorSchema.gen";

 /**
 * @description Successful Response
 */
export const getCurrentUser200Schema = z.lazy(() => userSchema);
export type GetCurrentUser200Schema = z.infer<typeof getCurrentUser200Schema>;
/**
 * @description Request error
 */
export const getCurrentUser400Schema = z.lazy(() => errorSchema);
export type GetCurrentUser400Schema = z.infer<typeof getCurrentUser400Schema>;
/**
 * @description Unauthorized
 */
export const getCurrentUser401Schema = z.lazy(() => errorSchema);
export type GetCurrentUser401Schema = z.infer<typeof getCurrentUser401Schema>;
/**
 * @description Not found
 */
export const getCurrentUser404Schema = z.lazy(() => errorSchema);
export type GetCurrentUser404Schema = z.infer<typeof getCurrentUser404Schema>;
/**
 * @description Validation error
 */
export const getCurrentUser422Schema = z.lazy(() => errorSchema);
export type GetCurrentUser422Schema = z.infer<typeof getCurrentUser422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getCurrentUser429Schema = z.lazy(() => errorSchema);
export type GetCurrentUser429Schema = z.infer<typeof getCurrentUser429Schema>;
/**
 * @description Internal server error
 */
export const getCurrentUser500Schema = z.lazy(() => errorSchema);
export type GetCurrentUser500Schema = z.infer<typeof getCurrentUser500Schema>;
/**
 * @description Service unavailable
 */
export const getCurrentUser503Schema = z.lazy(() => errorSchema);
export type GetCurrentUser503Schema = z.infer<typeof getCurrentUser503Schema>;
/**
 * @description Successful Response
 */
export const getCurrentUserQueryResponseSchema = z.lazy(() => userSchema);
export type GetCurrentUserQueryResponseSchema = z.infer<typeof getCurrentUserQueryResponseSchema>;
