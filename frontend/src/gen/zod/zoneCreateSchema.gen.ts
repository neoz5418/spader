import { providerSchema } from "./providerSchema.gen";
import { providerZoneConfigEcloudSchema } from "./providerZoneConfigEcloudSchema.gen";
import { z } from "@/utils/zod.ts";


export const zoneCreateSchema = z.object({ "name": z.string(), "provider": z.lazy(() => providerSchema), "provider_config": z.lazy(() => providerZoneConfigEcloudSchema).optional() });
export type ZoneCreateSchema = z.infer<typeof zoneCreateSchema>;