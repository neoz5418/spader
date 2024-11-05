import { instanceStatusSchema } from "./instanceStatusSchema.gen";
import { z } from "@/utils/zod.ts";


export const instanceSchema = z.object({ "create_time": z.string().datetime().optional(), "update_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional(), "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "display_name": z.union([z.string(), z.null()]).optional(), "uid": z.string().uuid().optional(), "status": z.lazy(() => instanceStatusSchema), "zone": z.string(), "workspace": z.string(), "gpu_count": z.number().int(), "gpu_type": z.string(), "image": z.string() });
export type InstanceSchema = z.infer<typeof instanceSchema>;