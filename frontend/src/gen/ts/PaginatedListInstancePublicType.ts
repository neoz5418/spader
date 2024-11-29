import type { InstancePublicType } from "./InstancePublicType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListInstancePublicType = {
    /**
     * @type array
    */
    items: InstancePublicType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
