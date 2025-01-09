import { z } from "@/utils/zod.ts";
import { paginatedListBillingCouponSchema } from "./paginatedListBillingCouponSchema.gen";
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


export const listWorkspaceCouponsPathParamsSchema = z.object({ "workspace": z.string() });
export type ListWorkspaceCouponsPathParamsSchema = z.infer<typeof listWorkspaceCouponsPathParamsSchema>;

 export const listWorkspaceCouponsQueryParamsSchema = z.object({ "offset": z.number().int().min(0).default(0).optional(), "limit": z.number().int().min(1).max(100).default(20).optional() }).optional();
export type ListWorkspaceCouponsQueryParamsSchema = z.infer<typeof listWorkspaceCouponsQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const listWorkspaceCoupons200Schema = z.lazy(() => paginatedListBillingCouponSchema);
export type ListWorkspaceCoupons200Schema = z.infer<typeof listWorkspaceCoupons200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listWorkspaceCoupons422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListWorkspaceCoupons422Schema = z.infer<typeof listWorkspaceCoupons422Schema>;
/**
 * @description Successful Response
 */
export const listWorkspaceCouponsQueryResponseSchema = z.lazy(() => paginatedListBillingCouponSchema);
export type ListWorkspaceCouponsQueryResponseSchema = z.infer<typeof listWorkspaceCouponsQueryResponseSchema>;
