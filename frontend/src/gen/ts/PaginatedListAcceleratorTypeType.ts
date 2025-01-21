import type { AcceleratorTypeType } from "./AcceleratorTypeType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListAcceleratorTypeType = {
    /**
     * @type array
    */
    items: AcceleratorTypeType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};