import { Layout } from '@/components/custom/layout'


import { InstanceType, listWorkspaceInstances, PaginatedListInstanceType, WorkspaceType } from '@/gen'
import { useMemo, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/custom/data-table'
import Loader from '@/components/loader'
import { useCurrentWorkspace } from '@/hooks/use-setting'
import { useQuery } from '@tanstack/react-query'


export const columns: ColumnDef<InstanceType>[] = [
  {
    accessorKey: 'uid',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'display_name',
    header: 'Display Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'zone',
    header: 'Zone',
  },
  {
    accessorKey: 'workspace',
    header: 'Workspace',
  },
  {
    accessorKey: 'gpu_count',
    header: 'GPU Count',
  },
  {
    accessorKey: 'gpu_type',
    header: 'GPU Type',
  },
  {
    accessorKey: 'image',
    header: 'Image',
  },
  {
    accessorKey: 'create_time',
    header: 'Created At',
  },
]

export default function Instances() {
  const { currentWorkspace } = useCurrentWorkspace()
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  })
  // const workspace = ws as WorkspaceType
  console.log(currentWorkspace)
  // if (!workspace) {
  //   return <Loader />
  // }


  // const { data, isLoading, error} = useReadInstancesHook({
  //   limit: pagination.pageSize,
  //   offset: pagination.pageSize * pagination.pageIndex,
  // });

  // const { data, isLoading, error} = useListWorkspaceInstancesHook(
  //   workspace.name,
  //   {
  //   limit: pagination.pageSize,
  //   offset: pagination.pageSize * pagination.pageIndex,
  // });

  const { isLoading: isLoading, data: data, error } = useQuery<PaginatedListInstanceType>({
    queryKey: ['instances', currentWorkspace?.name],
    queryFn: async () => {
      const workspaceName = (currentWorkspace as WorkspaceType).name
      console.log('[+]listWorkspaceInstances', workspaceName)
      const response = await listWorkspaceInstances(workspaceName)
      console.log('[+]listWorkspaceInstances', response)
      return response
    },
    enabled: !!currentWorkspace,
  })

  const instances = useMemo(
    () =>
      (data?.items ?? []).map((instance) => ({
        id: instance.uid,
        name: instance.name,
        display_name: instance.display_name,
        status: instance.status,
        zone: instance.zone,
        workspace: instance.workspace,
        gpu_count: instance.gpu_count,
        gpu_type: instance.gpu_type,
        image: instance.image,
        create_time: instance.create_time,
      })),
    [data],
  )

  if (isLoading) {
    return <Loader />
  }


  console.log('[+]error', error)
  // if (error) {
  //   return <DataError {...error} />;
  // }

  return (
    <Layout>
      <Layout.Body>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">算力容器列表</h2>
            <p className="text-muted-foreground">

            </p>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable columns={columns} data={instances}
                     createLink={`/workspaces/${currentWorkspace?.name}/instances/deploy`}
                     rowCount={data?.pagination?.total ?? 0}
                     pagination={pagination} setPagination={setPagination} />
        </div>
      </Layout.Body>
    </Layout>
  )
}
