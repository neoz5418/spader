import { oneTimePasswordValidateTypeSchema } from "./oneTimePasswordValidateTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const sendOneTimePasswordResponseSchema = z.object({ "type": z.lazy(() => oneTimePasswordValidateTypeSchema), "email": z.union([z.string(), z.null()]).optional(), "phone_number": z.union([z.string(), z.null()]).optional() });
export type SendOneTimePasswordResponseSchema = z.infer<typeof sendOneTimePasswordResponseSchema>;