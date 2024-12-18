export const errorResourceNotFoundType = {
    "ResourceNotFound": "ResourceNotFound"
} as const;
export type ErrorResourceNotFoundTypeType = (typeof errorResourceNotFoundType)[keyof typeof errorResourceNotFoundType];
export type ErrorResourceNotFoundType = {
    /**
     * @type string
    */
    type: ErrorResourceNotFoundTypeType;
    /**
     * @type string
    */
    resource_name: string;
};
