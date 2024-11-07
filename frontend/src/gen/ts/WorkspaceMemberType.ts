import type { WorkspaceRoleType } from "./WorkspaceRoleType";

 export type WorkspaceMemberType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    username: string;
    /**
     * @type string
    */
    role: WorkspaceRoleType;
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    create_time?: (string | null);
    delete_time?: (string | null);
};
