import { ColumnDef } from '@tanstack/react-table'
import { InstanceType } from '@/gen'

export const InstancesColumns: ColumnDef<InstanceType>[] = [
  {
    accessorFn: (row) => {
      if (row.display_name) {
        return `${row.name} (${row.display_name})`
      }
      return row.name
    },
    header: '名称',
  },
  {
    accessorKey: 'status',
    header: '状态',
  },
  {
    accessorKey: 'zone',
    header: '区域',
  },
  {
    accessorKey: 'gpu_count',
    header: 'GPU 数量',
  },
  {
    accessorKey: 'gpu_type',
    header: 'GPU 类型',
  },
  {
    accessorKey: 'image',
    header: '镜像',
  },
  {
    accessorFn: (row) => {
      const date = new Date(row.create_time || new Date());
      date.setHours(date.getHours() + 8);
      return date.toLocaleString();
    },
    header: '创建时间',
  },
]
