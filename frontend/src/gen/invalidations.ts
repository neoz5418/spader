import type { UseMutationOptions } from "@tanstack/react-query";
import type {
	AuthMutationRequestType,
	AuthMutationResponseType,
	CheckWorkspaceAccountRechargeMutationResponseType,
	CreateFileStorageMutationRequestType,
	CreateFileStorageMutationResponseType,
	CreateImageMutationRequestType,
	CreateImageMutationResponseType,
	CreateInstanceMutationRequestType,
	CreateInstanceMutationResponseType,
	CreateInstancePortForwardMutationRequestType,
	CreateInstancePortForwardMutationResponseType,
	CreateWorkspaceMutationRequestType,
	CreateWorkspaceMutationResponseType,
	CreateWorkspaceSshKeysMutationRequestType,
	CreateWorkspaceSshKeysMutationResponseType,
	CreateZoneMutationRequestType,
	CreateZoneMutationResponseType,
	DeleteFileStorageMutationResponseType,
	DeleteInstanceMutationResponseType,
	DeleteInstancePortForwardMutationResponseType,
	DeleteUserMutationResponseType,
	DeleteWorkspaceMutationResponseType,
	DeleteWorkspaceSshKeysMutationResponseType,
	GetCurrentUserQueryResponseType,
	GetFileStorageQueryResponseType,
	GetInstanceQueryResponseType,
	GetUserQueryResponseType,
	GetUserQuotaQueryResponseType,
	GetWorkspaceAccountQueryResponseType,
	GetWorkspaceAccountRechargeQueryResponseType,
	GetWorkspaceInvitationsQueryResponseType,
	GetWorkspaceMembersQueryResponseType,
	GetWorkspaceOperationQueryResponseType,
	GetWorkspaceOperationsQueryResponseType,
	GetWorkspaceQueryResponseType,
	GetWorkspaceQuotaQueryResponseType,
	GetWorkspaceZoneQuotaQueryResponseType,
	ListFilesInFileStorageQueryResponseType,
	ListGpuTypesQueryResponseType,
	ListInstancePortForwardsQueryResponseType,
	ListInstancesQueryResponseType,
	ListUserWorkspacesQueryResponseType,
	ListUsersQueryResponseType,
	ListWorkspaceAccountRechargesQueryResponseType,
	ListWorkspaceFileStoragesQueryResponseType,
	ListWorkspaceGpuTypesQueryResponseType,
	ListWorkspaceImagesQueryResponseType,
	ListWorkspaceInstancesQueryResponseType,
	ListWorkspaceOperationsQueryResponseType,
	ListWorkspaceResourceUsageRecordsQueryResponseType,
	ListWorkspaceSshKeysQueryResponseType,
	ListWorkspaceZonesQueryResponseType,
	ListWorkspacesQueryResponseType,
	ListZonesQueryResponseType,
	RechargeWorkspaceAccountMutationRequestType,
	RechargeWorkspaceAccountMutationResponseType,
	RegisterUserMutationRequestType,
	RegisterUserMutationResponseType,
	ReplaceUserQuotaMutationResponseType,
	ReplaceWorkspaceQuotaMutationRequestType,
	ReplaceWorkspaceQuotaMutationResponseType,
	SendOneTimePasswordMutationRequestType,
	SendOneTimePasswordMutationResponseType,
	StartInstanceMutationResponseType,
	StopInstanceMutationResponseType,
	TokenMutationRequestType,
	TokenMutationResponseType,
	UpdateImageMutationResponseType,
	UpdateUserQuotaMutationResponseType,
	UpdateWorkspaceQuotaMutationRequestType,
	UpdateWorkspaceQuotaMutationResponseType,
} from "./index";

