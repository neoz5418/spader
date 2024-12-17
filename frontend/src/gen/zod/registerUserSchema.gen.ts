import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { registerUserRequestSchema } from "./registerUserRequestSchema.gen";

 /**
 * @description Successful Response
 */
export const registerUser200Schema = z.lazy(() => userSchema);
export type RegisterUser200Schema = z.infer<typeof registerUser200Schema>;
/**
 * @description Request error
 */
export const registerUser400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type RegisterUser400Schema = z.infer<typeof registerUser400Schema>;
/**
 * @description Unauthorized
 */
export const registerUser401Schema = z.lazy(() => errorUnauthorizedSchema);
export type RegisterUser401Schema = z.infer<typeof registerUser401Schema>;
/**
 * @description Not found
 */
export const registerUser404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type RegisterUser404Schema = z.infer<typeof registerUser404Schema>;
/**
 * @description Resource conflict
 */
export const registerUser409Schema = z.lazy(() => errorResourceConflictSchema);
export type RegisterUser409Schema = z.infer<typeof registerUser409Schema>;
/**
 * @description Precondition failed
 */
export const registerUser412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type RegisterUser412Schema = z.infer<typeof registerUser412Schema>;
/**
 * @description Validation error
 */
export const registerUser422Schema = z.lazy(() => errorValidationFailedSchema);
export type RegisterUser422Schema = z.infer<typeof registerUser422Schema>;
/**
 * @description Internal server error
 */
export const registerUser500Schema = z.lazy(() => errorInternalSchema);
export type RegisterUser500Schema = z.infer<typeof registerUser500Schema>;

 export const registerUserMutationRequestSchema = z.lazy(() => registerUserRequestSchema);
export type RegisterUserMutationRequestSchema = z.infer<typeof registerUserMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const registerUserMutationResponseSchema = z.lazy(() => userSchema);
export type RegisterUserMutationResponseSchema = z.infer<typeof registerUserMutationResponseSchema>;
