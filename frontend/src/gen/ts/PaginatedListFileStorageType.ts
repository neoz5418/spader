import type { FileStorageType } from "./FileStorageType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListFileStorageType = {
    /**
     * @type array
    */
    items: FileStorageType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};