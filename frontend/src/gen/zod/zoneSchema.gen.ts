import { providerSchema } from "./providerSchema.gen";
import { providerZoneConfigEcloudSchema } from "./providerZoneConfigEcloudSchema.gen";
import { z } from "@/utils/zod.ts";


export const zoneSchema = z.object({ "create_time": z.string().datetime().optional(), "update_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional(), "name": z.string(), "provider": z.lazy(() => providerSchema), "provider_config": z.lazy(() => providerZoneConfigEcloudSchema).optional() });
export type ZoneSchema = z.infer<typeof zoneSchema>;