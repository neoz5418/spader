import type { ProviderType } from "./ProviderType";
import type { ProviderZoneConfigEcloudType } from "./ProviderZoneConfigEcloudType";

 export type ZoneType = {
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
    /**
     * @type string
    */
    provider: ProviderType;
    /**
     * @type object | undefined
    */
    provider_config?: ProviderZoneConfigEcloudType;
};