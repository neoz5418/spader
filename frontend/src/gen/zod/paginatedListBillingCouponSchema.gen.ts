import { billingCouponSchema } from "./billingCouponSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListBillingCouponSchema = z.object({ "items": z.array(z.lazy(() => billingCouponSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListBillingCouponSchema = z.infer<typeof paginatedListBillingCouponSchema>;
