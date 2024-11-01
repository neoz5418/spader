import type { ErrorInfoType } from "./ErrorInfoType";
import type { LocalizedMessageType } from "./LocalizedMessageType";
import type { BaseModelType } from "./BaseModelType";

 export type ErrorType = {
    /**
     * @type integer
    */
    http_code: number;
    /**
     * @type string
    */
    message: string;
    /**
     * @type array
    */
    details: (ErrorInfoType | LocalizedMessageType | BaseModelType)[];
};