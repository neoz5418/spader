import type { ProviderType } from "./ProviderType";

export type ZoneType = {
	/**
	 * @type string | undefined, date-time
	 */
	create_time?: string;
	update_time?: string | null;
	delete_time?: string | null;
	/**
	 * @type string
	 */
	name: string;
	display_name?: string | null;
	/**
	 * @type string
	 */
	provider: ProviderType;
	/**
	 * @type object
	 */
	provider_config: object;
};
