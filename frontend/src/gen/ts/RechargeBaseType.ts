import type { CurrencyType } from "./CurrencyType";

 export type RechargeBaseType = {
    /**
     * @type integer
    */
    amount: number;
    /**
     * @type string
    */
    currency: CurrencyType;
};
