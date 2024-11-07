import { diskTypeSchema } from "./diskTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const gpuTypeSchema = z.object({ "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "uid": z.string().uuid().optional(), "display_name": z.union([z.string(), z.null()]).optional(), "description": z.union([z.string(), z.null()]).optional(), "gpuMemory": z.number().int().min(0), "memory": z.number().int().min(0), "cpu": z.number().int(), "disk_size": z.number().int().min(0), "disk_type": z.lazy(() => diskTypeSchema), "create_time": z.union([z.string().datetime(), z.null()]).optional(), "update_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional() });
export type GpuTypeSchema = z.infer<typeof gpuTypeSchema>;
