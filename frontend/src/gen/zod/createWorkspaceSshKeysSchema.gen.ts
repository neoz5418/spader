import { z } from "@/utils/zod.ts";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { sshKeyCreateSchema } from "./sshKeyCreateSchema.gen";
import { sshKeySchema } from "./sshKeySchema.gen";

export const createWorkspaceSshKeysPathParamsSchema = z.object({
	workspace: z.string(),
});
export type CreateWorkspaceSshKeysPathParamsSchema = z.infer<
	typeof createWorkspaceSshKeysPathParamsSchema
>;
/**
 * @description Successful Response
 */
export const createWorkspaceSshKeys201Schema = z.lazy(() => sshKeySchema);
export type CreateWorkspaceSshKeys201Schema = z.infer<
	typeof createWorkspaceSshKeys201Schema
>;
/**
 * @description Unprocessable Entity
 */
export const createWorkspaceSshKeys422Schema = z.union([
	z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema),
	z.lazy(() => errorResourceNotFoundSchema),
	z.lazy(() => errorInternalSchema),
	z.lazy(() => errorInvalidArgumentSchema),
	z.lazy(() => errorPasswordMismatchSchema),
	z.lazy(() => errorRefreshTokenCannotBeEmptySchema),
	z.lazy(() => errorRefreshTokenExpiredSchema),
	z.lazy(() => errorRefreshTokenInvalidSchema),
	z.lazy(() => errorResourceConflictSchema),
	z.lazy(() => errorForbiddenSchema),
	z.lazy(() => errorUnauthorizedSchema),
	z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema),
	z.lazy(() => errorValidationFailedSchema),
]);
export type CreateWorkspaceSshKeys422Schema = z.infer<
	typeof createWorkspaceSshKeys422Schema
>;

export const createWorkspaceSshKeysMutationRequestSchema = z.lazy(
	() => sshKeyCreateSchema,
);
export type CreateWorkspaceSshKeysMutationRequestSchema = z.infer<
	typeof createWorkspaceSshKeysMutationRequestSchema
>;
/**
 * @description Successful Response
 */
export const createWorkspaceSshKeysMutationResponseSchema = z.lazy(
	() => sshKeySchema,
);
export type CreateWorkspaceSshKeysMutationResponseSchema = z.infer<
	typeof createWorkspaceSshKeysMutationResponseSchema
>;
