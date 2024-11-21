import { z } from "@/utils/zod.ts";


export const resourceUsageTypeSchema = z.enum(["instance", "volume", "snapshot"]);
export type ResourceUsageTypeSchema = z.infer<typeof resourceUsageTypeSchema>;
