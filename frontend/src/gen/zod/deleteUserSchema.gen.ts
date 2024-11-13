import { z } from "@/utils/zod.ts";
import { errorSchema } from "./errorSchema.gen";


export const deleteUserPathParamsSchema = z.object({ "username": z.string() });
export type DeleteUserPathParamsSchema = z.infer<typeof deleteUserPathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteUser204Schema = z.any();
export type DeleteUser204Schema = z.infer<typeof deleteUser204Schema>;
/**
 * @description Request error
 */
export const deleteUser400Schema = z.lazy(() => errorSchema);
export type DeleteUser400Schema = z.infer<typeof deleteUser400Schema>;
/**
 * @description Unauthorized
 */
export const deleteUser401Schema = z.lazy(() => errorSchema);
export type DeleteUser401Schema = z.infer<typeof deleteUser401Schema>;
/**
 * @description Not found
 */
export const deleteUser404Schema = z.lazy(() => errorSchema);
export type DeleteUser404Schema = z.infer<typeof deleteUser404Schema>;
/**
 * @description Validation error
 */
export const deleteUser422Schema = z.lazy(() => errorSchema);
export type DeleteUser422Schema = z.infer<typeof deleteUser422Schema>;
/**
 * @description Rate limit exceeded
 */
export const deleteUser429Schema = z.lazy(() => errorSchema);
export type DeleteUser429Schema = z.infer<typeof deleteUser429Schema>;
/**
 * @description Internal server error
 */
export const deleteUser500Schema = z.lazy(() => errorSchema);
export type DeleteUser500Schema = z.infer<typeof deleteUser500Schema>;
/**
 * @description Service unavailable
 */
export const deleteUser503Schema = z.lazy(() => errorSchema);
export type DeleteUser503Schema = z.infer<typeof deleteUser503Schema>;

 export const deleteUserMutationResponseSchema = z.any();
export type DeleteUserMutationResponseSchema = z.infer<typeof deleteUserMutationResponseSchema>;