import type { WorkspaceInvitationType } from "./WorkspaceInvitationType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListWorkspaceInvitationType = {
    /**
     * @type array
    */
    items: WorkspaceInvitationType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
