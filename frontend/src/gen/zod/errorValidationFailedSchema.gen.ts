import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { z } from "@/utils/zod.ts";


export const errorValidationFailedSchema = z.object({ "type": z.enum(["ValidationFailed"]), "details": z.array(z.lazy(() => errorInvalidArgumentSchema)) });
export type ErrorValidationFailedSchema = z.infer<typeof errorValidationFailedSchema>;
