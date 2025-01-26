import { currencySchema } from "./currencySchema.gen";
import { z } from "@/utils/zod.ts";


export const rechargeBaseSchema = z.object({ "amount": z.number().int(), "currency": z.lazy(() => currencySchema) });
export type RechargeBaseSchema = z.infer<typeof rechargeBaseSchema>;