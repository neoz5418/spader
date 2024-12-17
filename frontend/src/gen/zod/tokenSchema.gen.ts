import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
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
export const token400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type Token400Schema = z.infer<typeof token400Schema>;
/**
 * @description Unauthorized
 */
export const token401Schema = z.lazy(() => errorUnauthorizedSchema);
export type Token401Schema = z.infer<typeof token401Schema>;
/**
 * @description Not found
 */
export const token404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type Token404Schema = z.infer<typeof token404Schema>;
/**
 * @description Resource conflict
 */
export const token409Schema = z.lazy(() => errorResourceConflictSchema);
export type Token409Schema = z.infer<typeof token409Schema>;
/**
 * @description Precondition failed
 */
export const token412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type Token412Schema = z.infer<typeof token412Schema>;
/**
 * @description Validation error
 */
export const token422Schema = z.lazy(() => errorValidationFailedSchema);
export type Token422Schema = z.infer<typeof token422Schema>;
/**
 * @description Internal server error
 */
export const token500Schema = z.lazy(() => errorInternalSchema);
export type Token500Schema = z.infer<typeof token500Schema>;

 export const tokenMutationRequestSchema = z.lazy(() => bodyTokenApisOidcV1TokenPostSchema);
export type TokenMutationRequestSchema = z.infer<typeof tokenMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const tokenMutationResponseSchema = z.lazy(() => tokenSchema);
export type TokenMutationResponseSchema = z.infer<typeof tokenMutationResponseSchema>;
