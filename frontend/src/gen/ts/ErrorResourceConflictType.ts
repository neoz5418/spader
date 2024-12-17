export type ErrorResourceConflictType = {
    /**
     * @default 409
     * @type integer | undefined
    */
    status_code?: number;
    /**
     * @default "resource_conflict"
     * @type string | undefined
    */
    message?: string;
    input: (string | object | number);
    /**
     * @type array
    */
    loc: (string | number)[];
    /**
     * @type string
    */
    resource_name: string;
};
