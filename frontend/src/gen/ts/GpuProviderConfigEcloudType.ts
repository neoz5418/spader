export const gpuProviderConfigEcloudProvider = {
    "ecloud": "ecloud"
} as const;
export type GpuProviderConfigEcloudProviderType = (typeof gpuProviderConfigEcloudProvider)[keyof typeof gpuProviderConfigEcloudProvider];
export type GpuProviderConfigEcloudType = {
    /**
     * @type string
    */
    provider: GpuProviderConfigEcloudProviderType;
    /**
     * @type string
    */
    boot_volume_type: string;
    /**
     * @type integer
    */
    boot_volume_size: number;
    /**
     * @type string
    */
    specs_name: string;
    /**
     * @type string
    */
    server_type: string;
    /**
     * @type string
    */
    vm_type: string;
    /**
     * @type integer
    */
    ram: number;
    /**
     * @type integer
    */
    cpu: number;
};
