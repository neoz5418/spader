import type { ErrorInvalidArgumentType } from "./ErrorInvalidArgumentType";

 export const errorValidationFailedType = {
    "ValidationFailed": "ValidationFailed"
} as const;
export type ErrorValidationFailedTypeType = (typeof errorValidationFailedType)[keyof typeof errorValidationFailedType];
export type ErrorValidationFailedType = {
    /**
     * @type string
    */
    type: ErrorValidationFailedTypeType;
    /**
     * @type array
    */
    details: ErrorInvalidArgumentType[];
};