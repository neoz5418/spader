import type { BillingRecordTypeType } from "./BillingRecordTypeType";
import type { ResourceTypeType } from "./ResourceTypeType";
import type { BillingCouponType } from "./BillingCouponType";

 export type BillingRecordPublicType = {
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    type: BillingRecordTypeType;
    resource_type: (ResourceTypeType | null);
    resource_id: (string | null);
    /**
     * @type integer
    */
    amount: number;
    /**
     * @type string, date-time
    */
    billing_time: string;
    /**
     * @type integer
    */
    balance_before: number;
    /**
     * @type integer
    */
    balance_after: number;
    /**
     * @type string, uuid
    */
    account: string;
    coupon?: (string | null);
    meta_data?: (object | null);
    coupon_detail?: (BillingCouponType | null);
};