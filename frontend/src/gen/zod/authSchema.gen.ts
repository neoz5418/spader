import { z } from "@/utils/zod.ts";
import { tokenSchema } from "./tokenSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { bodyAuthApisOidcV1AuthPostSchema } from "./bodyAuthApisOidcV1AuthPostSchema.gen";

 /**
 * @description Successful Response
 */
export const auth200Schema = z.lazy(() => tokenSchema);
export type Auth200Schema = z.infer<typeof auth200Schema>;
/**
 * @description Unprocessable Entity
 */
export const auth422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type Auth422Schema = z.infer<typeof auth422Schema>;

 export const authMutationRequestSchema = z.lazy(() => bodyAuthApisOidcV1AuthPostSchema);
export type AuthMutationRequestSchema = z.infer<typeof authMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const authMutationResponseSchema = z.lazy(() => tokenSchema);
export type AuthMutationResponseSchema = z.infer<typeof authMutationResponseSchema>;