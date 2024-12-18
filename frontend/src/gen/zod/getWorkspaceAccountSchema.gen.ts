import { z } from "@/utils/zod.ts";
import { workspaceAccountSchema } from "./workspaceAccountSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorRequestValidationFailedSchema } from "./errorRequestValidationFailedSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const getWorkspaceAccountPathParamsSchema = z.object({ "workspace": z.string() });
export type GetWorkspaceAccountPathParamsSchema = z.infer<typeof getWorkspaceAccountPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccount200Schema = z.lazy(() => workspaceAccountSchema);
export type GetWorkspaceAccount200Schema = z.infer<typeof getWorkspaceAccount200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getWorkspaceAccount422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorPreconditionFailedSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorRequestValidationFailedSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetWorkspaceAccount422Schema = z.infer<typeof getWorkspaceAccount422Schema>;
/**
 * @description Successful Response
 */
export const getWorkspaceAccountQueryResponseSchema = z.lazy(() => workspaceAccountSchema);
export type GetWorkspaceAccountQueryResponseSchema = z.infer<typeof getWorkspaceAccountQueryResponseSchema>;
