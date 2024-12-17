import type { TypeType } from "./TypeType";

 export type ErrorPreconditionFailedType = {
    /**
     * @default 412
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @default "precondition_failed"
     * @type string | undefined
    */
    message?: string;
    /**
     * @type string
    */
    type: TypeType;
};
