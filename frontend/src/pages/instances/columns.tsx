import { ColumnDef } from '@tanstack/react-table'
import { InstancePublicType } from '@/gen'
import { toast } from '@/hooks/use-toast.ts'

function Copyable({ text }: { text: string }) {
  return <span className={'select-all cursor-pointer'} onClick={() => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        description: '已复制到剪贴板',
      })
    })
  }}>{text}</span>
}

export const InstancesColumns: ColumnDef<InstancePublicType>[] = [
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
    accessorKey: 'zone_display_name',
    header: '区域',
  },
  {
    accessorFn: (row) => {
      return `${row.gpu_display_name}*${row.gpu_count}`
    },
    header: 'GPU 类型*数量',
  },
  {
    accessorKey: 'image',
    header: '镜像',
  },
  {
    cell: ({ row }) => {
      const services = []
      if (row.original.services) {
        if (row.original.services['jupyter-lab']) {
          services.push(<div>Jupyter 地址: <Copyable text={row.original.services['jupyter-lab'] as string} /></div>)
        }
        if (row.original.services['jupyter-password']) {
          services.push(<div>Jupyter 密码: <Copyable text={row.original.services['jupyter-password'] as string} />
          </div>)
        }
        if (row.original.services['ssh']) {
          services.push(<div>SSH 地址: <Copyable text={row.original.services['ssh']} /></div>)
        }
        return <div>{services}</div>
      }
    },
    header: '服务',
  },
  {
    accessorFn: (row) => {
      const date = new Date(row.create_time || new Date())
      date.setHours(date.getHours() + 8)
      return date.toLocaleString()
    },
    header: '创建时间',
  },
]
