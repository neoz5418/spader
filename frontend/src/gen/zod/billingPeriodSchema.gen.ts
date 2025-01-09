import { z } from "@/utils/zod.ts";


export const billingPeriodSchema = z.enum(["one_hour", "one_day", "one_week", "one_month", "real_time"]);
export type BillingPeriodSchema = z.infer<typeof billingPeriodSchema>;
