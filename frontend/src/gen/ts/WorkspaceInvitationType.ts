import type { InvitationStatusType } from "./InvitationStatusType";

 export type WorkspaceInvitationType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string, email
    */
    email: string;
    /**
     * @type string
    */
    username: string;
    /**
     * @type string, uuid
    */
    uid: string;
    /**
     * @type string
    */
    status: InvitationStatusType;
    create_time?: (string | null);
    delete_time?: (string | null);
};
