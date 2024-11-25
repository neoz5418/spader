import { diskTypeSchema } from "./diskTypeSchema.gen";
import { gpuProviderConfigEcloudSchema } from "./gpuProviderConfigEcloudSchema.gen";
import { z } from "@/utils/zod.ts";


export const gpuTypeSchema = z.object({ "create_time": z.string().datetime().optional(), "update_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional(), "name": z.string(), "display_name": z.union([z.string(), z.null()]).optional(), "description": z.union([z.string(), z.null()]).optional(), "gpuMemory": z.number().int().min(0), "memory": z.number().int().min(0), "cpu": z.number().int(), "disk_size": z.number().int().min(0), "disk_type": z.lazy(() => diskTypeSchema), "zone": z.string(), "provider_config": z.object({}), "ecloud": z.lazy(() => gpuProviderConfigEcloudSchema) });
export type GpuTypeSchema = z.infer<typeof gpuTypeSchema>;