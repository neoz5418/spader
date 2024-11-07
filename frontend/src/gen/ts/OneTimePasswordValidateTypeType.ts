export const oneTimePasswordValidateType = {
    "email": "email"
} as const;
export type OneTimePasswordValidateTypeType = (typeof oneTimePasswordValidateType)[keyof typeof oneTimePasswordValidateType];
