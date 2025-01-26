import { z } from "@/utils/zod.ts";
import { listBillingRecordOptionsSchema } from "./listBillingRecordOptionsSchema.gen";
import { sortOrderSchema } from "./sortOrderSchema.gen";
import { paginatedListBillingRecordPublicSchema } from "./paginatedListBillingRecordPublicSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listWorkspaceBillingRecordsPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceBillingRecordsPathParamsSchema = z.infer<typeof listWorkspaceBillingRecordsPathParamsSchema>;

 export const listWorkspaceBillingRecordsQueryParamsSchema = z.object({ "resource_id": z.union([z.string(), z.null()]).optional(), "sort": z.lazy(() => listBillingRecordOptionsSchema).optional(), "sort_order": z.lazy(() => sortOrderSchema).optional(), "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceBillingRecordsQueryParamsSchema = z.infer<typeof listWorkspaceBillingRecordsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceBillingRecords200Schema = z.lazy(() => paginatedListBillingRecordPublicSchema);
export type ListWorkspaceBillingRecords200Schema = z.infer<typeof listWorkspaceBillingRecords200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceBillingRecords422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceBillingRecords422Schema = z.infer<typeof listWorkspaceBillingRecords422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceBillingRecordsQueryResponseSchema = z.lazy(() => paginatedListBillingRecordPublicSchema);
export type ListWorkspaceBillingRecordsQueryResponseSchema = z.infer<typeof listWorkspaceBillingRecordsQueryResponseSchema>;