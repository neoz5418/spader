export const errorInsufficientBalanceType = {
    "InsufficientBalance": "InsufficientBalance"
} as const;
export type ErrorInsufficientBalanceTypeType = (typeof errorInsufficientBalanceType)[keyof typeof errorInsufficientBalanceType];
export type ErrorInsufficientBalanceType = {
    /**
     * @type string
    */
    type: ErrorInsufficientBalanceTypeType;
    /**
     * @type integer
    */
    balance: number;
};
