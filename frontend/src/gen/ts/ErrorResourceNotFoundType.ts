export type ErrorResourceNotFoundType = {
    /**
     * @default 404
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @default "resource_not_found"
     * @type string | undefined
    */
    message?: string;
    /**
     * @type string
    */
    resource_name: string;
};
