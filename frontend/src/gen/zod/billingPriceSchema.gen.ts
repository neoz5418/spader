import { currencySchema } from "./currencySchema.gen";
import { z } from "@/utils/zod.ts";


export const billingPriceSchema = z.object({ "name": z.string(), "real_time": z.number().int(), "one_hour": z.number().int(), "one_day": z.number().int(), "one_week": z.number().int(), "one_month": z.number().int(), "currency": z.lazy(() => currencySchema) });
export type BillingPriceSchema = z.infer<typeof billingPriceSchema>;