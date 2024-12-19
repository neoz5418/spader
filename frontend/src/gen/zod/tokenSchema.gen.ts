import { z } from "@/utils/zod.ts";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { bodyTokenApisOidcV1TokenPostSchema } from "./bodyTokenApisOidcV1TokenPostSchema.gen";


export const tokenSchema = z.object({ "access_token": z.string(), "refresh_token": z.string(), "expires_in": z.number().int(), "token_type": z.string(), "scope": z.string() });
export type TokenSchema = z.infer<typeof tokenSchema>;

 /**
 * @description Successful Response
 */
export const token200Schema = z.lazy(() => tokenSchema);
export type Token200Schema = z.infer<typeof token200Schema>;
/**
 * @description Unprocessable Entity
 */
export const token422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type Token422Schema = z.infer<typeof token422Schema>;

 export const tokenMutationRequestSchema = z.lazy(() => bodyTokenApisOidcV1TokenPostSchema);
export type TokenMutationRequestSchema = z.infer<typeof tokenMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const tokenMutationResponseSchema = z.lazy(() => tokenSchema);
export type TokenMutationResponseSchema = z.infer<typeof tokenMutationResponseSchema>;