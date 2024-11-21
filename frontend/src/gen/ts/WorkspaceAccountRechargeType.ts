import type { CurrencyType } from "./CurrencyType";
import type { RechargeTypeType } from "./RechargeTypeType";
import type { RechargeStatusType } from "./RechargeStatusType";

 export type WorkspaceAccountRechargeType = {
    /**
     * @type string | undefined, date-time
    */
    create_time?: string;
    update_time?: (string | null);
    delete_time?: (string | null);
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    /**
     * @type string
    */
    workspace: string;
    /**
     * @type string
    */
    currency: CurrencyType;
    /**
     * @type integer
    */
    amount: number;
    /**
     * @type string
    */
    type: RechargeTypeType;
    /**
     * @type string
    */
    pay_url: string;
    /**
     * @type string
    */
    status: RechargeStatusType;
};
