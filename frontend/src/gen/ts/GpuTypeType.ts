import type { DiskTypeType } from "./DiskTypeType";
import type { GpuProviderConfigEcloudType } from "./GpuProviderConfigEcloudType";

 export type GpuTypeType = {
    /**
     * @type string | undefined, date-time
    */
    create_time?: string;
    update_time?: (string | null);
    delete_time?: (string | null);
    /**
     * @type string
    */
    name: string;
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
    /**
     * @type string
    */
    zone: string;
    /**
     * @type object
    */
    provider_config: object;
    /**
     * @type object
    */
    ecloud: GpuProviderConfigEcloudType;
};
