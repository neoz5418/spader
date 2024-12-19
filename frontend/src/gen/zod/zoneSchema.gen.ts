import { z } from "@/utils/zod.ts";
import { providerSchema } from "./providerSchema.gen";

export const zoneSchema = z.object({
	create_time: z.string().datetime().optional(),
	update_time: z.union([z.string().datetime(), z.null()]).optional(),
	delete_time: z.union([z.string().datetime(), z.null()]).optional(),
	name: z.string(),
	display_name: z.union([z.string(), z.null()]).optional(),
	provider: z.lazy(() => providerSchema),
	provider_config: z.object({}),
});
export type ZoneSchema = z.infer<typeof zoneSchema>;
