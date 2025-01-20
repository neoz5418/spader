import type { BillingPeriodType } from "./BillingPeriodType";
import type { AutoRenewPeriodType } from "./AutoRenewPeriodType";
import type { LeaseStatusType } from "./LeaseStatusType";
import type { InstanceStatusType } from "./InstanceStatusType";

 export type InstancePublicType = {
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
     * @type string
    */
    lease_status: LeaseStatusType;
    /**
     * @type string | undefined, date-time
    */
    create_time?: string;
    update_time?: (string | null);
    delete_time?: (string | null);
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    display_name?: (string | null);
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    status: InstanceStatusType;
    /**
     * @type string
    */
    zone: string;
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    gpu_type: string;
    /**
     * @type string
    */
    image: string;
    /**
     * @default ""
     * @type string | undefined
    */
    target_id?: string;
    /**
     * @default [object Object]
     * @type object | undefined
    */
    services?: object;
    /**
     * @type string
    */
    gpu_display_name: string;
    /**
     * @type string
    */
    zone_display_name: string;
};
