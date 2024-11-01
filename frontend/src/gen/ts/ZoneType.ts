import type { ProviderType } from "./ProviderType";

 export type ZoneType = {
    /**
     * @type string | undefined, date-time
    */
    create_time?: string;
    update_time?: (string | null);
    delete_time?: (string | null);
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    provider: ProviderType;
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
};