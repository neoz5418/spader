export const providerZoneConfigEcloudProvider = {
    "ecloud": "ecloud"
} as const;
export type ProviderZoneConfigEcloudProviderType = (typeof providerZoneConfigEcloudProvider)[keyof typeof providerZoneConfigEcloudProvider];
export type ProviderZoneConfigEcloudType = {
    /**
     * @type string
    */
    provider: ProviderZoneConfigEcloudProviderType;
    /**
     * @type string
    */
    default_image_name: string;
    /**
     * @type string
    */
    default_image_id: string;
    /**
     * @type string
    */
    region: string;
    /**
     * @type string
    */
    pool_id: string;
    /**
     * @type string
    */
    network_id: string;
    /**
     * @type string
    */
    security_group_id: string;
};