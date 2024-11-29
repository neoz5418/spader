import { z } from "@/utils/zod.ts";


export const zoneBaseSchema = z.object({ "name": z.string(), "display_name": z.union([z.string(), z.null()]).optional() });
export type ZoneBaseSchema = z.infer<typeof zoneBaseSchema>;
