import { z } from "@/utils/zod.ts";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const deleteInstancePortForwardPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string(), "port_forward_name": z.string() });
export type DeleteInstancePortForwardPathParamsSchema = z.infer<typeof deleteInstancePortForwardPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteInstancePortForward204Schema = z.any();
export type DeleteInstancePortForward204Schema = z.infer<typeof deleteInstancePortForward204Schema>;
/**
 * @description Request error
 */
export const deleteInstancePortForward400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type DeleteInstancePortForward400Schema = z.infer<typeof deleteInstancePortForward400Schema>;
/**
 * @description Unauthorized
 */
export const deleteInstancePortForward401Schema = z.lazy(() => errorUnauthorizedSchema);
export type DeleteInstancePortForward401Schema = z.infer<typeof deleteInstancePortForward401Schema>;
/**
 * @description Not found
 */
export const deleteInstancePortForward404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type DeleteInstancePortForward404Schema = z.infer<typeof deleteInstancePortForward404Schema>;
/**
 * @description Resource conflict
 */
export const deleteInstancePortForward409Schema = z.lazy(() => errorResourceConflictSchema);
export type DeleteInstancePortForward409Schema = z.infer<typeof deleteInstancePortForward409Schema>;
/**
 * @description Precondition failed
 */
export const deleteInstancePortForward412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type DeleteInstancePortForward412Schema = z.infer<typeof deleteInstancePortForward412Schema>;
/**
 * @description Validation error
 */
export const deleteInstancePortForward422Schema = z.lazy(() => errorValidationFailedSchema);
export type DeleteInstancePortForward422Schema = z.infer<typeof deleteInstancePortForward422Schema>;
/**
 * @description Internal server error
 */
export const deleteInstancePortForward500Schema = z.lazy(() => errorInternalSchema);
export type DeleteInstancePortForward500Schema = z.infer<typeof deleteInstancePortForward500Schema>;

 export const deleteInstancePortForwardMutationResponseSchema = z.any();
export type DeleteInstancePortForwardMutationResponseSchema = z.infer<typeof deleteInstancePortForwardMutationResponseSchema>;
