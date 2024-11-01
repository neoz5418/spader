import { z } from "@/utils/zod.ts";


export const oneTimePasswordValidateTypeSchema = z.enum(["email"]);
export type OneTimePasswordValidateTypeSchema = z.infer<typeof oneTimePasswordValidateTypeSchema>;