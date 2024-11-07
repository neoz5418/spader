import type { FileInfoType } from "./FileInfoType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListFileInfoType = {
    /**
     * @type array
    */
    items: FileInfoType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
