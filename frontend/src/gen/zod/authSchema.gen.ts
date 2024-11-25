import { z } from "@/utils/zod.ts";
import { tokenSchema } from "./tokenSchema.gen";
import { errorSchema } from "./errorSchema.gen";
import { bodyAuthApisOidcV1AuthPostSchema } from "./bodyAuthApisOidcV1AuthPostSchema.gen";

 /**
 * @description Successful Response
 */
export const auth200Schema = z.lazy(() => tokenSchema);
export type Auth200Schema = z.infer<typeof auth200Schema>;
/**
 * @description Request error
 */
export const auth400Schema = z.lazy(() => errorSchema);
export type Auth400Schema = z.infer<typeof auth400Schema>;
/**
 * @description Unauthorized
 */
export const auth401Schema = z.lazy(() => errorSchema);
export type Auth401Schema = z.infer<typeof auth401Schema>;
/**
 * @description Not found
 */
export const auth404Schema = z.lazy(() => errorSchema);
export type Auth404Schema = z.infer<typeof auth404Schema>;
/**
 * @description Validation error
 */
export const auth422Schema = z.lazy(() => errorSchema);
export type Auth422Schema = z.infer<typeof auth422Schema>;
/**
 * @description Rate limit exceeded
 */
export const auth429Schema = z.lazy(() => errorSchema);
export type Auth429Schema = z.infer<typeof auth429Schema>;
/**
 * @description Internal server error
 */
export const auth500Schema = z.lazy(() => errorSchema);
export type Auth500Schema = z.infer<typeof auth500Schema>;
/**
 * @description Service unavailable
 */
export const auth503Schema = z.lazy(() => errorSchema);
export type Auth503Schema = z.infer<typeof auth503Schema>;

 export const authMutationRequestSchema = z.lazy(() => bodyAuthApisOidcV1AuthPostSchema);
export type AuthMutationRequestSchema = z.infer<typeof authMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const authMutationResponseSchema = z.lazy(() => tokenSchema);
export type AuthMutationResponseSchema = z.infer<typeof authMutationResponseSchema>;