import type { SshKeyType } from "./SshKeyType";
import type { PaginationType } from "./PaginationType";

 export type PaginatedListSshKeyType = {
    /**
     * @type array
    */
    items: SshKeyType[];
    /**
     * @type object
    */
    pagination: PaginationType;
};
