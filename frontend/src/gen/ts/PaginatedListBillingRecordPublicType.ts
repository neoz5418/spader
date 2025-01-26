import type { BillingRecordPublicType } from "./BillingRecordPublicType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListBillingRecordPublicType = {
    /**
     * @type array
    */
    items: BillingRecordPublicType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};