import type { GrantTypeType } from "./GrantTypeType";

 export type BodyTokenApisOidcV1TokenPostType = {
    /**
     * @type string
    */
    grant_type: GrantTypeType;
    /**
     * @default ""
     * @type string | undefined
    */
    client_secret?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    client_id?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    password?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    scope?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    username?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    phone?: string;
    /**
     * @default ""
     * @type string | undefined, email
    */
    email?: string;
    /**
     * @default ""
     * @type string | undefined
    */
    refresh_token?: string;
};
