import { z } from "@/utils/zod.ts";
import { paginatedListImageSchema } from "./paginatedListImageSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listWorkspaceImagesPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type ListWorkspaceImagesPathParamsSchema = z.infer<typeof listWorkspaceImagesPathParamsSchema>;

 export const listWorkspaceImagesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceImagesQueryParamsSchema = z.infer<typeof listWorkspaceImagesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceImages200Schema = z.lazy(() => paginatedListImageSchema);
export type ListWorkspaceImages200Schema = z.infer<typeof listWorkspaceImages200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceImages422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceImages422Schema = z.infer<typeof listWorkspaceImages422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceImagesQueryResponseSchema = z.lazy(() => paginatedListImageSchema);
export type ListWorkspaceImagesQueryResponseSchema = z.infer<typeof listWorkspaceImagesQueryResponseSchema>;