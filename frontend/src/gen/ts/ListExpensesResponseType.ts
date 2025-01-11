import type { ExpensesResponseType } from "./ExpensesResponseType";

 export type ListExpensesResponseType = {
    /**
     * @type array
    */
    expense_types: string[];
    /**
     * @type array
    */
    expenses: ExpensesResponseType[];
};