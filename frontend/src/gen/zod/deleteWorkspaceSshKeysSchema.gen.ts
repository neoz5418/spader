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
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const deleteWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type DeleteWorkspaceSshKeysPathParamsSchema = z.infer<typeof deleteWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteWorkspaceSshKeys204Schema = z.any();
export type DeleteWorkspaceSshKeys204Schema = z.infer<typeof deleteWorkspaceSshKeys204Schema>;
/**
 * @description Unprocessable Entity
 */
export const deleteWorkspaceSshKeys422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type DeleteWorkspaceSshKeys422Schema = z.infer<typeof deleteWorkspaceSshKeys422Schema>;

 export const deleteWorkspaceSshKeysMutationResponseSchema = z.any();
export type DeleteWorkspaceSshKeysMutationResponseSchema = z.infer<typeof deleteWorkspaceSshKeysMutationResponseSchema>;
