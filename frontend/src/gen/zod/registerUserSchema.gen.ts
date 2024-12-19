import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
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
import { registerUserRequestSchema } from "./registerUserRequestSchema.gen";

 /**
 * @description Successful Response
 */
export const registerUser200Schema = z.lazy(() => userSchema);
export type RegisterUser200Schema = z.infer<typeof registerUser200Schema>;
/**
 * @description Unprocessable Entity
 */
export const registerUser422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type RegisterUser422Schema = z.infer<typeof registerUser422Schema>;

 export const registerUserMutationRequestSchema = z.lazy(() => registerUserRequestSchema);
export type RegisterUserMutationRequestSchema = z.infer<typeof registerUserMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const registerUserMutationResponseSchema = z.lazy(() => userSchema);
export type RegisterUserMutationResponseSchema = z.infer<typeof registerUserMutationResponseSchema>;