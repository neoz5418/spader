import { z } from "@/utils/zod.ts";


export const zoneBaseSchema = z.object({ "name": z.string() });
export type ZoneBaseSchema = z.infer<typeof zoneBaseSchema>;