import { Layout } from '@/components/custom/layout'

import { useEvents } from '@/hooks/use-watch'
import { useListWorkspaceInstancesHook } from '@/gen'
import { PaginationState, Updater } from '@tanstack/react-table'
import { DataTable } from '@/components/custom/data-table'
import Loader from '@/components/loader'
import { useCurrentWorkspace } from '@/hooks/use-setting'
import { useSearchParams } from 'react-router-dom'
import { InstancesColumns } from '@/pages/instances/columns.tsx'


export default function Instances() {
  const { currentWorkspace, isLoading: isWorkspaceLoading } = useCurrentWorkspace()
  const [searchParams, setSearchParams] = useSearchParams()
  const events = useEvents()
  const pagination = {
    pageIndex: parseInt(searchParams.get('pageIndex') || '0'),
    pageSize: parseInt(searchParams.get('pageSize') || '10'),
  }

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

  const {
    isLoading: isInstancesLoading,
    data: { items: instances = [], pagination: { total = 0 } = {} } = {},
  } = useListWorkspaceInstancesHook(currentWorkspace?.name || '', {
    offset: pagination.pageIndex * pagination.pageSize,
    limit: pagination.pageSize,
  }, {
    query: {
      enabled: !!currentWorkspace,
    },
  })
  if (isWorkspaceLoading || isInstancesLoading) {
    return <Loader />
  }

  const lastInstances = instances.map((instance) => {
    events.map((event) => {
      if (event.resource.uid === instance.uid) {
        instance = {
          ...instance, ...event.resource,
        }
      }
    })
    return instance
  })

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
          <DataTable columns={InstancesColumns} data={lastInstances}
                     createLink={`/workspaces/${currentWorkspace?.name}/instances/deploy`}
                     rowCount={total}
                     pagination={pagination} setPagination={setPagination} />
        </div>
      </Layout.Body>
    </Layout>
  )
}
