import { couponTypeSchema } from "./couponTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const billingCouponSchema = z.object({ "balance": z.number().int().default(0).optional(), "display_name": z.union([z.string(), z.null()]).optional(), "type": z.lazy(() => couponTypeSchema), "max_discount_value": z.number().int().default(0).optional(), "min_purchase": z.number().int().default(0).optional(), "discount_rate": z.number().int().default(100).optional(), "applicable_resource_type": z.string().default("").optional(), "valid_from": z.string().datetime(), "valid_to": z.string().datetime(), "uid": z.string().uuid().optional(), "name": z.string(), "account": z.string().uuid(), "used": z.boolean().default(false).optional(), "meta_data": z.object({}).optional(), "claim_time": z.string().datetime() });
export type BillingCouponSchema = z.infer<typeof billingCouponSchema>;
