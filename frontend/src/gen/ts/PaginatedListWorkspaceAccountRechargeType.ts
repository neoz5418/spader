import type { WorkspaceAccountRechargeType } from "./WorkspaceAccountRechargeType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListWorkspaceAccountRechargeType = {
    /**
     * @type array
    */
    items: WorkspaceAccountRechargeType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};