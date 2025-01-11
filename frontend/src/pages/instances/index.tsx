import { Layout } from '@/components/custom/layout'

import { useEvents } from '@/hooks/use-watch'
import { listWorkspaceInstances, ListWorkspaceInstancesQueryResponseType, useListWorkspaceInstancesHook } from '@/gen'
import { PaginationState, Updater } from '@tanstack/react-table'
import { DataTable } from '@/components/custom/data-table'
import Loader from '@/components/loader'
import { useCurrentWorkspace } from '@/hooks/use-setting'
import { useSearchParams } from 'react-router-dom'
import { getInstancesColumns, InstancesColumns } from '@/pages/instances/columns.tsx'
import { useQuery } from '@tanstack/react-query'
import { isLoggedIn } from '@/hooks/use-auth'
import { useMemo } from 'react'


export default function Instances() {
  const { currentWorkspace, isLoading: isWorkspaceLoading } = useCurrentWorkspace()
  const [searchParams, setSearchParams] = useSearchParams()
  const events = useEvents()
  const pagination = {
    pageIndex: parseInt(searchParams.get('pageIndex') || '0'),
    pageSize: parseInt(searchParams.get('pageSize') || '10'),
  }

  const { data: result, isLoading: isInstancesLoading, refetch } = useQuery<ListWorkspaceInstancesQueryResponseType | null, Error>({
    queryKey: ["instances"],
    queryFn: () => listWorkspaceInstances(currentWorkspace?.name || '', {
      offset: pagination.pageIndex * pagination.pageSize,
      limit: pagination.pageSize,
    }),
    enabled: !!currentWorkspace,
  })

  const items = result?.items || []
  const total = result?.pagination?.total || 0

  function setPagination(updater: Updater<PaginationState>) {
    let state: PaginationState
    if (typeof updater === 'function') {
      state = updater(pagination)
    } else {
      state = updater
    }

    searchParams.set('pageIndex', state.pageIndex.toString())
    searchParams.set('pageSize', state.pageSize.toString())
    setSearchParams(searchParams)
  }

  const updatedItems = items.map((instance) => {
    events.map((event) => {
      if (event.resource.uid === instance.uid) {
        instance = {
          ...instance, ...event.resource,
        }
      }
    })
    return instance
  }).filter((instance) => instance.delete_time === null)
  
  const instances = useMemo(
    () =>
      (updatedItems ?? []).map((item) => {
        console.log("updatedItems", item)
        const ret = {
          id: item.uid,
          name: item.name,
          display_name: item.display_name,
          status: item.status,
          image: item.image,
          workspace: item.workspace,
          zone: item.zone,
          zone_display_name: item.zone_display_name,
          gpu_type: item.gpu_type,
          ssh: item.services?.ssh || "",
          services: item.services,
        }
        return ret
    }),
    [updatedItems]
  );

  if (isWorkspaceLoading || isInstancesLoading) {
    return <Loader />
  }

  
  const columns = getInstancesColumns(refetch)

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">算力容器列表</h2>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable columns={columns} data={instances}
                     createLink={`/workspaces/${currentWorkspace?.name}/instances/deploy`}
                     rowCount={total}
                     pagination={pagination} setPagination={setPagination} />
        </div>
    </div>
  )
}
