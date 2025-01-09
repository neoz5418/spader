import { z } from "@/utils/zod.ts";


export const autoRenewPeriodSchema = z.enum(["none", "one_hour", "one_day", "one_week", "one_month", "real_time"]);
export type AutoRenewPeriodSchema = z.infer<typeof autoRenewPeriodSchema>;
