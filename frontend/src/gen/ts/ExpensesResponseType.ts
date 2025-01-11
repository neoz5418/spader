export type ExpensesResponseType = {
    /**
     * @type string, date-time
    */
    date: string;
    /**
     * @type integer
    */
    total: number;
    /**
     * @type object
    */
    expense_detail: {
        [key: string]: number;
    };
};