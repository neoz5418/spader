import type { UserType } from "./UserType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListUserType = {
    /**
     * @type array
    */
    items: UserType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
