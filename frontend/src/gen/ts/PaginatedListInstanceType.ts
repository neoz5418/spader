import type { InstanceType } from "./InstanceType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListInstanceType = {
    /**
     * @type array
    */
    items: InstanceType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
