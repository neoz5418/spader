import type { BillingCouponType } from "./BillingCouponType";

 export type InstanceCostType = {
    /**
     * @type integer
    */
    original_price: number;
    /**
     * @type integer
    */
    discount_amount: number;
    /**
     * @type integer
    */
    final_price: number;
    coupon: (BillingCouponType | null);
};
