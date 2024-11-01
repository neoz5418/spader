export type CreateInstanceRequestType = {
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    display_name?: (string | null);
    /**
     * @type integer
    */
    gpu_count: number;
    /**
     * @type string
    */
    gpu_type: string;
    /**
     * @type array | undefined
    */
    file_storages?: string[];
    /**
     * @type string
    */
    image: string;
};