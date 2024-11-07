import type { CurrencyType } from "./CurrencyType";

 export type WorkspaceAccountType = {
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type integer
    */
    balance: number;
    /**
     * @type string
    */
    currency: CurrencyType;
};
