import type { OneTimePasswordValidateTypeType } from "./OneTimePasswordValidateTypeType";

 export type SendOneTimePasswordResponseType = {
    /**
     * @type string
    */
    type: OneTimePasswordValidateTypeType;
    email?: (string | null);
    phone_number?: (string | null);
};