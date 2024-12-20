import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const startInstancePathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type StartInstancePathParamsSchema = z.infer<typeof startInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const startInstance200Schema = z.lazy(() => operationSchema);
export type StartInstance200Schema = z.infer<typeof startInstance200Schema>;
/**
 * @description Unprocessable Entity
 */
export const startInstance422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type StartInstance422Schema = z.infer<typeof startInstance422Schema>;
/**
 * @description Successful Response
 */
export const startInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type StartInstanceMutationResponseSchema = z.infer<typeof startInstanceMutationResponseSchema>;