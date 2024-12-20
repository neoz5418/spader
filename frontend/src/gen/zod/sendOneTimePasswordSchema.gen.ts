import { z } from "@/utils/zod.ts";
import { sendOneTimePasswordResponseSchema } from "./sendOneTimePasswordResponseSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { sendOneTimePasswordRequestSchema } from "./sendOneTimePasswordRequestSchema.gen";

 /**
 * @description Successful Response
 */
export const sendOneTimePassword201Schema = z.lazy(() => sendOneTimePasswordResponseSchema);
export type SendOneTimePassword201Schema = z.infer<typeof sendOneTimePassword201Schema>;
/**
 * @description Unprocessable Entity
 */
export const sendOneTimePassword422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type SendOneTimePassword422Schema = z.infer<typeof sendOneTimePassword422Schema>;

 export const sendOneTimePasswordMutationRequestSchema = z.lazy(() => sendOneTimePasswordRequestSchema);
export type SendOneTimePasswordMutationRequestSchema = z.infer<typeof sendOneTimePasswordMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const sendOneTimePasswordMutationResponseSchema = z.lazy(() => sendOneTimePasswordResponseSchema);
export type SendOneTimePasswordMutationResponseSchema = z.infer<typeof sendOneTimePasswordMutationResponseSchema>;