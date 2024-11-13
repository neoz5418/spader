import type { WorkspaceMemberType } from "./WorkspaceMemberType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListWorkspaceMemberType = {
    /**
     * @type array
    */
    items: WorkspaceMemberType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};