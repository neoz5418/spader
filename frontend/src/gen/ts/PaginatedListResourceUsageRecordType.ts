import type { ResourceUsageRecordType } from "./ResourceUsageRecordType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListResourceUsageRecordType = {
    /**
     * @type array
    */
    items: ResourceUsageRecordType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
