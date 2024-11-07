import { z } from "@/utils/zod.ts";


export const operationStatusSchema = z.enum(["pending", "running", "failed", "done"]);
export type OperationStatusSchema = z.infer<typeof operationStatusSchema>;
