import { z } from "@/utils/zod.ts";
import { portForwardSchema } from "./portForwardSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


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
export const listInstancePortForwards400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type ListInstancePortForwards400Schema = z.infer<typeof listInstancePortForwards400Schema>;
/**
 * @description Unauthorized
 */
export const listInstancePortForwards401Schema = z.lazy(() => errorUnauthorizedSchema);
export type ListInstancePortForwards401Schema = z.infer<typeof listInstancePortForwards401Schema>;
/**
 * @description Not found
 */
export const listInstancePortForwards404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type ListInstancePortForwards404Schema = z.infer<typeof listInstancePortForwards404Schema>;
/**
 * @description Resource conflict
 */
export const listInstancePortForwards409Schema = z.lazy(() => errorResourceConflictSchema);
export type ListInstancePortForwards409Schema = z.infer<typeof listInstancePortForwards409Schema>;
/**
 * @description Precondition failed
 */
export const listInstancePortForwards412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type ListInstancePortForwards412Schema = z.infer<typeof listInstancePortForwards412Schema>;
/**
 * @description Validation error
 */
export const listInstancePortForwards422Schema = z.lazy(() => errorValidationFailedSchema);
export type ListInstancePortForwards422Schema = z.infer<typeof listInstancePortForwards422Schema>;
/**
 * @description Internal server error
 */
export const listInstancePortForwards500Schema = z.lazy(() => errorInternalSchema);
export type ListInstancePortForwards500Schema = z.infer<typeof listInstancePortForwards500Schema>;
/**
 * @description Successful Response
 */
export const listInstancePortForwardsQueryResponseSchema = z.array(z.lazy(() => portForwardSchema));
export type ListInstancePortForwardsQueryResponseSchema = z.infer<typeof listInstancePortForwardsQueryResponseSchema>;
