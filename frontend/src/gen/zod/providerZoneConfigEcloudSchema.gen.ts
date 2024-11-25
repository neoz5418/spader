import { z } from "@/utils/zod.ts";


export const providerZoneConfigEcloudSchema = z.object({ "provider": z.enum(["ecloud"]), "default_image_name": z.string(), "default_image_id": z.string(), "region": z.string(), "pool_id": z.string(), "network_id": z.string(), "security_group_id": z.string() });
export type ProviderZoneConfigEcloudSchema = z.infer<typeof providerZoneConfigEcloudSchema>;