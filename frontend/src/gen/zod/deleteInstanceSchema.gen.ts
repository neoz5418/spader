import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorSchema } from "./errorSchema.gen";


export const deleteInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type DeleteInstancePathParamsSchema = z.infer<typeof deleteInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteInstance200Schema = z.lazy(() => operationSchema);
export type DeleteInstance200Schema = z.infer<typeof deleteInstance200Schema>;
/**
 * @description Request error
 */
export const deleteInstance400Schema = z.lazy(() => errorSchema);
export type DeleteInstance400Schema = z.infer<typeof deleteInstance400Schema>;
/**
 * @description Unauthorized
 */
export const deleteInstance401Schema = z.lazy(() => errorSchema);
export type DeleteInstance401Schema = z.infer<typeof deleteInstance401Schema>;
/**
 * @description Not found
 */
export const deleteInstance404Schema = z.lazy(() => errorSchema);
export type DeleteInstance404Schema = z.infer<typeof deleteInstance404Schema>;
/**
 * @description Validation error
 */
export const deleteInstance422Schema = z.lazy(() => errorSchema);
export type DeleteInstance422Schema = z.infer<typeof deleteInstance422Schema>;
/**
 * @description Rate limit exceeded
 */
export const deleteInstance429Schema = z.lazy(() => errorSchema);
export type DeleteInstance429Schema = z.infer<typeof deleteInstance429Schema>;
/**
 * @description Internal server error
 */
export const deleteInstance500Schema = z.lazy(() => errorSchema);
export type DeleteInstance500Schema = z.infer<typeof deleteInstance500Schema>;
/**
 * @description Service unavailable
 */
export const deleteInstance503Schema = z.lazy(() => errorSchema);
export type DeleteInstance503Schema = z.infer<typeof deleteInstance503Schema>;
/**
 * @description Successful Response
 */
export const deleteInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type DeleteInstanceMutationResponseSchema = z.infer<typeof deleteInstanceMutationResponseSchema>;
