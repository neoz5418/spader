import { z } from "@/utils/zod.ts";
import { portForwardSchema } from "./portForwardSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const createInstancePortForwardPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type CreateInstancePortForwardPathParamsSchema = z.infer<typeof createInstancePortForwardPathParamsSchema>;
/**
 * @description Successful Response
 */
export const createInstancePortForward201Schema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForward201Schema = z.infer<typeof createInstancePortForward201Schema>;
/**
 * @description Request error
 */
export const createInstancePortForward400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateInstancePortForward400Schema = z.infer<typeof createInstancePortForward400Schema>;
/**
 * @description Unauthorized
 */
export const createInstancePortForward401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateInstancePortForward401Schema = z.infer<typeof createInstancePortForward401Schema>;
/**
 * @description Not found
 */
export const createInstancePortForward404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateInstancePortForward404Schema = z.infer<typeof createInstancePortForward404Schema>;
/**
 * @description Resource conflict
 */
export const createInstancePortForward409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateInstancePortForward409Schema = z.infer<typeof createInstancePortForward409Schema>;
/**
 * @description Precondition failed
 */
export const createInstancePortForward412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateInstancePortForward412Schema = z.infer<typeof createInstancePortForward412Schema>;
/**
 * @description Validation error
 */
export const createInstancePortForward422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateInstancePortForward422Schema = z.infer<typeof createInstancePortForward422Schema>;
/**
 * @description Internal server error
 */
export const createInstancePortForward500Schema = z.lazy(() => errorInternalSchema);
export type CreateInstancePortForward500Schema = z.infer<typeof createInstancePortForward500Schema>;

 export const createInstancePortForwardMutationRequestSchema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForwardMutationRequestSchema = z.infer<typeof createInstancePortForwardMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createInstancePortForwardMutationResponseSchema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForwardMutationResponseSchema = z.infer<typeof createInstancePortForwardMutationResponseSchema>;
