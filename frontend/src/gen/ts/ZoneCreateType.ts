import type { ProviderType } from "./ProviderType";
import type { ProviderZoneConfigEcloudType } from "./ProviderZoneConfigEcloudType";

 export type ZoneCreateType = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    provider: ProviderType;
    /**
     * @type object | undefined
    */
    provider_config?: ProviderZoneConfigEcloudType;
};