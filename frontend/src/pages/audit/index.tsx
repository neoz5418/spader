'use client'

import { useState } from 'react'
import { Loader, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { useCurrentWorkspace } from '@/hooks/use-setting'
import { useSearchParams } from 'react-router-dom'
import { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Updater } from '@tanstack/react-query'
import { useEvents } from '@/hooks/use-watch'
import { useGetWorkspaceAuditLogsHook } from '@/gen/hooks'
import { DataTable } from '@/components/custom/data-table'
import { AuditLogType } from '@/gen'


export default function AuditLogs() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [filter, setFilter] = useState('')

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
    data: { items: auditLogs = [], pagination: { total = 1 } = {} } = {},
  } = useGetWorkspaceAuditLogsHook(currentWorkspace?.name || '', {
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

  console.log("[+] auditLogs", auditLogs)
 

  const getActionColor = (action: string) => {
    switch (action) {
      case 'update':
        return 'text-blue-600'
      case 'create':
        return 'text-green-600'
      case 'delete':
        return 'text-red-600'
      default:
        return ''
    }
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">审计日志</h1>
      </div>

      {/* <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              {startDate ? format(startDate, 'MMM dd, yyyy') : 'Start Date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              {endDate ? format(endDate, 'MMM dd, yyyy') : 'End Date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button className="text-primary" variant="outline">
          Apply
        </Button>
      </div> */}

      <div className="border rounded-md">
        <DataTable columns={AuditLogsColumns} data={auditLogs}
                     rowCount={total}
                     pagination={pagination} setPagination={setPagination} />
      </div>
    </div>
  )
}


export const AuditLogsColumns: ColumnDef<AuditLogType>[] = [
  {
    accessorKey: 'create_time',
    header: '时间',
  },
  {
    accessorKey: 'user_email',
    header: '用户',
  },
  {
    accessorKey: 'resource_type',
    header: '资源',
  },
  {
    accessorKey: 'resource_id',
    header: '资源ID',
  },
  {
    accessorKey: 'action',
    header: '操作',
  },
]
