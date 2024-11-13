import { z } from "@/utils/zod.ts";
import { errorSchema } from "./errorSchema.gen";
import { bodyTokenApisOidcV1TokenPostSchema } from "./bodyTokenApisOidcV1TokenPostSchema.gen";


export const tokenSchema = z.object({ "access_token": z.string(), "refresh_token": z.string(), "expires_in": z.number().int(), "token_type": z.string(), "scope": z.string() });
export type TokenSchema = z.infer<typeof tokenSchema>;

 /**
 * @description Successful Response
 */
export const token200Schema = z.lazy(() => tokenSchema);
export type Token200Schema = z.infer<typeof token200Schema>;
/**
 * @description Request error
 */
export const token400Schema = z.lazy(() => errorSchema);
export type Token400Schema = z.infer<typeof token400Schema>;
/**
 * @description Unauthorized
 */
export const token401Schema = z.lazy(() => errorSchema);
export type Token401Schema = z.infer<typeof token401Schema>;
/**
 * @description Not found
 */
export const token404Schema = z.lazy(() => errorSchema);
export type Token404Schema = z.infer<typeof token404Schema>;
/**
 * @description Validation error
 */
export const token422Schema = z.lazy(() => errorSchema);
export type Token422Schema = z.infer<typeof token422Schema>;
/**
 * @description Rate limit exceeded
 */
export const token429Schema = z.lazy(() => errorSchema);
export type Token429Schema = z.infer<typeof token429Schema>;
/**
 * @description Internal server error
 */
export const token500Schema = z.lazy(() => errorSchema);
export type Token500Schema = z.infer<typeof token500Schema>;
/**
 * @description Service unavailable
 */
export const token503Schema = z.lazy(() => errorSchema);
export type Token503Schema = z.infer<typeof token503Schema>;

 export const tokenMutationRequestSchema = z.lazy(() => bodyTokenApisOidcV1TokenPostSchema);
export type TokenMutationRequestSchema = z.infer<typeof tokenMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const tokenMutationResponseSchema = z.lazy(() => tokenSchema);
export type TokenMutationResponseSchema = z.infer<typeof tokenMutationResponseSchema>;