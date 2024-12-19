export const workspaceRole = {
	owner: "owner",
	admin: "admin",
	member: "member",
} as const;
export type WorkspaceRoleType =
	(typeof workspaceRole)[keyof typeof workspaceRole];
