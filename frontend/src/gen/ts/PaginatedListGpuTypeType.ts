import type { GpuTypeType } from "./GpuTypeType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListGpuTypeType = {
    /**
     * @type array
    */
    items: GpuTypeType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};