import type { LocalizedMessageType } from "./LocalizedMessageType";

 export type ErrorInvalidArgumentType = {
    /**
     * @default "invalid_argument"
     * @type string | undefined
    */
    type?: string;
    /**
     * @default [object Object]
     * @type object | undefined
    */
    metadata?: object;
    /**
     * @default "Invalid argument"
     * @type string | undefined
    */
    msg?: string;
    /**
     * @type array
    */
    loc: (string | number)[];
    input: (string | object | number);
    /**
     * @type object | undefined
    */
    i18n?: LocalizedMessageType;
    /**
     * @default 400
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @default "invalid_argument"
     * @type string | undefined
    */
    message?: string;
};
