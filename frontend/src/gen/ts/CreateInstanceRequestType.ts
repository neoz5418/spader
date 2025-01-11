import type { BillingPeriodType } from "./BillingPeriodType";
import type { AutoRenewPeriodType } from "./AutoRenewPeriodType";

 export type CreateInstanceRequestType = {
    /**
     * @type string | undefined
    */
    lease_period?: BillingPeriodType;
    /**
     * @type string | undefined
    */
    auto_renew_period?: AutoRenewPeriodType;
    coupon?: (string | null);
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    display_name?: (string | null);
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string
    */
    gpu_type: string;
    /**
     * @type array | undefined
    */
    file_storages?: string[];
    /**
     * @type string
    */
    image: string;
};