'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

interface AuditLog {
  timestamp: string
  user: string
  resource: string
  resourceId: string
  action: 'update' | 'create' | 'delete'
}

export default function AuditLogs() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [filter, setFilter] = useState('')

  const logs: AuditLog[] = [
    {
      timestamp: '12/17/2024, 09:22 PM',
      user: 'neolf.box@gmail.com',
      resource: 'user',
      resourceId: 'user_2YLsOwbnagyc2EVxqVZs4JejbLZ',
      action: 'update'
    },
    {
      timestamp: '12/17/2024, 09:21 PM',
      user: 'neolf.box@gmail.com',
      resource: 'apiKey',
      resourceId: 'rpa_S8FS3HZS43',
      action: 'update'
    },
    {
      timestamp: '12/17/2024, 09:21 PM',
      user: 'neolf.box@gmail.com',
      resource: 'apiKey',
      resourceId: 'rpa_S8FS3HZS43',
      action: 'create'
    },
    // ... more logs
  ]

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
        <h1 className="text-2xl font-semibold">Audit Logs</h1>
      </div>

      <div className="flex gap-4 mb-6">
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
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-muted/50">Timestamp (GMT+8)</TableHead>
              <TableHead className="bg-muted/50">User</TableHead>
              <TableHead className="bg-muted/50">Resource</TableHead>
              <TableHead className="bg-muted/50">Resource ID</TableHead>
              <TableHead className="bg-muted/50">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.resource}</TableCell>
                <TableCell className="font-mono">{log.resourceId}</TableCell>
                <TableCell className={getActionColor(log.action)}>
                  {log.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div>1 to 10 of 16</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled>
            ⟪
          </Button>
          <Button variant="outline" size="icon" disabled>
            ⟨
          </Button>
          <div className="flex items-center gap-1">
            Page <span className="font-medium">1</span> of <span>2</span>
          </div>
          <Button variant="outline" size="icon">
            ⟩
          </Button>
          <Button variant="outline" size="icon">
            ⟫
          </Button>
        </div>
      </div>
    </div>
  )
}

