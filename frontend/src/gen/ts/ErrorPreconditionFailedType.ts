export const errorPreconditionFailedType = {
    "PreconditionFailed": "PreconditionFailed"
} as const;
export type ErrorPreconditionFailedTypeType = (typeof errorPreconditionFailedType)[keyof typeof errorPreconditionFailedType];
export type ErrorPreconditionFailedType = {
    /**
     * @type string
    */
    type: ErrorPreconditionFailedTypeType;
};
