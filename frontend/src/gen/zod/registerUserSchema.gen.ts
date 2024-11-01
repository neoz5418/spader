import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
import { errorSchema } from "./errorSchema.gen";
import { registerUserRequestSchema } from "./registerUserRequestSchema.gen";

 /**
 * @description Successful Response
 */
export const registerUser200Schema = z.lazy(() => userSchema);
export type RegisterUser200Schema = z.infer<typeof registerUser200Schema>;
/**
 * @description Request error
 */
export const registerUser400Schema = z.lazy(() => errorSchema);
export type RegisterUser400Schema = z.infer<typeof registerUser400Schema>;
/**
 * @description Unauthorized
 */
export const registerUser401Schema = z.lazy(() => errorSchema);
export type RegisterUser401Schema = z.infer<typeof registerUser401Schema>;
/**
 * @description Not found
 */
export const registerUser404Schema = z.lazy(() => errorSchema);
export type RegisterUser404Schema = z.infer<typeof registerUser404Schema>;
/**
 * @description Validation error
 */
export const registerUser422Schema = z.lazy(() => errorSchema);
export type RegisterUser422Schema = z.infer<typeof registerUser422Schema>;
/**
 * @description Rate limit exceeded
 */
export const registerUser429Schema = z.lazy(() => errorSchema);
export type RegisterUser429Schema = z.infer<typeof registerUser429Schema>;
/**
 * @description Internal server error
 */
export const registerUser500Schema = z.lazy(() => errorSchema);
export type RegisterUser500Schema = z.infer<typeof registerUser500Schema>;
/**
 * @description Service unavailable
 */
export const registerUser503Schema = z.lazy(() => errorSchema);
export type RegisterUser503Schema = z.infer<typeof registerUser503Schema>;

 export const registerUserMutationRequestSchema = z.lazy(() => registerUserRequestSchema);
export type RegisterUserMutationRequestSchema = z.infer<typeof registerUserMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const registerUserMutationResponseSchema = z.lazy(() => userSchema);
export type RegisterUserMutationResponseSchema = z.infer<typeof registerUserMutationResponseSchema>;