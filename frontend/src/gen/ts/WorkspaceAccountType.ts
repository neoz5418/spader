import type { CurrencyType } from "./CurrencyType";

 export type WorkspaceAccountType = {
    /**
     * @type string, uuid
    */
    workspace: string;
    /**
     * @type integer
    */
    balance: number;
    /**
     * @type integer
    */
    rate_per_hour: number;
    /**
     * @type string
    */
    currency: CurrencyType;
};
