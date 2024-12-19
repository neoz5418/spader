export const role = {
	global_admin: "global_admin",
	user: "user",
} as const;
export type RoleType = (typeof role)[keyof typeof role];
