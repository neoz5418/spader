import { z } from "@/utils/zod.ts";
import { paginatedListResourceUsageRecordSchema } from "./paginatedListResourceUsageRecordSchema.gen";
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


export const listWorkspaceResourceUsageRecordsPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceResourceUsageRecordsPathParamsSchema = z.infer<typeof listWorkspaceResourceUsageRecordsPathParamsSchema>;

 export const listWorkspaceResourceUsageRecordsQueryParamsSchema = z.object({ "target_id": z.string().uuid(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() });
export type ListWorkspaceResourceUsageRecordsQueryParamsSchema = z.infer<typeof listWorkspaceResourceUsageRecordsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceResourceUsageRecords200Schema = z.lazy(() => paginatedListResourceUsageRecordSchema);
export type ListWorkspaceResourceUsageRecords200Schema = z.infer<typeof listWorkspaceResourceUsageRecords200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceResourceUsageRecords422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorPreconditionFailedSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorRequestValidationFailedSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceResourceUsageRecords422Schema = z.infer<typeof listWorkspaceResourceUsageRecords422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceResourceUsageRecordsQueryResponseSchema = z.lazy(() => paginatedListResourceUsageRecordSchema);
export type ListWorkspaceResourceUsageRecordsQueryResponseSchema = z.infer<typeof listWorkspaceResourceUsageRecordsQueryResponseSchema>;
