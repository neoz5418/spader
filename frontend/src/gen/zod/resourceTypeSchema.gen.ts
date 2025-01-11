import { z } from "@/utils/zod.ts";


export const resourceTypeSchema = z.enum(["instance", "volume", "snapshot"]);
export type ResourceTypeSchema = z.infer<typeof resourceTypeSchema>;