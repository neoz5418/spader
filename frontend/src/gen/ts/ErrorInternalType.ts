export type ErrorInternalType = {
    /**
     * @default 500
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @default "Internal Error"
     * @type string | undefined
    */
    message?: string;
};
