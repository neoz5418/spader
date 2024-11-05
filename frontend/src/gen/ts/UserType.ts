import type { RoleType } from "./RoleType";

 export type UserType = {
    create_time?: (string | null);
    update_time?: (string | null);
    delete_time?: (string | null);
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
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    hashed_password: string;
    /**
     * @type string
    */
    role: RoleType;
};