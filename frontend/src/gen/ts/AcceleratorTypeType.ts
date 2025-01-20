export type AcceleratorTypeType = {
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
     * @default false
     * @type boolean | undefined
    */
    enable?: boolean;
    /**
     * @type integer
    */
    gpu_memory: number;
    /**
     * @type integer
    */
    memory_size: number;
    /**
     * @type string
    */
    memory_type: string;
    memory_bandwidth?: (string | null);
    int8_tensor_core?: (string | null);
    bf16_tensor_core?: (string | null);
    tf32_tensor_core?: (string | null);
    fp32?: (string | null);
    fp64?: (string | null);
    mig?: (string | null);
    l2_cache?: (string | null);
    power?: (string | null);
    pcie?: (string | null);
    nvlink?: (string | null);
    architecture?: (string | null);
};