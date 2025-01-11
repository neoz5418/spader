import { z } from "@/utils/zod.ts";
import { instanceCostSchema } from "./instanceCostSchema.gen";
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
import { createInstanceRequestSchema } from "./createInstanceRequestSchema.gen";


export const calculateInstanceCostPathParamsSchema = z.object({ "workspace": z.string() });
export type CalculateInstanceCostPathParamsSchema = z.infer<typeof calculateInstanceCostPathParamsSchema>;
/**
 * @description Successful Response
 */
export const calculateInstanceCost200Schema = z.lazy(() => instanceCostSchema);
export type CalculateInstanceCost200Schema = z.infer<typeof calculateInstanceCost200Schema>;
/**
 * @description Unprocessable Entity
 */
export const calculateInstanceCost422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CalculateInstanceCost422Schema = z.infer<typeof calculateInstanceCost422Schema>;

 export const calculateInstanceCostMutationRequestSchema = z.lazy(() => createInstanceRequestSchema);
export type CalculateInstanceCostMutationRequestSchema = z.infer<typeof calculateInstanceCostMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const calculateInstanceCostMutationResponseSchema = z.lazy(() => instanceCostSchema);
export type CalculateInstanceCostMutationResponseSchema = z.infer<typeof calculateInstanceCostMutationResponseSchema>;