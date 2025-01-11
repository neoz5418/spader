import { expensesResponseSchema } from "./expensesResponseSchema.gen";
import { z } from "@/utils/zod.ts";


export const listExpensesResponseSchema = z.object({ "expense_types": z.array(z.string()), "expenses": z.array(z.lazy(() => expensesResponseSchema)) });
export type ListExpensesResponseSchema = z.infer<typeof listExpensesResponseSchema>;