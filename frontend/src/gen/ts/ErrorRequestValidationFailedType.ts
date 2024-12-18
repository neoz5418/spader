export const errorRequestValidationFailedType = {
    "RequestValidationFailed": "RequestValidationFailed"
} as const;
export type ErrorRequestValidationFailedTypeType = (typeof errorRequestValidationFailedType)[keyof typeof errorRequestValidationFailedType];
export type ErrorRequestValidationFailedType = {
    /**
     * @type string
    */
    type: ErrorRequestValidationFailedTypeType;
};
