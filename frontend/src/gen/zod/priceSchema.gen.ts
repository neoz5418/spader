import { z } from "@/utils/zod.ts";
import { billingPeriodSchema } from "./billingPeriodSchema.gen";
import { currencySchema } from "./currencySchema.gen";

export const priceSchema = z.object({
	currency: z.lazy(() => currencySchema),
	price: z.number().int(),
	period: z.lazy(() => billingPeriodSchema),
});
export type PriceSchema = z.infer<typeof priceSchema>;
