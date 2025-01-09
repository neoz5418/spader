import type { CouponTypeType } from "./CouponTypeType";

 export type BillingCouponType = {
    /**
     * @default 0
     * @type integer | undefined
    */
    balance?: number;
    display_name?: (string | null);
    /**
     * @type string
    */
    type: CouponTypeType;
    /**
     * @default 0
     * @type integer | undefined
    */
    max_discount_value?: number;
    /**
     * @default 0
     * @type integer | undefined
    */
    min_purchase?: number;
    /**
     * @default 100
     * @type integer | undefined
    */
    discount_rate?: number;
    /**
     * @default ""
     * @type string | undefined
    */
    applicable_resource_type?: string;
    /**
     * @type string, date-time
    */
    valid_from: string;
    /**
     * @type string, date-time
    */
    valid_to: string;
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string, uuid
    */
    account: string;
    /**
     * @default false
     * @type boolean | undefined
    */
    used?: boolean;
    /**
     * @type object | undefined
    */
    meta_data?: object;
    /**
     * @type string, date-time
    */
    claim_time: string;
};
