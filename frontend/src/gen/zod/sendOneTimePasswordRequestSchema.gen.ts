import { oneTimePasswordValidateTypeSchema } from "./oneTimePasswordValidateTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const sendOneTimePasswordRequestSchema = z.object({ "type": z.lazy(() => oneTimePasswordValidateTypeSchema), "email": z.union([z.string(), z.null()]).optional() });
export type SendOneTimePasswordRequestSchema = z.infer<typeof sendOneTimePasswordRequestSchema>;
