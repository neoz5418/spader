import type { OneTimePasswordValidateTypeType } from "./OneTimePasswordValidateTypeType";

 export type RegisterUserRequestType = {
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    /**
     * @type string, email
    */
    email: string;
    display_name?: (string | null);
    /**
     * @type string, phone
    */
    phone_number: string;
    /**
     * @description Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
     * @type string
    */
    password: string;
    /**
     * @type string
    */
    one_time_password_validate_type: OneTimePasswordValidateTypeType;
    /**
     * @type string
    */
    one_time_password: string;
};