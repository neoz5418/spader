import { z } from "@/utils/zod.ts";


export const billingRecordTypeSchema = z.enum(["deduction", "top_up"]);
export type BillingRecordTypeSchema = z.infer<typeof billingRecordTypeSchema>;
