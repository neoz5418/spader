import type { OperationStatusType } from "./OperationStatusType";

 export type OperationType = {
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string, date-time
    */
    create_time: string;
    description?: (string | null);
    start_time?: (string | null);
    end_time?: (string | null);
    /**
     * @type integer
    */
    progress: number;
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    status: OperationStatusType;
    status_message?: (string | null);
    /**
     * @type string, uuid
    */
    target: string;
    /**
     * @type string, uuid
    */
    user: string;
    /**
     * @type string
    */
    zone: string;
};
