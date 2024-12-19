export type WorkspaceZoneQuotaType = {
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    zone: string;
    /**
     * @default [object Object]
     * @type object | undefined
    */
    limitation?: {
        [key: string]: number;
    };
    /**
     * @default [object Object]
     * @type object | undefined
    */
    status?: {
        [key: string]: number;
    };
};