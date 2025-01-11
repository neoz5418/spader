import { z } from "@/utils/zod.ts";


export const expensesResponseSchema = z.object({ "date": z.string().datetime(), "total": z.number().int(), "expense_detail": z.object({}).catchall(z.number().int()) });
export type ExpensesResponseSchema = z.infer<typeof expensesResponseSchema>;