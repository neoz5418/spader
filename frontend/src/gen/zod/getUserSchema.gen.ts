import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getUserPathParamsSchema = z.object({ "username": z.string() });
export type GetUserPathParamsSchema = z.infer<typeof getUserPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getUser200Schema = z.lazy(() => userSchema);
export type GetUser200Schema = z.infer<typeof getUser200Schema>;
/**
 * @description Request error
 */
export const getUser400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetUser400Schema = z.infer<typeof getUser400Schema>;
/**
 * @description Unauthorized
 */
export const getUser401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetUser401Schema = z.infer<typeof getUser401Schema>;
/**
 * @description Not found
 */
export const getUser404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetUser404Schema = z.infer<typeof getUser404Schema>;
/**
 * @description Resource conflict
 */
export const getUser409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetUser409Schema = z.infer<typeof getUser409Schema>;
/**
 * @description Precondition failed
 */
export const getUser412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetUser412Schema = z.infer<typeof getUser412Schema>;
/**
 * @description Validation error
 */
export const getUser422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetUser422Schema = z.infer<typeof getUser422Schema>;
/**
 * @description Internal server error
 */
export const getUser500Schema = z.lazy(() => errorInternalSchema);
export type GetUser500Schema = z.infer<typeof getUser500Schema>;
/**
 * @description Successful Response
 */
export const getUserQueryResponseSchema = z.lazy(() => userSchema);
export type GetUserQueryResponseSchema = z.infer<typeof getUserQueryResponseSchema>;
