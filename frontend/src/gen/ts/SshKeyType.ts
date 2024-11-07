export type SshKeyType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    public_key: string;
    create_time?: (string | null);
    delete_time?: (string | null);
};
