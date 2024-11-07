import { z } from "@/utils/zod.ts";
import { instanceSchema } from "./instanceSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const getInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type GetInstancePathParamsSchema = z.infer<typeof getInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getInstance200Schema = z.lazy(() => instanceSchema);
export type GetInstance200Schema = z.infer<typeof getInstance200Schema>;
/**
 * @description Request error
 */
export const getInstance400Schema = z.lazy(() => errorSchema);
export type GetInstance400Schema = z.infer<typeof getInstance400Schema>;
/**
 * @description Unauthorized
 */
export const getInstance401Schema = z.lazy(() => errorSchema);
export type GetInstance401Schema = z.infer<typeof getInstance401Schema>;
/**
 * @description Not found
 */
export const getInstance404Schema = z.lazy(() => errorSchema);
export type GetInstance404Schema = z.infer<typeof getInstance404Schema>;
/**
 * @description Validation error
 */
export const getInstance422Schema = z.lazy(() => errorSchema);
export type GetInstance422Schema = z.infer<typeof getInstance422Schema>;
/**
 * @description Rate limit exceeded
 */
export const getInstance429Schema = z.lazy(() => errorSchema);
export type GetInstance429Schema = z.infer<typeof getInstance429Schema>;
/**
 * @description Internal server error
 */
export const getInstance500Schema = z.lazy(() => errorSchema);
export type GetInstance500Schema = z.infer<typeof getInstance500Schema>;
/**
 * @description Service unavailable
 */
export const getInstance503Schema = z.lazy(() => errorSchema);
export type GetInstance503Schema = z.infer<typeof getInstance503Schema>;
/**
 * @description Successful Response
 */
export const getInstanceQueryResponseSchema = z.lazy(() => instanceSchema);
export type GetInstanceQueryResponseSchema = z.infer<typeof getInstanceQueryResponseSchema>;
