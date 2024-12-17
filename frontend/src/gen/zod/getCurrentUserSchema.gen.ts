import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";

 /**
 * @description Successful Response
 */
export const getCurrentUser200Schema = z.lazy(() => userSchema);
export type GetCurrentUser200Schema = z.infer<typeof getCurrentUser200Schema>;
/**
 * @description Request error
 */
export const getCurrentUser400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetCurrentUser400Schema = z.infer<typeof getCurrentUser400Schema>;
/**
 * @description Unauthorized
 */
export const getCurrentUser401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetCurrentUser401Schema = z.infer<typeof getCurrentUser401Schema>;
/**
 * @description Not found
 */
export const getCurrentUser404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetCurrentUser404Schema = z.infer<typeof getCurrentUser404Schema>;
/**
 * @description Resource conflict
 */
export const getCurrentUser409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetCurrentUser409Schema = z.infer<typeof getCurrentUser409Schema>;
/**
 * @description Precondition failed
 */
export const getCurrentUser412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetCurrentUser412Schema = z.infer<typeof getCurrentUser412Schema>;
/**
 * @description Validation error
 */
export const getCurrentUser422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetCurrentUser422Schema = z.infer<typeof getCurrentUser422Schema>;
/**
 * @description Internal server error
 */
export const getCurrentUser500Schema = z.lazy(() => errorInternalSchema);
export type GetCurrentUser500Schema = z.infer<typeof getCurrentUser500Schema>;
/**
 * @description Successful Response
 */
export const getCurrentUserQueryResponseSchema = z.lazy(() => userSchema);
export type GetCurrentUserQueryResponseSchema = z.infer<typeof getCurrentUserQueryResponseSchema>;
