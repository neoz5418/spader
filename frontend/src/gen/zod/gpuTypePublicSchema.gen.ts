import { diskTypeSchema } from "./diskTypeSchema.gen";
import { priceSchema } from "./priceSchema.gen";
import { z } from "@/utils/zod.ts";


export const gpuTypePublicSchema = z.object({ "name": z.string(), "display_name": z.union([z.string(), z.null()]).optional(), "description": z.union([z.string(), z.null()]).optional(), "gpu_memory": z.number().int().min(0), "memory": z.number().int().min(0), "cpu": z.number().int(), "disk_size": z.number().int().min(0), "disk_type": z.lazy(() => diskTypeSchema), "zones": z.array(z.string()), "prices": z.array(z.lazy(() => priceSchema)) });
export type GpuTypePublicSchema = z.infer<typeof gpuTypePublicSchema>;