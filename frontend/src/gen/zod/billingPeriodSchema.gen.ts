import { z } from "@/utils/zod.ts";

export const billingPeriodSchema = z.enum([
	"one_hour",
	"one_day",
	"one_week",
	"two_week",
	"one_month",
	"three_month",
]);
export type BillingPeriodSchema = z.infer<typeof billingPeriodSchema>;
