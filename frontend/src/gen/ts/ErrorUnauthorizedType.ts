import type { MessageType } from "./MessageType";

 export type ErrorUnauthorizedType = {
    /**
     * @default 401
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @type string | undefined
    */
    message?: MessageType;
};
