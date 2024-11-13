import { languageCodeSchema } from "./languageCodeSchema.gen";
import { z } from "@/utils/zod.ts";


export const localizedMessageSchema = z.object({ "locale": z.lazy(() => languageCodeSchema), "message": z.string() });
export type LocalizedMessageSchema = z.infer<typeof localizedMessageSchema>;