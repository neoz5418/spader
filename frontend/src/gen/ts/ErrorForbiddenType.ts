export const errorForbiddenType = {
    "Forbidden": "Forbidden"
} as const;
export type ErrorForbiddenTypeType = (typeof errorForbiddenType)[keyof typeof errorForbiddenType];
export type ErrorForbiddenType = {
    /**
     * @type string
    */
    type: ErrorForbiddenTypeType;
};