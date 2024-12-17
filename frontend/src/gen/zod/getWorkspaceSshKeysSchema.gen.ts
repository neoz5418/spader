import { z } from "@/utils/zod.ts";
import { paginatedListSshKeySchema } from "./paginatedListSshKeySchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceSshKeysPathParamsSchema = z.infer<typeof getWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceSshKeys200Schema = z.lazy(() => paginatedListSshKeySchema);
export type GetWorkspaceSshKeys200Schema = z.infer<typeof getWorkspaceSshKeys200Schema>;
/**
 * @description Request error
 */
export const getWorkspaceSshKeys400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetWorkspaceSshKeys400Schema = z.infer<typeof getWorkspaceSshKeys400Schema>;
/**
 * @description Unauthorized
 */
export const getWorkspaceSshKeys401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetWorkspaceSshKeys401Schema = z.infer<typeof getWorkspaceSshKeys401Schema>;
/**
 * @description Not found
 */
export const getWorkspaceSshKeys404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetWorkspaceSshKeys404Schema = z.infer<typeof getWorkspaceSshKeys404Schema>;
/**
 * @description Resource conflict
 */
export const getWorkspaceSshKeys409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetWorkspaceSshKeys409Schema = z.infer<typeof getWorkspaceSshKeys409Schema>;
/**
 * @description Precondition failed
 */
export const getWorkspaceSshKeys412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetWorkspaceSshKeys412Schema = z.infer<typeof getWorkspaceSshKeys412Schema>;
/**
 * @description Validation error
 */
export const getWorkspaceSshKeys422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetWorkspaceSshKeys422Schema = z.infer<typeof getWorkspaceSshKeys422Schema>;
/**
 * @description Internal server error
 */
export const getWorkspaceSshKeys500Schema = z.lazy(() => errorInternalSchema);
export type GetWorkspaceSshKeys500Schema = z.infer<typeof getWorkspaceSshKeys500Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceSshKeysQueryResponseSchema = z.lazy(() => paginatedListSshKeySchema);
export type GetWorkspaceSshKeysQueryResponseSchema = z.infer<typeof getWorkspaceSshKeysQueryResponseSchema>;
