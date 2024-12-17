export const errorUnauthorizedType = {
    "Unauthorized": "Unauthorized"
} as const;
export type ErrorUnauthorizedTypeType = (typeof errorUnauthorizedType)[keyof typeof errorUnauthorizedType];
export type ErrorUnauthorizedType = {
    /**
     * @type string
    */
    type: ErrorUnauthorizedTypeType;
};
