import { z } from "@/utils/zod.ts";


export const errorInsufficientBalanceSchema = z.object({ "type": z.enum(["InsufficientBalance"]), "balance": z.number().int() });
export type ErrorInsufficientBalanceSchema = z.infer<typeof errorInsufficientBalanceSchema>;
