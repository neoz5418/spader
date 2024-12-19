import {
	auth422Schema,
	authMutationRequestSchema,
	authMutationResponseSchema,
} from "./authSchema.gen";
import {
	checkWorkspaceAccountRecharge422Schema,
	checkWorkspaceAccountRechargeMutationResponseSchema,
	checkWorkspaceAccountRechargePathParamsSchema,
} from "./checkWorkspaceAccountRechargeSchema.gen";
import {
	createFileStorage422Schema,
	createFileStorageMutationRequestSchema,
	createFileStorageMutationResponseSchema,
	createFileStoragePathParamsSchema,
} from "./createFileStorageSchema.gen";
import {
	createImage422Schema,
	createImageMutationRequestSchema,
	createImageMutationResponseSchema,
	createImagePathParamsSchema,
} from "./createImageSchema.gen";
import {
	createInstancePortForward422Schema,
	createInstancePortForwardMutationRequestSchema,
	createInstancePortForwardMutationResponseSchema,
	createInstancePortForwardPathParamsSchema,
} from "./createInstancePortForwardSchema.gen";
import {
	createInstance422Schema,
	createInstanceMutationRequestSchema,
	createInstanceMutationResponseSchema,
	createInstancePathParamsSchema,
} from "./createInstanceSchema.gen";
import {
	createWorkspace422Schema,
	createWorkspaceMutationRequestSchema,
	createWorkspaceMutationResponseSchema,
	createWorkspacePathParamsSchema,
} from "./createWorkspaceSchema.gen";
import {
	createWorkspaceSshKeys422Schema,
	createWorkspaceSshKeysMutationRequestSchema,
	createWorkspaceSshKeysMutationResponseSchema,
	createWorkspaceSshKeysPathParamsSchema,
} from "./createWorkspaceSshKeysSchema.gen";
import {
	createZone422Schema,
	createZoneMutationRequestSchema,
	createZoneMutationResponseSchema,
} from "./createZoneSchema.gen";
import {
	deleteFileStorage422Schema,
	deleteFileStorageMutationResponseSchema,
	deleteFileStoragePathParamsSchema,
} from "./deleteFileStorageSchema.gen";
import {
	deleteInstancePortForward422Schema,
	deleteInstancePortForwardMutationResponseSchema,
	deleteInstancePortForwardPathParamsSchema,
} from "./deleteInstancePortForwardSchema.gen";
import {
	deleteInstance422Schema,
	deleteInstanceMutationResponseSchema,
	deleteInstancePathParamsSchema,
} from "./deleteInstanceSchema.gen";
import {
	deleteUser422Schema,
	deleteUserMutationResponseSchema,
	deleteUserPathParamsSchema,
} from "./deleteUserSchema.gen";
import {
	deleteWorkspace422Schema,
	deleteWorkspaceMutationResponseSchema,
	deleteWorkspacePathParamsSchema,
} from "./deleteWorkspaceSchema.gen";
import {
	deleteWorkspaceSshKeys422Schema,
	deleteWorkspaceSshKeysMutationResponseSchema,
	deleteWorkspaceSshKeysPathParamsSchema,
} from "./deleteWorkspaceSshKeysSchema.gen";
import {
	getCurrentUser422Schema,
	getCurrentUserQueryResponseSchema,
} from "./getCurrentUserSchema.gen";
import {
	getFileStorage422Schema,
	getFileStoragePathParamsSchema,
	getFileStorageQueryResponseSchema,
} from "./getFileStorageSchema.gen";
import {
	getInstance422Schema,
	getInstancePathParamsSchema,
	getInstanceQueryResponseSchema,
} from "./getInstanceSchema.gen";
import {
	getUserQuota422Schema,
	getUserQuotaPathParamsSchema,
	getUserQuotaQueryResponseSchema,
} from "./getUserQuotaSchema.gen";
import {
	getUser422Schema,
	getUserPathParamsSchema,
	getUserQueryResponseSchema,
} from "./getUserSchema.gen";
import {
	getWorkspaceAccountRecharge422Schema,
	getWorkspaceAccountRechargePathParamsSchema,
	getWorkspaceAccountRechargeQueryResponseSchema,
} from "./getWorkspaceAccountRechargeSchema.gen";
import {
	getWorkspaceAccount422Schema,
	getWorkspaceAccountPathParamsSchema,
	getWorkspaceAccountQueryResponseSchema,
} from "./getWorkspaceAccountSchema.gen";
import {
	getWorkspaceInvitations422Schema,
	getWorkspaceInvitationsPathParamsSchema,
	getWorkspaceInvitationsQueryResponseSchema,
} from "./getWorkspaceInvitationsSchema.gen";
import {
	getWorkspaceMembers422Schema,
	getWorkspaceMembersPathParamsSchema,
	getWorkspaceMembersQueryResponseSchema,
} from "./getWorkspaceMembersSchema.gen";
import {
	getWorkspaceOperation422Schema,
	getWorkspaceOperationPathParamsSchema,
	getWorkspaceOperationQueryResponseSchema,
} from "./getWorkspaceOperationSchema.gen";
import {
	getWorkspaceOperations422Schema,
	getWorkspaceOperationsPathParamsSchema,
	getWorkspaceOperationsQueryParamsSchema,
	getWorkspaceOperationsQueryResponseSchema,
} from "./getWorkspaceOperationsSchema.gen";
import {
	getWorkspaceQuota422Schema,
	getWorkspaceQuotaPathParamsSchema,
	getWorkspaceQuotaQueryResponseSchema,
} from "./getWorkspaceQuotaSchema.gen";
import {
	getWorkspace422Schema,
	getWorkspacePathParamsSchema,
	getWorkspaceQueryResponseSchema,
} from "./getWorkspaceSchema.gen";
import {
	getWorkspaceZoneQuota422Schema,
	getWorkspaceZoneQuotaPathParamsSchema,
	getWorkspaceZoneQuotaQueryResponseSchema,
} from "./getWorkspaceZoneQuotaSchema.gen";
import {
	listFilesInFileStorage422Schema,
	listFilesInFileStoragePathParamsSchema,
	listFilesInFileStorageQueryParamsSchema,
	listFilesInFileStorageQueryResponseSchema,
} from "./listFilesInFileStorageSchema.gen";
import {
	listGpuTypes422Schema,
	listGpuTypesQueryParamsSchema,
	listGpuTypesQueryResponseSchema,
} from "./listGpuTypesSchema.gen";
import {
	listInstancePortForwards422Schema,
	listInstancePortForwardsPathParamsSchema,
	listInstancePortForwardsQueryResponseSchema,
} from "./listInstancePortForwardsSchema.gen";
import {
	listInstances422Schema,
	listInstancesQueryParamsSchema,
	listInstancesQueryResponseSchema,
} from "./listInstancesSchema.gen";
import {
	listUserWorkspaces422Schema,
	listUserWorkspacesPathParamsSchema,
	listUserWorkspacesQueryParamsSchema,
	listUserWorkspacesQueryResponseSchema,
} from "./listUserWorkspacesSchema.gen";
import {
	listUsers422Schema,
	listUsersQueryParamsSchema,
	listUsersQueryResponseSchema,
} from "./listUsersSchema.gen";
import {
	listWorkspaceAccountRecharges422Schema,
	listWorkspaceAccountRechargesPathParamsSchema,
	listWorkspaceAccountRechargesQueryParamsSchema,
	listWorkspaceAccountRechargesQueryResponseSchema,
} from "./listWorkspaceAccountRechargesSchema.gen";
import {
	listWorkspaceFileStorages422Schema,
	listWorkspaceFileStoragesPathParamsSchema,
	listWorkspaceFileStoragesQueryParamsSchema,
	listWorkspaceFileStoragesQueryResponseSchema,
} from "./listWorkspaceFileStoragesSchema.gen";
import {
	listWorkspaceGpuTypes422Schema,
	listWorkspaceGpuTypesPathParamsSchema,
	listWorkspaceGpuTypesQueryParamsSchema,
	listWorkspaceGpuTypesQueryResponseSchema,
} from "./listWorkspaceGpuTypesSchema.gen";
import {
	listWorkspaceImages422Schema,
	listWorkspaceImagesPathParamsSchema,
	listWorkspaceImagesQueryParamsSchema,
	listWorkspaceImagesQueryResponseSchema,
} from "./listWorkspaceImagesSchema.gen";
import {
	listWorkspaceInstances422Schema,
	listWorkspaceInstancesPathParamsSchema,
	listWorkspaceInstancesQueryParamsSchema,
	listWorkspaceInstancesQueryResponseSchema,
} from "./listWorkspaceInstancesSchema.gen";
import {
	listWorkspaceOperations422Schema,
	listWorkspaceOperationsPathParamsSchema,
	listWorkspaceOperationsQueryParamsSchema,
	listWorkspaceOperationsQueryResponseSchema,
} from "./listWorkspaceOperationsSchema.gen";
import {
	listWorkspaceResourceUsageRecords422Schema,
	listWorkspaceResourceUsageRecordsPathParamsSchema,
	listWorkspaceResourceUsageRecordsQueryParamsSchema,
	listWorkspaceResourceUsageRecordsQueryResponseSchema,
} from "./listWorkspaceResourceUsageRecordsSchema.gen";
import {
	listWorkspaceSshKeys422Schema,
	listWorkspaceSshKeysPathParamsSchema,
	listWorkspaceSshKeysQueryResponseSchema,
} from "./listWorkspaceSshKeysSchema.gen";
import {
	listWorkspaceZones422Schema,
	listWorkspaceZonesPathParamsSchema,
	listWorkspaceZonesQueryParamsSchema,
	listWorkspaceZonesQueryResponseSchema,
} from "./listWorkspaceZonesSchema.gen";
import {
	listWorkspaces422Schema,
	listWorkspacesQueryParamsSchema,
	listWorkspacesQueryResponseSchema,
} from "./listWorkspacesSchema.gen";
import {
	listZones422Schema,
	listZonesQueryParamsSchema,
	listZonesQueryResponseSchema,
} from "./listZonesSchema.gen";
import {
	rechargeWorkspaceAccount422Schema,
	rechargeWorkspaceAccountMutationRequestSchema,
	rechargeWorkspaceAccountMutationResponseSchema,
	rechargeWorkspaceAccountPathParamsSchema,
} from "./rechargeWorkspaceAccountSchema.gen";
import {
	registerUser422Schema,
	registerUserMutationRequestSchema,
	registerUserMutationResponseSchema,
} from "./registerUserSchema.gen";
import {
	replaceUserQuota422Schema,
	replaceUserQuotaMutationResponseSchema,
	replaceUserQuotaPathParamsSchema,
} from "./replaceUserQuotaSchema.gen";
import {
	replaceWorkspaceQuota422Schema,
	replaceWorkspaceQuotaMutationRequestSchema,
	replaceWorkspaceQuotaMutationResponseSchema,
	replaceWorkspaceQuotaPathParamsSchema,
} from "./replaceWorkspaceQuotaSchema.gen";
import {
	sendOneTimePassword422Schema,
	sendOneTimePasswordMutationRequestSchema,
	sendOneTimePasswordMutationResponseSchema,
} from "./sendOneTimePasswordSchema.gen";
import {
	startInstance422Schema,
	startInstanceMutationResponseSchema,
	startInstancePathParamsSchema,
} from "./startInstanceSchema.gen";
import {
	stopInstance422Schema,
	stopInstanceMutationResponseSchema,
	stopInstancePathParamsSchema,
} from "./stopInstanceSchema.gen";
import {
	token422Schema,
	tokenMutationRequestSchema,
	tokenMutationResponseSchema,
} from "./tokenSchema.gen";
import {
	updateImage422Schema,
	updateImageMutationResponseSchema,
	updateImagePathParamsSchema,
} from "./updateImageSchema.gen";
import {
	updateUserQuota422Schema,
	updateUserQuotaMutationResponseSchema,
	updateUserQuotaPathParamsSchema,
} from "./updateUserQuotaSchema.gen";
import {
	updateWorkspaceQuota422Schema,
	updateWorkspaceQuotaMutationRequestSchema,
	updateWorkspaceQuotaMutationResponseSchema,
	updateWorkspaceQuotaPathParamsSchema,
} from "./updateWorkspaceQuotaSchema.gen";

