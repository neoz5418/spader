import { z } from "@/utils/zod.ts";
import { portForwardSchema } from "./portForwardSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const listInstancePortForwardsPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type ListInstancePortForwardsPathParamsSchema = z.infer<typeof listInstancePortForwardsPathParamsSchema>;
/**
 * @description Successful Response
 */
export const listInstancePortForwards200Schema = z.array(z.lazy(() => portForwardSchema));
export type ListInstancePortForwards200Schema = z.infer<typeof listInstancePortForwards200Schema>;
/**
 * @description Request error
 */
export const listInstancePortForwards400Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards400Schema = z.infer<typeof listInstancePortForwards400Schema>;
/**
 * @description Unauthorized
 */
export const listInstancePortForwards401Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards401Schema = z.infer<typeof listInstancePortForwards401Schema>;
/**
 * @description Not found
 */
export const listInstancePortForwards404Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards404Schema = z.infer<typeof listInstancePortForwards404Schema>;
/**
 * @description Validation error
 */
export const listInstancePortForwards422Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards422Schema = z.infer<typeof listInstancePortForwards422Schema>;
/**
 * @description Rate limit exceeded
 */
export const listInstancePortForwards429Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards429Schema = z.infer<typeof listInstancePortForwards429Schema>;
/**
 * @description Internal server error
 */
export const listInstancePortForwards500Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards500Schema = z.infer<typeof listInstancePortForwards500Schema>;
/**
 * @description Service unavailable
 */
export const listInstancePortForwards503Schema = z.lazy(() => errorSchema);
export type ListInstancePortForwards503Schema = z.infer<typeof listInstancePortForwards503Schema>;
/**
 * @description Successful Response
 */
export const listInstancePortForwardsQueryResponseSchema = z.array(z.lazy(() => portForwardSchema));
export type ListInstancePortForwardsQueryResponseSchema = z.infer<typeof listInstancePortForwardsQueryResponseSchema>;