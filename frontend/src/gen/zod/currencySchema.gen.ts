import { z } from "@/utils/zod.ts";

export const currencySchema = z.enum(["CNY", "USD"]);
export type CurrencySchema = z.infer<typeof currencySchema>;
