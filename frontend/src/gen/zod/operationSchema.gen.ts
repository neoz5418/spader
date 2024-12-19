import { operationTypeSchema } from "./operationTypeSchema.gen";
import { operationStatusSchema } from "./operationStatusSchema.gen";
import { z } from "@/utils/zod.ts";


export const operationSchema = z.object({ "uid": z.string().uuid().optional(), "type": z.lazy(() => operationTypeSchema), "create_time": z.string().datetime(), "description": z.union([z.string(), z.null()]).optional(), "start_time": z.union([z.string().datetime(), z.null()]).optional(), "end_time": z.union([z.string().datetime(), z.null()]).optional(), "progress": z.number().int(), "workspace": z.string(), "status": z.lazy(() => operationStatusSchema), "status_message": z.union([z.string(), z.null()]).optional(), "target": z.string().uuid(), "user": z.string().uuid(), "zone": z.string() });
export type OperationSchema = z.infer<typeof operationSchema>;