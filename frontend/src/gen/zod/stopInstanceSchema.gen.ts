import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const stopInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type StopInstancePathParamsSchema = z.infer<typeof stopInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const stopInstance200Schema = z.lazy(() => operationSchema);
export type StopInstance200Schema = z.infer<typeof stopInstance200Schema>;
/**
 * @description Request error
 */
export const stopInstance400Schema = z.lazy(() => errorSchema);
export type StopInstance400Schema = z.infer<typeof stopInstance400Schema>;
/**
 * @description Unauthorized
 */
export const stopInstance401Schema = z.lazy(() => errorSchema);
export type StopInstance401Schema = z.infer<typeof stopInstance401Schema>;
/**
 * @description Not found
 */
export const stopInstance404Schema = z.lazy(() => errorSchema);
export type StopInstance404Schema = z.infer<typeof stopInstance404Schema>;
/**
 * @description Validation error
 */
export const stopInstance422Schema = z.lazy(() => errorSchema);
export type StopInstance422Schema = z.infer<typeof stopInstance422Schema>;
/**
 * @description Rate limit exceeded
 */
export const stopInstance429Schema = z.lazy(() => errorSchema);
export type StopInstance429Schema = z.infer<typeof stopInstance429Schema>;
/**
 * @description Internal server error
 */
export const stopInstance500Schema = z.lazy(() => errorSchema);
export type StopInstance500Schema = z.infer<typeof stopInstance500Schema>;
/**
 * @description Service unavailable
 */
export const stopInstance503Schema = z.lazy(() => errorSchema);
export type StopInstance503Schema = z.infer<typeof stopInstance503Schema>;
/**
 * @description Successful Response
 */
export const stopInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type StopInstanceMutationResponseSchema = z.infer<typeof stopInstanceMutationResponseSchema>;