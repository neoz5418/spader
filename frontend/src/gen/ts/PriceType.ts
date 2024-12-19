import type { BillingPeriodType } from "./BillingPeriodType";
import type { CurrencyType } from "./CurrencyType";

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
