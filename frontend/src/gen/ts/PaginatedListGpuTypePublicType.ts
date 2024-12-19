import type { GpuTypePublicType } from "./GpuTypePublicType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListGpuTypePublicType = {
    /**
     * @type array
    */
    items: GpuTypePublicType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};