import { z } from "@/utils/zod.ts";


export const operationTypeSchema = z.enum(["1", "2", "3", "4"]);
export type OperationTypeSchema = z.infer<typeof operationTypeSchema>;