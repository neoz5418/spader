import { z } from "@/utils/zod.ts";

export const errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema =
	z.object({ type: z.enum(["emailandusernamecannotbeprovidedatthesametime"]) });
export type ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema = z.infer<
	typeof errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema
>;
