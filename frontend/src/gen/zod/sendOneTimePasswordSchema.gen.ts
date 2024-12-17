import { z } from "@/utils/zod.ts";
import { sendOneTimePasswordResponseSchema } from "./sendOneTimePasswordResponseSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { sendOneTimePasswordRequestSchema } from "./sendOneTimePasswordRequestSchema.gen";

 /**
 * @description Successful Response
 */
export const sendOneTimePassword201Schema = z.lazy(() => sendOneTimePasswordResponseSchema);
export type SendOneTimePassword201Schema = z.infer<typeof sendOneTimePassword201Schema>;
/**
 * @description Request error
 */
export const sendOneTimePassword400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type SendOneTimePassword400Schema = z.infer<typeof sendOneTimePassword400Schema>;
/**
 * @description Unauthorized
 */
export const sendOneTimePassword401Schema = z.lazy(() => errorUnauthorizedSchema);
export type SendOneTimePassword401Schema = z.infer<typeof sendOneTimePassword401Schema>;
/**
 * @description Not found
 */
export const sendOneTimePassword404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type SendOneTimePassword404Schema = z.infer<typeof sendOneTimePassword404Schema>;
/**
 * @description Resource conflict
 */
export const sendOneTimePassword409Schema = z.lazy(() => errorResourceConflictSchema);
export type SendOneTimePassword409Schema = z.infer<typeof sendOneTimePassword409Schema>;
/**
 * @description Precondition failed
 */
export const sendOneTimePassword412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type SendOneTimePassword412Schema = z.infer<typeof sendOneTimePassword412Schema>;
/**
 * @description Validation error
 */
export const sendOneTimePassword422Schema = z.lazy(() => errorValidationFailedSchema);
export type SendOneTimePassword422Schema = z.infer<typeof sendOneTimePassword422Schema>;
/**
 * @description Internal server error
 */
export const sendOneTimePassword500Schema = z.lazy(() => errorInternalSchema);
export type SendOneTimePassword500Schema = z.infer<typeof sendOneTimePassword500Schema>;

 export const sendOneTimePasswordMutationRequestSchema = z.lazy(() => sendOneTimePasswordRequestSchema);
export type SendOneTimePasswordMutationRequestSchema = z.infer<typeof sendOneTimePasswordMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const sendOneTimePasswordMutationResponseSchema = z.lazy(() => sendOneTimePasswordResponseSchema);
export type SendOneTimePasswordMutationResponseSchema = z.infer<typeof sendOneTimePasswordMutationResponseSchema>;
