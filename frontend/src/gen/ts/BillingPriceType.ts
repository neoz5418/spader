import type { CurrencyType } from "./CurrencyType";

 export type BillingPriceType = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type integer
    */
    real_time: number;
    /**
     * @type integer
    */
    one_hour: number;
    /**
     * @type integer
    */
    one_day: number;
    /**
     * @type integer
    */
    one_week: number;
    /**
     * @type integer
    */
    one_month: number;
    /**
     * @type string
    */
    currency: CurrencyType;
};