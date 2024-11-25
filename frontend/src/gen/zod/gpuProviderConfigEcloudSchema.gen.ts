import { z } from "@/utils/zod.ts";


export const gpuProviderConfigEcloudSchema = z.object({ "provider": z.enum(["ecloud"]), "boot_volume_type": z.string(), "boot_volume_size": z.number().int(), "specs_name": z.string(), "server_type": z.string(), "vm_type": z.string(), "ram": z.number().int(), "cpu": z.number().int() });
export type GpuProviderConfigEcloudSchema = z.infer<typeof gpuProviderConfigEcloudSchema>;