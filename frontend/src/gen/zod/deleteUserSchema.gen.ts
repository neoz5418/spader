import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const deleteUserPathParamsSchema = z.object({ "username": z.string() });
export type DeleteUserPathParamsSchema = z.infer<typeof deleteUserPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteUser204Schema = z.any();
export type DeleteUser204Schema = z.infer<typeof deleteUser204Schema>;
/**
 * @description Request error
 */
export const deleteUser400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type DeleteUser400Schema = z.infer<typeof deleteUser400Schema>;
/**
 * @description Unauthorized
 */
export const deleteUser401Schema = z.lazy(() => errorUnauthorizedSchema);
export type DeleteUser401Schema = z.infer<typeof deleteUser401Schema>;
/**
 * @description Not found
 */
export const deleteUser404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type DeleteUser404Schema = z.infer<typeof deleteUser404Schema>;
/**
 * @description Resource conflict
 */
export const deleteUser409Schema = z.lazy(() => errorResourceConflictSchema);
export type DeleteUser409Schema = z.infer<typeof deleteUser409Schema>;
/**
 * @description Precondition failed
 */
export const deleteUser412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type DeleteUser412Schema = z.infer<typeof deleteUser412Schema>;
/**
 * @description Validation error
 */
export const deleteUser422Schema = z.lazy(() => errorValidationFailedSchema);
export type DeleteUser422Schema = z.infer<typeof deleteUser422Schema>;
/**
 * @description Internal server error
 */
export const deleteUser500Schema = z.lazy(() => errorInternalSchema);
export type DeleteUser500Schema = z.infer<typeof deleteUser500Schema>;

 export const deleteUserMutationResponseSchema = z.any();
export type DeleteUserMutationResponseSchema = z.infer<typeof deleteUserMutationResponseSchema>;
