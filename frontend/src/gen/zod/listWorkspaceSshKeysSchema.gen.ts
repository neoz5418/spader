import { z } from "@/utils/zod.ts";
import { paginatedListSshKeySchema } from "./paginatedListSshKeySchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceSshKeysPathParamsSchema = z.infer<typeof listWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceSshKeys200Schema = z.lazy(() => paginatedListSshKeySchema);
export type ListWorkspaceSshKeys200Schema = z.infer<typeof listWorkspaceSshKeys200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceSshKeys422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceSshKeys422Schema = z.infer<typeof listWorkspaceSshKeys422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceSshKeysQueryResponseSchema = z.lazy(() => paginatedListSshKeySchema);
export type ListWorkspaceSshKeysQueryResponseSchema = z.infer<typeof listWorkspaceSshKeysQueryResponseSchema>;