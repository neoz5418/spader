import { z } from "@/utils/zod.ts";
import { listUsersSortOptionsSchema } from "./listUsersSortOptionsSchema.gen";
import { directionSchema } from "./directionSchema.gen";
import { paginatedListUserSchema } from "./paginatedListUserSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const listUsersQueryParamsSchema = z.object({ "sort": z.lazy(() => listUsersSortOptionsSchema).optional(), "direction": z.lazy(() => directionSchema).optional(), "phone_number": z.string().optional(), "display_name": z.string().optional(), "email": z.string().email().optional(), "name": z.string().optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListUsersQueryParamsSchema = z.infer<typeof listUsersQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listUsers200Schema = z.lazy(() => paginatedListUserSchema);
export type ListUsers200Schema = z.infer<typeof listUsers200Schema>;
/**
 * @description Request error
 */
export const listUsers400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListUsers400Schema = z.infer<typeof listUsers400Schema>;
/**
 * @description Unauthorized
 */
export const listUsers401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListUsers401Schema = z.infer<typeof listUsers401Schema>;
/**
 * @description Not found
 */
export const listUsers404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListUsers404Schema = z.infer<typeof listUsers404Schema>;
/**
 * @description Resource conflict
 */
export const listUsers409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListUsers409Schema = z.infer<typeof listUsers409Schema>;
/**
 * @description Precondition failed
 */
export const listUsers412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListUsers412Schema = z.infer<typeof listUsers412Schema>;
/**
 * @description Validation error
 */
export const listUsers422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListUsers422Schema = z.infer<typeof listUsers422Schema>;
/**
 * @description Internal server error
 */
export const listUsers500Schema = z.lazy(() => errorInternalSchema);
export type ListUsers500Schema = z.infer<typeof listUsers500Schema>;
/**
 * @description Successful Response
 */
export const listUsersQueryResponseSchema = z.lazy(() => paginatedListUserSchema);
export type ListUsersQueryResponseSchema = z.infer<typeof listUsersQueryResponseSchema>;
