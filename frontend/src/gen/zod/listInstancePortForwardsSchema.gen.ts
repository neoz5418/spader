import { z } from "@/utils/zod.ts";
import { portForwardSchema } from "./portForwardSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const listInstancePortForwardsPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type ListInstancePortForwardsPathParamsSchema = z.infer<typeof listInstancePortForwardsPathParamsSchema>;
/**
 * @description Successful Response
 */
export const listInstancePortForwards200Schema = z.array(z.lazy(() => portForwardSchema));
export type ListInstancePortForwards200Schema = z.infer<typeof listInstancePortForwards200Schema>;
/**
 * @description Unprocessable Entity
 */
export const listInstancePortForwards422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type ListInstancePortForwards422Schema = z.infer<typeof listInstancePortForwards422Schema>;
/**
 * @description Successful Response
 */
export const listInstancePortForwardsQueryResponseSchema = z.array(z.lazy(() => portForwardSchema));
export type ListInstancePortForwardsQueryResponseSchema = z.infer<typeof listInstancePortForwardsQueryResponseSchema>;