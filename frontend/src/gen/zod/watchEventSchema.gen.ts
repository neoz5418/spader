import { eventTypeSchema } from "./eventTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const watchEventSchema = z.object({ "type": z.lazy(() => eventTypeSchema), "object": z.object({}) });
export type WatchEventSchema = z.infer<typeof watchEventSchema>;
