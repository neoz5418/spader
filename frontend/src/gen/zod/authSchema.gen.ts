import { z } from "@/utils/zod.ts";
import { tokenSchema } from "./tokenSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { bodyAuthApisOidcV1AuthPostSchema } from "./bodyAuthApisOidcV1AuthPostSchema.gen";

 /**
 * @description Successful Response
 */
export const auth200Schema = z.lazy(() => tokenSchema);
export type Auth200Schema = z.infer<typeof auth200Schema>;
/**
 * @description Request error
 */
export const auth400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type Auth400Schema = z.infer<typeof auth400Schema>;
/**
 * @description Unauthorized
 */
export const auth401Schema = z.lazy(() => errorUnauthorizedSchema);
export type Auth401Schema = z.infer<typeof auth401Schema>;
/**
 * @description Not found
 */
export const auth404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type Auth404Schema = z.infer<typeof auth404Schema>;
/**
 * @description Resource conflict
 */
export const auth409Schema = z.lazy(() => errorResourceConflictSchema);
export type Auth409Schema = z.infer<typeof auth409Schema>;
/**
 * @description Precondition failed
 */
export const auth412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type Auth412Schema = z.infer<typeof auth412Schema>;
/**
 * @description Validation error
 */
export const auth422Schema = z.lazy(() => errorValidationFailedSchema);
export type Auth422Schema = z.infer<typeof auth422Schema>;
/**
 * @description Internal server error
 */
export const auth500Schema = z.lazy(() => errorInternalSchema);
export type Auth500Schema = z.infer<typeof auth500Schema>;

 export const authMutationRequestSchema = z.lazy(() => bodyAuthApisOidcV1AuthPostSchema);
export type AuthMutationRequestSchema = z.infer<typeof authMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const authMutationResponseSchema = z.lazy(() => tokenSchema);
export type AuthMutationResponseSchema = z.infer<typeof authMutationResponseSchema>;
