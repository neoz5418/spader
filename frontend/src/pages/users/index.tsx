import * as React from "react";
// import { useState } from 'react'
// import {
//   IconAdjustmentsHorizontal,
//   IconSortAscendingLetters,
//   IconSortDescendingLetters,
// } from '@tabler/icons-react'
import { Layout } from '@/components/custom/layout'
// import { Input } from '@/components/ui/input'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'



// import { Separator } from '@/components/ui/separator'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
// import { Button } from '@/components/custom/button'
import { useListUsersHook as useReadUsersHook, UserType } from '@/gen'
import { useMemo, useState } from 'react'
import { ColumnDef, useReactTable } from "@tanstack/react-table";
import { DataTable } from "@/components/custom/data-table";

// const appText = new Map<string, string>([
//   ['all', 'All Apps'],
//   ['connected', 'Connected'],
//   ['notConnected', 'Not Connected'],
// ])

export const columns: ColumnDef<UserType>[] = [
  {
    accessorKey: "uid",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "display_name",
    header: "Display Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "active",
    header: "Active",
  },
]

export default function Users() {
  const [pagination, setPagination] = useState({
    pageIndex: 1, //initial page index
    pageSize: 10, //default page size
  });
  const { data, isLoading, error } = useReadUsersHook({
    limit: pagination.pageSize,
    page: pagination.pageIndex,
  });



  const users = useMemo(
    () =>
      (data?.items ?? []).map((user) => ({
        id: user.uid,
        name: user.name,
        display_name: user.display_name,
        email: user.email,
        role: user.role,
        phone_number: user.phone_number
      })),
    [data]
  );

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }


  if (error) {
    return <div className="error">Error</div>;
  }


  return (

    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <div className='space-y-4'>
            <div className='rounded-md border'>
            <DataTable columns={columns} data={users}
            rowCount={data?.pagination?.total_count ?? 0}
            pagination={pagination} setPagination={setPagination} />
            </div>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}
