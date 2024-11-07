import type { LanguageCodeType } from "./LanguageCodeType";

 export type LocalizedMessageType = {
    /**
     * @type string
    */
    locale: LanguageCodeType;
    /**
     * @type string
    */
    message: string;
};
