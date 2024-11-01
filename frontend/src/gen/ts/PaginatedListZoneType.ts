import type { ZoneType } from "./ZoneType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListZoneType = {
    /**
     * @type array
    */
    items: ZoneType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};