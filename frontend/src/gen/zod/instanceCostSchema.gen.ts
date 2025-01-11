import { billingCouponSchema } from "./billingCouponSchema.gen";
import { z } from "@/utils/zod.ts";


export const instanceCostSchema = z.object({ "original_price": z.number().int(), "discount_amount": z.number().int(), "final_price": z.number().int(), "coupon": z.union([z.lazy(() => billingCouponSchema), z.null()]) });
export type InstanceCostSchema = z.infer<typeof instanceCostSchema>;