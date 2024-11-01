import type { WorkspaceType } from "./WorkspaceType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListWorkspaceType = {
    /**
     * @type array
    */
    items: WorkspaceType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};