import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
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


export const deleteInstancePathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type DeleteInstancePathParamsSchema = z.infer<typeof deleteInstancePathParamsSchema>;

 export const deleteInstanceQueryParamsSchema = z.object({ "force": z.union([z.boolean(), z.null()]).optional() }).optional();
export type DeleteInstanceQueryParamsSchema = z.infer<typeof deleteInstanceQueryParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteInstance200Schema = z.lazy(() => operationSchema);
export type DeleteInstance200Schema = z.infer<typeof deleteInstance200Schema>;
/**
 * @description Unprocessable Entity
 */
export const deleteInstance422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type DeleteInstance422Schema = z.infer<typeof deleteInstance422Schema>;
/**
 * @description Successful Response
 */
export const deleteInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type DeleteInstanceMutationResponseSchema = z.infer<typeof deleteInstanceMutationResponseSchema>;
