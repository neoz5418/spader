import { z } from "@/utils/zod.ts";


export const errorRequestValidationFailedSchema = z.object({ "type": z.enum(["RequestValidationFailed"]) });
export type ErrorRequestValidationFailedSchema = z.infer<typeof errorRequestValidationFailedSchema>;
