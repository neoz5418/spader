export const languageCode = {
    "en-US": "en-US",
    "zh-Hans": "zh-Hans"
} as const;
export type LanguageCodeType = (typeof languageCode)[keyof typeof languageCode];