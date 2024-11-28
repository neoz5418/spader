import { Layout } from '@/components/custom/layout'


import { useListWorkspaceInstancesHook } from '@/gen'
import { PaginationState, Updater } from '@tanstack/react-table'
import { DataTable } from '@/components/custom/data-table'
import Loader from '@/components/loader'
import { useCurrentWorkspace } from '@/hooks/use-setting'
import { useSearchParams } from 'react-router-dom'
import { InstancesColumns } from '@/pages/instances/columns.tsx'


export default function Instances() {
  const { currentWorkspace } = useCurrentWorkspace()
  const [searchParams, setSearchParams] = useSearchParams()
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
    isLoading,
    data: { items: instances = [], pagination: { total = 0 } = {} } = {},
  } = useListWorkspaceInstancesHook(currentWorkspace?.name || '', {
    offset: pagination.pageIndex * pagination.pageSize,
    limit: pagination.pageSize,
  }, {
    query: {
      enabled: !!currentWorkspace,
    },
  })
  if (isLoading) {
    return <Loader />
  }

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
          <DataTable columns={InstancesColumns} data={instances}
                     createLink={`/workspaces/${currentWorkspace?.name}/instances/deploy`}
                     rowCount={total}
                     pagination={pagination} setPagination={setPagination} />
        </div>
      </Layout.Body>
    </Layout>
  )
}