export type Invalidations = {
	useGetCurrentUserHook: UseMutationOptions<
		GetCurrentUserQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListUsersHook: UseMutationOptions<
		ListUsersQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useRegisterUserHook: UseMutationOptions<
		RegisterUserMutationResponseType,
		unknown,
		RegisterUserMutationRequestType
	>["onSuccess"];
	useGetUserHook: UseMutationOptions<
		GetUserQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useDeleteUserHook: UseMutationOptions<
		DeleteUserMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useSendOneTimePasswordHook: UseMutationOptions<
		SendOneTimePasswordMutationResponseType,
		unknown,
		SendOneTimePasswordMutationRequestType
	>["onSuccess"];
	useGetUserQuotaHook: UseMutationOptions<
		GetUserQuotaQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useUpdateUserQuotaHook: UseMutationOptions<
		UpdateUserQuotaMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useReplaceUserQuotaHook: UseMutationOptions<
		ReplaceUserQuotaMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateWorkspaceHook: UseMutationOptions<
		CreateWorkspaceMutationResponseType,
		unknown,
		CreateWorkspaceMutationRequestType
	>["onSuccess"];
	useListUserWorkspacesHook: UseMutationOptions<
		ListUserWorkspacesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspacesHook: UseMutationOptions<
		ListWorkspacesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceHook: UseMutationOptions<
		GetWorkspaceQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useDeleteWorkspaceHook: UseMutationOptions<
		DeleteWorkspaceMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceQuotaHook: UseMutationOptions<
		GetWorkspaceQuotaQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useUpdateWorkspaceQuotaHook: UseMutationOptions<
		UpdateWorkspaceQuotaMutationResponseType,
		unknown,
		UpdateWorkspaceQuotaMutationRequestType
	>["onSuccess"];
	useReplaceWorkspaceQuotaHook: UseMutationOptions<
		ReplaceWorkspaceQuotaMutationResponseType,
		unknown,
		ReplaceWorkspaceQuotaMutationRequestType
	>["onSuccess"];
	useGetWorkspaceAccountHook: UseMutationOptions<
		GetWorkspaceAccountQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useRechargeWorkspaceAccountHook: UseMutationOptions<
		RechargeWorkspaceAccountMutationResponseType,
		unknown,
		RechargeWorkspaceAccountMutationRequestType
	>["onSuccess"];
	useListWorkspaceAccountRechargesHook: UseMutationOptions<
		ListWorkspaceAccountRechargesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceAccountRechargeHook: UseMutationOptions<
		GetWorkspaceAccountRechargeQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useCheckWorkspaceAccountRechargeHook: UseMutationOptions<
		CheckWorkspaceAccountRechargeMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceResourceUsageRecordsHook: UseMutationOptions<
		ListWorkspaceResourceUsageRecordsQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceSshKeysHook: UseMutationOptions<
		ListWorkspaceSshKeysQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateWorkspaceSshKeysHook: UseMutationOptions<
		CreateWorkspaceSshKeysMutationResponseType,
		unknown,
		CreateWorkspaceSshKeysMutationRequestType
	>["onSuccess"];
	useDeleteWorkspaceSshKeysHook: UseMutationOptions<
		DeleteWorkspaceSshKeysMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceMembersHook: UseMutationOptions<
		GetWorkspaceMembersQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceInvitationsHook: UseMutationOptions<
		GetWorkspaceInvitationsQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceOperationsHook: UseMutationOptions<
		GetWorkspaceOperationsQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateZoneHook: UseMutationOptions<
		CreateZoneMutationResponseType,
		unknown,
		CreateZoneMutationRequestType
	>["onSuccess"];
	useListZonesHook: UseMutationOptions<
		ListZonesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListGpuTypesHook: UseMutationOptions<
		ListGpuTypesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceZonesHook: UseMutationOptions<
		ListWorkspaceZonesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceGpuTypesHook: UseMutationOptions<
		ListWorkspaceGpuTypesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceZoneQuotaHook: UseMutationOptions<
		GetWorkspaceZoneQuotaQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListInstancesHook: UseMutationOptions<
		ListInstancesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceInstancesHook: UseMutationOptions<
		ListWorkspaceInstancesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateInstanceHook: UseMutationOptions<
		CreateInstanceMutationResponseType,
		unknown,
		CreateInstanceMutationRequestType
	>["onSuccess"];
	useGetInstanceHook: UseMutationOptions<
		GetInstanceQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useDeleteInstanceHook: UseMutationOptions<
		DeleteInstanceMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useStartInstanceHook: UseMutationOptions<
		StartInstanceMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useStopInstanceHook: UseMutationOptions<
		StopInstanceMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateInstancePortForwardHook: UseMutationOptions<
		CreateInstancePortForwardMutationResponseType,
		unknown,
		CreateInstancePortForwardMutationRequestType
	>["onSuccess"];
	useDeleteInstancePortForwardHook: UseMutationOptions<
		DeleteInstancePortForwardMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useListInstancePortForwardsHook: UseMutationOptions<
		ListInstancePortForwardsQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceOperationsHook: UseMutationOptions<
		ListWorkspaceOperationsQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetWorkspaceOperationHook: UseMutationOptions<
		GetWorkspaceOperationQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateFileStorageHook: UseMutationOptions<
		CreateFileStorageMutationResponseType,
		unknown,
		CreateFileStorageMutationRequestType
	>["onSuccess"];
	useListWorkspaceFileStoragesHook: UseMutationOptions<
		ListWorkspaceFileStoragesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useGetFileStorageHook: UseMutationOptions<
		GetFileStorageQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useDeleteFileStorageHook: UseMutationOptions<
		DeleteFileStorageMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useListFilesInFileStorageHook: UseMutationOptions<
		ListFilesInFileStorageQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useCreateImageHook: UseMutationOptions<
		CreateImageMutationResponseType,
		unknown,
		CreateImageMutationRequestType
	>["onSuccess"];
	useUpdateImageHook: UseMutationOptions<
		UpdateImageMutationResponseType,
		unknown,
		void
	>["onSuccess"];
	useListWorkspaceImagesHook: UseMutationOptions<
		ListWorkspaceImagesQueryResponseType,
		unknown,
		void
	>["onSuccess"];
	useAuthHook: UseMutationOptions<
		AuthMutationResponseType,
		unknown,
		AuthMutationRequestType
	>["onSuccess"];
	useTokenHook: UseMutationOptions<
		TokenMutationResponseType,
		unknown,
		TokenMutationRequestType
	>["onSuccess"];
};
