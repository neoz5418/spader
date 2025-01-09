import type { BillingRecordType } from "./BillingRecordType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListBillingRecordType = {
    /**
     * @type array
    */
    items: BillingRecordType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