export const operations = {
	get_current_user: {
		request: undefined,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getCurrentUserQueryResponseSchema,
			422: getCurrentUser422Schema,
			default: getCurrentUserQueryResponseSchema,
		},
		errors: {
			422: getCurrentUser422Schema,
		},
	},
	list_users: {
		request: undefined,
		parameters: {
			path: undefined,
			query: listUsersQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listUsersQueryResponseSchema,
			422: listUsers422Schema,
			default: listUsersQueryResponseSchema,
		},
		errors: {
			422: listUsers422Schema,
		},
	},
	register_user: {
		request: registerUserMutationRequestSchema,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: registerUserMutationResponseSchema,
			422: registerUser422Schema,
			default: registerUserMutationResponseSchema,
		},
		errors: {
			422: registerUser422Schema,
		},
	},
	get_user: {
		request: undefined,
		parameters: {
			path: getUserPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getUserQueryResponseSchema,
			422: getUser422Schema,
			default: getUserQueryResponseSchema,
		},
		errors: {
			422: getUser422Schema,
		},
	},
	delete_user: {
		request: undefined,
		parameters: {
			path: deleteUserPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			204: deleteUserMutationResponseSchema,
			422: deleteUser422Schema,
			default: deleteUserMutationResponseSchema,
		},
		errors: {
			422: deleteUser422Schema,
		},
	},
	send_one_time_password: {
		request: sendOneTimePasswordMutationRequestSchema,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: sendOneTimePasswordMutationResponseSchema,
			422: sendOneTimePassword422Schema,
			default: sendOneTimePasswordMutationResponseSchema,
		},
		errors: {
			422: sendOneTimePassword422Schema,
		},
	},
	get_user_quota: {
		request: undefined,
		parameters: {
			path: getUserQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getUserQuotaQueryResponseSchema,
			422: getUserQuota422Schema,
			default: getUserQuotaQueryResponseSchema,
		},
		errors: {
			422: getUserQuota422Schema,
		},
	},
	update_user_quota: {
		request: undefined,
		parameters: {
			path: updateUserQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: updateUserQuotaMutationResponseSchema,
			422: updateUserQuota422Schema,
			default: updateUserQuotaMutationResponseSchema,
		},
		errors: {
			422: updateUserQuota422Schema,
		},
	},
	replace_user_quota: {
		request: undefined,
		parameters: {
			path: replaceUserQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: replaceUserQuotaMutationResponseSchema,
			422: replaceUserQuota422Schema,
			default: replaceUserQuotaMutationResponseSchema,
		},
		errors: {
			422: replaceUserQuota422Schema,
		},
	},
	create_workspace: {
		request: createWorkspaceMutationRequestSchema,
		parameters: {
			path: createWorkspacePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createWorkspaceMutationResponseSchema,
			422: createWorkspace422Schema,
			default: createWorkspaceMutationResponseSchema,
		},
		errors: {
			422: createWorkspace422Schema,
		},
	},
	list_user_workspaces: {
		request: undefined,
		parameters: {
			path: listUserWorkspacesPathParamsSchema,
			query: listUserWorkspacesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listUserWorkspacesQueryResponseSchema,
			422: listUserWorkspaces422Schema,
			default: listUserWorkspacesQueryResponseSchema,
		},
		errors: {
			422: listUserWorkspaces422Schema,
		},
	},
	list_workspaces: {
		request: undefined,
		parameters: {
			path: undefined,
			query: listWorkspacesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspacesQueryResponseSchema,
			422: listWorkspaces422Schema,
			default: listWorkspacesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaces422Schema,
		},
	},
	get_workspace: {
		request: undefined,
		parameters: {
			path: getWorkspacePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceQueryResponseSchema,
			422: getWorkspace422Schema,
			default: getWorkspaceQueryResponseSchema,
		},
		errors: {
			422: getWorkspace422Schema,
		},
	},
	delete_workspace: {
		request: undefined,
		parameters: {
			path: deleteWorkspacePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			204: deleteWorkspaceMutationResponseSchema,
			422: deleteWorkspace422Schema,
			default: deleteWorkspaceMutationResponseSchema,
		},
		errors: {
			422: deleteWorkspace422Schema,
		},
	},
	get_workspace_quota: {
		request: undefined,
		parameters: {
			path: getWorkspaceQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceQuotaQueryResponseSchema,
			422: getWorkspaceQuota422Schema,
			default: getWorkspaceQuotaQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceQuota422Schema,
		},
	},
	update_workspace_quota: {
		request: updateWorkspaceQuotaMutationRequestSchema,
		parameters: {
			path: updateWorkspaceQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: updateWorkspaceQuotaMutationResponseSchema,
			422: updateWorkspaceQuota422Schema,
			default: updateWorkspaceQuotaMutationResponseSchema,
		},
		errors: {
			422: updateWorkspaceQuota422Schema,
		},
	},
	replace_workspace_quota: {
		request: replaceWorkspaceQuotaMutationRequestSchema,
		parameters: {
			path: replaceWorkspaceQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: replaceWorkspaceQuotaMutationResponseSchema,
			422: replaceWorkspaceQuota422Schema,
			default: replaceWorkspaceQuotaMutationResponseSchema,
		},
		errors: {
			422: replaceWorkspaceQuota422Schema,
		},
	},
	get_workspace_account: {
		request: undefined,
		parameters: {
			path: getWorkspaceAccountPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceAccountQueryResponseSchema,
			422: getWorkspaceAccount422Schema,
			default: getWorkspaceAccountQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceAccount422Schema,
		},
	},
	recharge_workspace_account: {
		request: rechargeWorkspaceAccountMutationRequestSchema,
		parameters: {
			path: rechargeWorkspaceAccountPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: rechargeWorkspaceAccountMutationResponseSchema,
			422: rechargeWorkspaceAccount422Schema,
			default: rechargeWorkspaceAccountMutationResponseSchema,
		},
		errors: {
			422: rechargeWorkspaceAccount422Schema,
		},
	},
	list_workspace_account_recharges: {
		request: undefined,
		parameters: {
			path: listWorkspaceAccountRechargesPathParamsSchema,
			query: listWorkspaceAccountRechargesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceAccountRechargesQueryResponseSchema,
			422: listWorkspaceAccountRecharges422Schema,
			default: listWorkspaceAccountRechargesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceAccountRecharges422Schema,
		},
	},
	get_workspace_account_recharge: {
		request: undefined,
		parameters: {
			path: getWorkspaceAccountRechargePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceAccountRechargeQueryResponseSchema,
			422: getWorkspaceAccountRecharge422Schema,
			default: getWorkspaceAccountRechargeQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceAccountRecharge422Schema,
		},
	},
	check_workspace_account_recharge: {
		request: undefined,
		parameters: {
			path: checkWorkspaceAccountRechargePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: checkWorkspaceAccountRechargeMutationResponseSchema,
			422: checkWorkspaceAccountRecharge422Schema,
			default: checkWorkspaceAccountRechargeMutationResponseSchema,
		},
		errors: {
			422: checkWorkspaceAccountRecharge422Schema,
		},
	},
	list_workspace_resource_usage_records: {
		request: undefined,
		parameters: {
			path: listWorkspaceResourceUsageRecordsPathParamsSchema,
			query: listWorkspaceResourceUsageRecordsQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceResourceUsageRecordsQueryResponseSchema,
			422: listWorkspaceResourceUsageRecords422Schema,
			default: listWorkspaceResourceUsageRecordsQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceResourceUsageRecords422Schema,
		},
	},
	list_workspace_ssh_keys: {
		request: undefined,
		parameters: {
			path: listWorkspaceSshKeysPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: listWorkspaceSshKeysQueryResponseSchema,
			422: listWorkspaceSshKeys422Schema,
			default: listWorkspaceSshKeysQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceSshKeys422Schema,
		},
	},
	create_workspace_ssh_keys: {
		request: createWorkspaceSshKeysMutationRequestSchema,
		parameters: {
			path: createWorkspaceSshKeysPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createWorkspaceSshKeysMutationResponseSchema,
			422: createWorkspaceSshKeys422Schema,
			default: createWorkspaceSshKeysMutationResponseSchema,
		},
		errors: {
			422: createWorkspaceSshKeys422Schema,
		},
	},
	delete_workspace_ssh_keys: {
		request: undefined,
		parameters: {
			path: deleteWorkspaceSshKeysPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			204: deleteWorkspaceSshKeysMutationResponseSchema,
			422: deleteWorkspaceSshKeys422Schema,
			default: deleteWorkspaceSshKeysMutationResponseSchema,
		},
		errors: {
			422: deleteWorkspaceSshKeys422Schema,
		},
	},
	get_workspace_members: {
		request: undefined,
		parameters: {
			path: getWorkspaceMembersPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceMembersQueryResponseSchema,
			422: getWorkspaceMembers422Schema,
			default: getWorkspaceMembersQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceMembers422Schema,
		},
	},
	get_workspace_invitations: {
		request: undefined,
		parameters: {
			path: getWorkspaceInvitationsPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceInvitationsQueryResponseSchema,
			422: getWorkspaceInvitations422Schema,
			default: getWorkspaceInvitationsQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceInvitations422Schema,
		},
	},
	get_workspace_operations: {
		request: undefined,
		parameters: {
			path: getWorkspaceOperationsPathParamsSchema,
			query: getWorkspaceOperationsQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: getWorkspaceOperationsQueryResponseSchema,
			422: getWorkspaceOperations422Schema,
			default: getWorkspaceOperationsQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceOperations422Schema,
		},
	},
	create_zone: {
		request: createZoneMutationRequestSchema,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createZoneMutationResponseSchema,
			422: createZone422Schema,
			default: createZoneMutationResponseSchema,
		},
		errors: {
			422: createZone422Schema,
		},
	},
	list_zones: {
		request: undefined,
		parameters: {
			path: undefined,
			query: listZonesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listZonesQueryResponseSchema,
			422: listZones422Schema,
			default: listZonesQueryResponseSchema,
		},
		errors: {
			422: listZones422Schema,
		},
	},
	list_gpu_types: {
		request: undefined,
		parameters: {
			path: undefined,
			query: listGpuTypesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listGpuTypesQueryResponseSchema,
			422: listGpuTypes422Schema,
			default: listGpuTypesQueryResponseSchema,
		},
		errors: {
			422: listGpuTypes422Schema,
		},
	},
	list_workspace_zones: {
		request: undefined,
		parameters: {
			path: listWorkspaceZonesPathParamsSchema,
			query: listWorkspaceZonesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceZonesQueryResponseSchema,
			422: listWorkspaceZones422Schema,
			default: listWorkspaceZonesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceZones422Schema,
		},
	},
	list_workspace_gpu_types: {
		request: undefined,
		parameters: {
			path: listWorkspaceGpuTypesPathParamsSchema,
			query: listWorkspaceGpuTypesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceGpuTypesQueryResponseSchema,
			422: listWorkspaceGpuTypes422Schema,
			default: listWorkspaceGpuTypesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceGpuTypes422Schema,
		},
	},
	get_workspace_zone_quota: {
		request: undefined,
		parameters: {
			path: getWorkspaceZoneQuotaPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceZoneQuotaQueryResponseSchema,
			422: getWorkspaceZoneQuota422Schema,
			default: getWorkspaceZoneQuotaQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceZoneQuota422Schema,
		},
	},
	list_instances: {
		request: undefined,
		parameters: {
			path: undefined,
			query: listInstancesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listInstancesQueryResponseSchema,
			422: listInstances422Schema,
			default: listInstancesQueryResponseSchema,
		},
		errors: {
			422: listInstances422Schema,
		},
	},
	list_workspace_instances: {
		request: undefined,
		parameters: {
			path: listWorkspaceInstancesPathParamsSchema,
			query: listWorkspaceInstancesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceInstancesQueryResponseSchema,
			422: listWorkspaceInstances422Schema,
			default: listWorkspaceInstancesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceInstances422Schema,
		},
	},
	create_instance: {
		request: createInstanceMutationRequestSchema,
		parameters: {
			path: createInstancePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createInstanceMutationResponseSchema,
			422: createInstance422Schema,
			default: createInstanceMutationResponseSchema,
		},
		errors: {
			422: createInstance422Schema,
		},
	},
	get_instance: {
		request: undefined,
		parameters: {
			path: getInstancePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getInstanceQueryResponseSchema,
			422: getInstance422Schema,
			default: getInstanceQueryResponseSchema,
		},
		errors: {
			422: getInstance422Schema,
		},
	},
	delete_instance: {
		request: undefined,
		parameters: {
			path: deleteInstancePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: deleteInstanceMutationResponseSchema,
			422: deleteInstance422Schema,
			default: deleteInstanceMutationResponseSchema,
		},
		errors: {
			422: deleteInstance422Schema,
		},
	},
	start_instance: {
		request: undefined,
		parameters: {
			path: startInstancePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: startInstanceMutationResponseSchema,
			422: startInstance422Schema,
			default: startInstanceMutationResponseSchema,
		},
		errors: {
			422: startInstance422Schema,
		},
	},
	stop_instance: {
		request: undefined,
		parameters: {
			path: stopInstancePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: stopInstanceMutationResponseSchema,
			422: stopInstance422Schema,
			default: stopInstanceMutationResponseSchema,
		},
		errors: {
			422: stopInstance422Schema,
		},
	},
	create_instance_port_forward: {
		request: createInstancePortForwardMutationRequestSchema,
		parameters: {
			path: createInstancePortForwardPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createInstancePortForwardMutationResponseSchema,
			422: createInstancePortForward422Schema,
			default: createInstancePortForwardMutationResponseSchema,
		},
		errors: {
			422: createInstancePortForward422Schema,
		},
	},
	delete_instance_port_forward: {
		request: undefined,
		parameters: {
			path: deleteInstancePortForwardPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			204: deleteInstancePortForwardMutationResponseSchema,
			422: deleteInstancePortForward422Schema,
			default: deleteInstancePortForwardMutationResponseSchema,
		},
		errors: {
			422: deleteInstancePortForward422Schema,
		},
	},
	list_instance_port_forwards: {
		request: undefined,
		parameters: {
			path: listInstancePortForwardsPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: listInstancePortForwardsQueryResponseSchema,
			422: listInstancePortForwards422Schema,
			default: listInstancePortForwardsQueryResponseSchema,
		},
		errors: {
			422: listInstancePortForwards422Schema,
		},
	},
	list_workspace_operations: {
		request: undefined,
		parameters: {
			path: listWorkspaceOperationsPathParamsSchema,
			query: listWorkspaceOperationsQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceOperationsQueryResponseSchema,
			422: listWorkspaceOperations422Schema,
			default: listWorkspaceOperationsQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceOperations422Schema,
		},
	},
	get_workspace_operation: {
		request: undefined,
		parameters: {
			path: getWorkspaceOperationPathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getWorkspaceOperationQueryResponseSchema,
			422: getWorkspaceOperation422Schema,
			default: getWorkspaceOperationQueryResponseSchema,
		},
		errors: {
			422: getWorkspaceOperation422Schema,
		},
	},
	create_file_storage: {
		request: createFileStorageMutationRequestSchema,
		parameters: {
			path: createFileStoragePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createFileStorageMutationResponseSchema,
			422: createFileStorage422Schema,
			default: createFileStorageMutationResponseSchema,
		},
		errors: {
			422: createFileStorage422Schema,
		},
	},
	list_workspace_file_storages: {
		request: undefined,
		parameters: {
			path: listWorkspaceFileStoragesPathParamsSchema,
			query: listWorkspaceFileStoragesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceFileStoragesQueryResponseSchema,
			422: listWorkspaceFileStorages422Schema,
			default: listWorkspaceFileStoragesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceFileStorages422Schema,
		},
	},
	get_file_storage: {
		request: undefined,
		parameters: {
			path: getFileStoragePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: getFileStorageQueryResponseSchema,
			422: getFileStorage422Schema,
			default: getFileStorageQueryResponseSchema,
		},
		errors: {
			422: getFileStorage422Schema,
		},
	},
	delete_file_storage: {
		request: undefined,
		parameters: {
			path: deleteFileStoragePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: deleteFileStorageMutationResponseSchema,
			422: deleteFileStorage422Schema,
			default: deleteFileStorageMutationResponseSchema,
		},
		errors: {
			422: deleteFileStorage422Schema,
		},
	},
	list_files_in_file_storage: {
		request: undefined,
		parameters: {
			path: listFilesInFileStoragePathParamsSchema,
			query: listFilesInFileStorageQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listFilesInFileStorageQueryResponseSchema,
			422: listFilesInFileStorage422Schema,
			default: listFilesInFileStorageQueryResponseSchema,
		},
		errors: {
			422: listFilesInFileStorage422Schema,
		},
	},
	create_image: {
		request: createImageMutationRequestSchema,
		parameters: {
			path: createImagePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			201: createImageMutationResponseSchema,
			422: createImage422Schema,
			default: createImageMutationResponseSchema,
		},
		errors: {
			422: createImage422Schema,
		},
	},
	update_image: {
		request: undefined,
		parameters: {
			path: updateImagePathParamsSchema,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: updateImageMutationResponseSchema,
			422: updateImage422Schema,
			default: updateImageMutationResponseSchema,
		},
		errors: {
			422: updateImage422Schema,
		},
	},
	list_workspace_images: {
		request: undefined,
		parameters: {
			path: listWorkspaceImagesPathParamsSchema,
			query: listWorkspaceImagesQueryParamsSchema,
			header: undefined,
		},
		responses: {
			200: listWorkspaceImagesQueryResponseSchema,
			422: listWorkspaceImages422Schema,
			default: listWorkspaceImagesQueryResponseSchema,
		},
		errors: {
			422: listWorkspaceImages422Schema,
		},
	},
	auth: {
		request: authMutationRequestSchema,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: authMutationResponseSchema,
			422: auth422Schema,
			default: authMutationResponseSchema,
		},
		errors: {
			422: auth422Schema,
		},
	},
	token: {
		request: tokenMutationRequestSchema,
		parameters: {
			path: undefined,
			query: undefined,
			header: undefined,
		},
		responses: {
			200: tokenMutationResponseSchema,
			422: token422Schema,
			default: tokenMutationResponseSchema,
		},
		errors: {
			422: token422Schema,
		},
	},
} as const;
export const paths = {
	"/apis/user/v1/users/me": {
		get: operations["get_current_user"],
	},
	"/apis/user/v1/users/": {
		get: operations["list_users"],
		post: operations["register_user"],
	},
	"/apis/user/v1/users/{username}": {
		get: operations["get_user"],
		delete: operations["delete_user"],
	},
	"/apis/user/v1/one_time_password": {
		post: operations["send_one_time_password"],
	},
	"/apis/user/v1/users/{username}/quota": {
		get: operations["get_user_quota"],
		patch: operations["update_user_quota"],
		put: operations["replace_user_quota"],
	},
	"/apis/workspace/v1/users/{username}/workspaces": {
		post: operations["create_workspace"],
		get: operations["list_user_workspaces"],
	},
	"/apis/workspace/v1/workspaces": {
		get: operations["list_workspaces"],
	},
	"/apis/workspace/v1/workspaces/{workspace}": {
		get: operations["get_workspace"],
		delete: operations["delete_workspace"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/quota": {
		get: operations["get_workspace_quota"],
		patch: operations["update_workspace_quota"],
		put: operations["replace_workspace_quota"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/account": {
		get: operations["get_workspace_account"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/account/recharge": {
		post: operations["recharge_workspace_account"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/account/recharges": {
		get: operations["list_workspace_account_recharges"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/account/recharges/{recharge_id}": {
		get: operations["get_workspace_account_recharge"],
	},
	"/apis/workspace/v1/recharges/{recharge_id}/check": {
		post: operations["check_workspace_account_recharge"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/resource_usage_record": {
		get: operations["list_workspace_resource_usage_records"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/ssh_keys": {
		get: operations["list_workspace_ssh_keys"],
		post: operations["create_workspace_ssh_keys"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/ssh_keys/{name}": {
		delete: operations["delete_workspace_ssh_keys"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/members": {
		get: operations["get_workspace_members"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/invitations": {
		get: operations["get_workspace_invitations"],
	},
	"/apis/workspace/v1/workspaces/{workspace}/operations": {
		get: operations["get_workspace_operations"],
	},
	"/apis/compute/v1/zones/": {
		post: operations["create_zone"],
	},
	"/apis/compute/v1/zones": {
		get: operations["list_zones"],
	},
	"/apis/compute/v1/gpu_types": {
		get: operations["list_gpu_types"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones": {
		get: operations["list_workspace_zones"],
	},
	"/apis/compute/v1/workspaces/{workspace}/gpu_types": {
		get: operations["list_workspace_gpu_types"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/quota": {
		get: operations["get_workspace_zone_quota"],
	},
	"/apis/compute/v1/instances": {
		get: operations["list_instances"],
	},
	"/apis/compute/v1/workspaces/{workspace}/instances": {
		get: operations["list_workspace_instances"],
		post: operations["create_instance"],
	},
	"/apis/compute/v1/workspaces/{workspace}/instances/{name}": {
		get: operations["get_instance"],
		delete: operations["delete_instance"],
	},
	"/apis/compute/v1/workspaces/{workspace}/instances/{name}/start": {
		post: operations["start_instance"],
	},
	"/apis/compute/v1/workspaces/{workspace}/instances/{name}/stop": {
		post: operations["stop_instance"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forward":
		{
			post: operations["create_instance_port_forward"],
		},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forwards/{port_forward_name}":
		{
			delete: operations["delete_instance_port_forward"],
		},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/instances/{name}/port_forwards":
		{
			get: operations["list_instance_port_forwards"],
		},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/operations": {
		get: operations["list_workspace_operations"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/operations/{uid}": {
		get: operations["get_workspace_operation"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages/": {
		post: operations["create_file_storage"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages": {
		get: operations["list_workspace_file_storages"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages/{name}": {
		get: operations["get_file_storage"],
		delete: operations["delete_file_storage"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/file_storages/{name}/files":
		{
			get: operations["list_files_in_file_storage"],
		},
	"/apis/compute/v1/zones/{zone}/images/": {
		post: operations["create_image"],
	},
	"/apis/compute/v1/zones/{zone}/images/{name}": {
		patch: operations["update_image"],
	},
	"/apis/compute/v1/workspaces/{workspace}/zones/{zone}/images": {
		get: operations["list_workspace_images"],
	},
	"/apis/oidc/v1/auth": {
		post: operations["auth"],
	},
	"/apis/oidc/v1/token": {
		post: operations["token"],
	},
} as const;
