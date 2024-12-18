import { z } from "@/utils/zod.ts";
import { paginatedListZoneSchema } from "./paginatedListZoneSchema.gen";
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


export const listWorkspaceZonesPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceZonesPathParamsSchema = z.infer<typeof listWorkspaceZonesPathParamsSchema>;

 export const listWorkspaceZonesQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceZonesQueryParamsSchema = z.infer<typeof listWorkspaceZonesQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZones200Schema = z.lazy(() => paginatedListZoneSchema);
export type ListWorkspaceZones200Schema = z.infer<typeof listWorkspaceZones200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceZones422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceZones422Schema = z.infer<typeof listWorkspaceZones422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceZonesQueryResponseSchema = z.lazy(() => paginatedListZoneSchema);
export type ListWorkspaceZonesQueryResponseSchema = z.infer<typeof listWorkspaceZonesQueryResponseSchema>;
