import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const startInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type StartInstancePathParamsSchema = z.infer<typeof startInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const startInstance200Schema = z.lazy(() => operationSchema);
export type StartInstance200Schema = z.infer<typeof startInstance200Schema>;
/**
 * @description Request error
 */
export const startInstance400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type StartInstance400Schema = z.infer<typeof startInstance400Schema>;
/**
 * @description Unauthorized
 */
export const startInstance401Schema = z.lazy(() => errorUnauthorizedSchema);
export type StartInstance401Schema = z.infer<typeof startInstance401Schema>;
/**
 * @description Not found
 */
export const startInstance404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type StartInstance404Schema = z.infer<typeof startInstance404Schema>;
/**
 * @description Resource conflict
 */
export const startInstance409Schema = z.lazy(() => errorResourceConflictSchema);
export type StartInstance409Schema = z.infer<typeof startInstance409Schema>;
/**
 * @description Precondition failed
 */
export const startInstance412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type StartInstance412Schema = z.infer<typeof startInstance412Schema>;
/**
 * @description Validation error
 */
export const startInstance422Schema = z.lazy(() => errorValidationFailedSchema);
export type StartInstance422Schema = z.infer<typeof startInstance422Schema>;
/**
 * @description Internal server error
 */
export const startInstance500Schema = z.lazy(() => errorInternalSchema);
export type StartInstance500Schema = z.infer<typeof startInstance500Schema>;
/**
 * @description Successful Response
 */
export const startInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type StartInstanceMutationResponseSchema = z.infer<typeof startInstanceMutationResponseSchema>;
