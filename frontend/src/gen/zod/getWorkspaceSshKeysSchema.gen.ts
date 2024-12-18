import { z } from "@/utils/zod.ts";
import { paginatedListSshKeySchema } from "./paginatedListSshKeySchema.gen";
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


export const getWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceSshKeysPathParamsSchema = z.infer<typeof getWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceSshKeys200Schema = z.lazy(() => paginatedListSshKeySchema);
export type GetWorkspaceSshKeys200Schema = z.infer<typeof getWorkspaceSshKeys200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceSshKeys422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceSshKeys422Schema = z.infer<typeof getWorkspaceSshKeys422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceSshKeysQueryResponseSchema = z.lazy(() => paginatedListSshKeySchema);
export type GetWorkspaceSshKeysQueryResponseSchema = z.infer<typeof getWorkspaceSshKeysQueryResponseSchema>;
