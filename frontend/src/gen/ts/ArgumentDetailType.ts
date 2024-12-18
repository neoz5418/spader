import type { LocalizedMessageType } from "./LocalizedMessageType";

 export type ArgumentDetailType = {
    /**
     * @type string
    */
    type: string;
    /**
     * @type object
    */
    metadata: object;
    /**
     * @type string
    */
    msg: string;
    /**
     * @type array
    */
    loc: (string | number)[];
    input: (string | object | number);
    /**
     * @type object | undefined
    */
    i18n?: LocalizedMessageType;
};
