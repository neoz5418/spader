import { z } from "@/utils/zod.ts";


export const listBillingRecordOptionsSchema = z.enum(["uid"]);
export type ListBillingRecordOptionsSchema = z.infer<typeof listBillingRecordOptionsSchema>;