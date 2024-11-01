import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getUserPathParamsSchema = z.object({ "username": z.string() });
export type GetUserPathParamsSchema = z.infer<typeof getUserPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getUser200Schema = z.lazy(() => userSchema);
export type GetUser200Schema = z.infer<typeof getUser200Schema>;
/**
 * @description Request error
 */
export const getUser400Schema = z.lazy(() => errorSchema);
export type GetUser400Schema = z.infer<typeof getUser400Schema>;
/**
 * @description Unauthorized
 */
export const getUser401Schema = z.lazy(() => errorSchema);
export type GetUser401Schema = z.infer<typeof getUser401Schema>;
/**
 * @description Not found
 */
export const getUser404Schema = z.lazy(() => errorSchema);
export type GetUser404Schema = z.infer<typeof getUser404Schema>;
/**
 * @description Validation error
 */
export const getUser422Schema = z.lazy(() => errorSchema);
export type GetUser422Schema = z.infer<typeof getUser422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getUser429Schema = z.lazy(() => errorSchema);
export type GetUser429Schema = z.infer<typeof getUser429Schema>;
/**
 * @description Internal server error
 */
export const getUser500Schema = z.lazy(() => errorSchema);
export type GetUser500Schema = z.infer<typeof getUser500Schema>;
/**
 * @description Service unavailable
 */
export const getUser503Schema = z.lazy(() => errorSchema);
export type GetUser503Schema = z.infer<typeof getUser503Schema>;
/**
 * @description Successful Response
 */
export const getUserQueryResponseSchema = z.lazy(() => userSchema);
export type GetUserQueryResponseSchema = z.infer<typeof getUserQueryResponseSchema>;