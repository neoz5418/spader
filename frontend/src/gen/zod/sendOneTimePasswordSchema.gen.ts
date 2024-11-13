import { z } from "@/utils/zod.ts";
import { sendOneTimePasswordResponseSchema } from "./sendOneTimePasswordResponseSchema.gen";
import { errorSchema } from "./errorSchema.gen";
import { sendOneTimePasswordRequestSchema } from "./sendOneTimePasswordRequestSchema.gen";

 /**
 * @description Successful Response
 */
export const sendOneTimePassword201Schema = z.lazy(() => sendOneTimePasswordResponseSchema);
export type SendOneTimePassword201Schema = z.infer<typeof sendOneTimePassword201Schema>;
/**
 * @description Request error
 */
export const sendOneTimePassword400Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword400Schema = z.infer<typeof sendOneTimePassword400Schema>;
/**
 * @description Unauthorized
 */
export const sendOneTimePassword401Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword401Schema = z.infer<typeof sendOneTimePassword401Schema>;
/**
 * @description Not found
 */
export const sendOneTimePassword404Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword404Schema = z.infer<typeof sendOneTimePassword404Schema>;
/**
 * @description Validation error
 */
export const sendOneTimePassword422Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword422Schema = z.infer<typeof sendOneTimePassword422Schema>;
/**
 * @description Rate limit exceeded
 */
export const sendOneTimePassword429Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword429Schema = z.infer<typeof sendOneTimePassword429Schema>;
/**
 * @description Internal server error
 */
export const sendOneTimePassword500Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword500Schema = z.infer<typeof sendOneTimePassword500Schema>;
/**
 * @description Service unavailable
 */
export const sendOneTimePassword503Schema = z.lazy(() => errorSchema);
export type SendOneTimePassword503Schema = z.infer<typeof sendOneTimePassword503Schema>;

 export const sendOneTimePasswordMutationRequestSchema = z.lazy(() => sendOneTimePasswordRequestSchema);
export type SendOneTimePasswordMutationRequestSchema = z.infer<typeof sendOneTimePasswordMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const sendOneTimePasswordMutationResponseSchema = z.lazy(() => sendOneTimePasswordResponseSchema);
export type SendOneTimePasswordMutationResponseSchema = z.infer<typeof sendOneTimePasswordMutationResponseSchema>;