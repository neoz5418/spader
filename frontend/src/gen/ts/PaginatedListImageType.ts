import type { ImageType } from "./ImageType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListImageType = {
    /**
     * @type array
    */
    items: ImageType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};