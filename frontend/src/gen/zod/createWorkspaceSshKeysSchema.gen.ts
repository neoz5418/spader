import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const createWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string() });
export type CreateWorkspaceSshKeysPathParamsSchema = z.infer<typeof createWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const createWorkspaceSshKeys201Schema = z.any();
export type CreateWorkspaceSshKeys201Schema = z.infer<typeof createWorkspaceSshKeys201Schema>;
/**
 * @description Request error
 */
export const createWorkspaceSshKeys400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateWorkspaceSshKeys400Schema = z.infer<typeof createWorkspaceSshKeys400Schema>;
/**
 * @description Unauthorized
 */
export const createWorkspaceSshKeys401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateWorkspaceSshKeys401Schema = z.infer<typeof createWorkspaceSshKeys401Schema>;
/**
 * @description Not found
 */
export const createWorkspaceSshKeys404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateWorkspaceSshKeys404Schema = z.infer<typeof createWorkspaceSshKeys404Schema>;
/**
 * @description Resource conflict
 */
export const createWorkspaceSshKeys409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateWorkspaceSshKeys409Schema = z.infer<typeof createWorkspaceSshKeys409Schema>;
/**
 * @description Precondition failed
 */
export const createWorkspaceSshKeys412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateWorkspaceSshKeys412Schema = z.infer<typeof createWorkspaceSshKeys412Schema>;
/**
 * @description Validation error
 */
export const createWorkspaceSshKeys422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateWorkspaceSshKeys422Schema = z.infer<typeof createWorkspaceSshKeys422Schema>;
/**
 * @description Internal server error
 */
export const createWorkspaceSshKeys500Schema = z.lazy(() => errorInternalSchema);
export type CreateWorkspaceSshKeys500Schema = z.infer<typeof createWorkspaceSshKeys500Schema>;
/**
 * @description Successful Response
 */
export const createWorkspaceSshKeysMutationResponseSchema = z.any();
export type CreateWorkspaceSshKeysMutationResponseSchema = z.infer<typeof createWorkspaceSshKeysMutationResponseSchema>;
