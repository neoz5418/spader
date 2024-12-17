import type { ArgumentDetailType } from "./ArgumentDetailType";

 export type ErrorValidationFailedType = {
    /**
     * @default 422
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @default "request_validation_failed"
     * @type string | undefined
    */
    message?: string;
    /**
     * @type array
    */
    details: ArgumentDetailType[];
};
