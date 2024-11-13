import type { OneTimePasswordValidateTypeType } from "./OneTimePasswordValidateTypeType";

 export type SendOneTimePasswordRequestType = {
    /**
     * @type string
    */
    type: OneTimePasswordValidateTypeType;
    email?: (string | null);
};