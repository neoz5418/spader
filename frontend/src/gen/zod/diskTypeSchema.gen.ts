import { z } from "@/utils/zod.ts";


export const diskTypeSchema = z.enum(["SSD", "HDD"]);
export type DiskTypeSchema = z.infer<typeof diskTypeSchema>;