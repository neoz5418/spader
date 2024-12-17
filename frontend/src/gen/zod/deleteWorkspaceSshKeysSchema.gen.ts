import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const deleteWorkspaceSshKeysPathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type DeleteWorkspaceSshKeysPathParamsSchema = z.infer<typeof deleteWorkspaceSshKeysPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteWorkspaceSshKeys204Schema = z.any();
export type DeleteWorkspaceSshKeys204Schema = z.infer<typeof deleteWorkspaceSshKeys204Schema>;
/**
 * @description Request error
 */
export const deleteWorkspaceSshKeys400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type DeleteWorkspaceSshKeys400Schema = z.infer<typeof deleteWorkspaceSshKeys400Schema>;
/**
 * @description Unauthorized
 */
export const deleteWorkspaceSshKeys401Schema = z.lazy(() => errorUnauthorizedSchema);
export type DeleteWorkspaceSshKeys401Schema = z.infer<typeof deleteWorkspaceSshKeys401Schema>;
/**
 * @description Not found
 */
export const deleteWorkspaceSshKeys404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type DeleteWorkspaceSshKeys404Schema = z.infer<typeof deleteWorkspaceSshKeys404Schema>;
/**
 * @description Resource conflict
 */
export const deleteWorkspaceSshKeys409Schema = z.lazy(() => errorResourceConflictSchema);
export type DeleteWorkspaceSshKeys409Schema = z.infer<typeof deleteWorkspaceSshKeys409Schema>;
/**
 * @description Precondition failed
 */
export const deleteWorkspaceSshKeys412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type DeleteWorkspaceSshKeys412Schema = z.infer<typeof deleteWorkspaceSshKeys412Schema>;
/**
 * @description Validation error
 */
export const deleteWorkspaceSshKeys422Schema = z.lazy(() => errorValidationFailedSchema);
export type DeleteWorkspaceSshKeys422Schema = z.infer<typeof deleteWorkspaceSshKeys422Schema>;
/**
 * @description Internal server error
 */
export const deleteWorkspaceSshKeys500Schema = z.lazy(() => errorInternalSchema);
export type DeleteWorkspaceSshKeys500Schema = z.infer<typeof deleteWorkspaceSshKeys500Schema>;

 export const deleteWorkspaceSshKeysMutationResponseSchema = z.any();
export type DeleteWorkspaceSshKeysMutationResponseSchema = z.infer<typeof deleteWorkspaceSshKeysMutationResponseSchema>;
