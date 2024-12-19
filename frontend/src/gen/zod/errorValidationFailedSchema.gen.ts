import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";

export const errorValidationFailedSchema = z.object({
	type: z.enum(["ValidationFailed"]),
	details: z.array(z.lazy(() => errorInvalidArgumentSchema)),
});
export type ErrorValidationFailedSchema = z.infer<
	typeof errorValidationFailedSchema
>;
