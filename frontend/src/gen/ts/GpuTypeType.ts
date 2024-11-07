import type { DiskTypeType } from "./DiskTypeType";

 export type GpuTypeType = {
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    display_name?: (string | null);
    description?: (string | null);
    /**
     * @type integer
    */
    gpuMemory: number;
    /**
     * @type integer
    */
    memory: number;
    /**
     * @type integer
    */
    cpu: number;
    /**
     * @type integer
    */
    disk_size: number;
    /**
     * @type string
    */
    disk_type: DiskTypeType;
    create_time?: (string | null);
    update_time?: (string | null);
    delete_time?: (string | null);
};
