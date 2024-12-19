export const errorUsernameOrEmailCannotBeEmptyType = {
    "UsernameOrEmailCannotBeEmpty": "UsernameOrEmailCannotBeEmpty"
} as const;
export type ErrorUsernameOrEmailCannotBeEmptyTypeType = (typeof errorUsernameOrEmailCannotBeEmptyType)[keyof typeof errorUsernameOrEmailCannotBeEmptyType];
export type ErrorUsernameOrEmailCannotBeEmptyType = {
    /**
     * @type string
    */
    type: ErrorUsernameOrEmailCannotBeEmptyTypeType;
};