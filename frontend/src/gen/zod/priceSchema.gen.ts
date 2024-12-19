import { currencySchema } from "./currencySchema.gen";
import { billingPeriodSchema } from "./billingPeriodSchema.gen";
import { z } from "@/utils/zod.ts";


export const priceSchema = z.object({ "currency": z.lazy(() => currencySchema), "price": z.number().int(), "period": z.lazy(() => billingPeriodSchema) });
export type PriceSchema = z.infer<typeof priceSchema>;