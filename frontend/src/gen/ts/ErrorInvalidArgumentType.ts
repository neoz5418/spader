export const errorInvalidArgumentType = {
    "InvalidArgument": "InvalidArgument"
} as const;
export type ErrorInvalidArgumentTypeType = (typeof errorInvalidArgumentType)[keyof typeof errorInvalidArgumentType];
export type ErrorInvalidArgumentType = {
    /**
     * @type string
    */
    type: ErrorInvalidArgumentTypeType;
    /**
     * @type string
    */
    location: string;
    input: any;
};