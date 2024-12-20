import { z } from "@/utils/zod.ts";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const deleteInstancePortForwardPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string(), "port_forward_name": z.string() });
export type DeleteInstancePortForwardPathParamsSchema = z.infer<typeof deleteInstancePortForwardPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteInstancePortForward204Schema = z.any();
export type DeleteInstancePortForward204Schema = z.infer<typeof deleteInstancePortForward204Schema>;
/**
 * @description Unprocessable Entity
 */
export const deleteInstancePortForward422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type DeleteInstancePortForward422Schema = z.infer<typeof deleteInstancePortForward422Schema>;

 export const deleteInstancePortForwardMutationResponseSchema = z.any();
export type DeleteInstancePortForwardMutationResponseSchema = z.infer<typeof deleteInstancePortForwardMutationResponseSchema>;