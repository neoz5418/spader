import { billingRecordTypeSchema } from "./billingRecordTypeSchema.gen";
import { resourceTypeSchema } from "./resourceTypeSchema.gen";
import { billingCouponSchema } from "./billingCouponSchema.gen";
import { z } from "@/utils/zod.ts";


export const billingRecordPublicSchema = z.object({ "uid": z.string().uuid().optional(), "type": z.lazy(() => billingRecordTypeSchema), "resource_type": z.union([z.lazy(() => resourceTypeSchema), z.null()]), "resource_id": z.union([z.string(), z.null()]), "amount": z.number().int(), "billing_time": z.string().datetime(), "balance_before": z.number().int(), "balance_after": z.number().int(), "account": z.string().uuid(), "coupon": z.union([z.string(), z.null()]).optional(), "meta_data": z.union([z.object({}).strict(), z.null()]).optional(), "coupon_detail": z.union([z.lazy(() => billingCouponSchema), z.null()]).optional() });
export type BillingRecordPublicSchema = z.infer<typeof billingRecordPublicSchema>;