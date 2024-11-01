import { z } from "@/utils/zod.ts";


export const currencySchema = z.enum(["USD", "CNY"]);
export type CurrencySchema = z.infer<typeof currencySchema>;