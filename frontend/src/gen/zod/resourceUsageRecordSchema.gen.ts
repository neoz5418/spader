import { resourceUsageTypeSchema } from "./resourceUsageTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const resourceUsageRecordSchema = z.object({ "uid": z.string().uuid().optional(), "billing_cycle_group": z.string().uuid(), "workspace": z.string(), "zone": z.string(), "start_time": z.string().datetime(), "end_time": z.string().datetime(), "target_id": z.string().uuid(), "target_resource_type": z.lazy(() => resourceUsageTypeSchema) });
export type ResourceUsageRecordSchema = z.infer<typeof resourceUsageRecordSchema>;
