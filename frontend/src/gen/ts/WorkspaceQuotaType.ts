export type WorkspaceQuotaType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type object
    */
    limitation: {
        [key: string]: number;
    };
    /**
     * @type object
    */
    status: {
        [key: string]: number;
    };
};