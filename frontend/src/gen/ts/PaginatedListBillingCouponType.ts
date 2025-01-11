import type { BillingCouponType } from "./BillingCouponType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListBillingCouponType = {
    /**
     * @type array
    */
    items: BillingCouponType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};