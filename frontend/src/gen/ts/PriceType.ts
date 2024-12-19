import type { CurrencyType } from "./CurrencyType";
import type { BillingPeriodType } from "./BillingPeriodType";

 export type PriceType = {
    /**
     * @type string
    */
    currency: CurrencyType;
    /**
     * @type integer
    */
    price: number;
    /**
     * @type string
    */
    period: BillingPeriodType;
};