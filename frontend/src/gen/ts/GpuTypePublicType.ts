import type { DiskTypeType } from "./DiskTypeType";
import type { PriceType } from "./PriceType";

 export type GpuTypePublicType = {
    /**
     * @type string
    */
    name: string;
    display_name?: (string | null);
    description?: (string | null);
    /**
     * @type integer
    */
    gpu_memory: number;
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
     * @type array
    */
    zones: string[];
    /**
     * @type array
    */
    prices: PriceType[];
};