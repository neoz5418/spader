import { z } from "@/utils/zod.ts";


export const languageCodeSchema = z.enum(["en-US", "zh-Hans"]);
export type LanguageCodeSchema = z.infer<typeof languageCodeSchema>;