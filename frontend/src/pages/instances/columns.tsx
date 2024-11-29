import { ColumnDef } from '@tanstack/react-table'
import { InstanceType } from '@/gen'
import { toast } from '@/hooks/use-toast.ts'

function SelectorAble({ children }: { children: React.ReactNode }) {
  return <span className={"select-all cursor-pointer"}>{children}</span>
}

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
    accessorFn: (row) => {
      return `${row.gpu_type}*${row.gpu_count}`
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
          services.push(<div>Jupyter 地址: <SelectorAble>{row.original.services['jupyter-lab']}</SelectorAble></div>)
        }
        if (row.original.services['jupyter-password']) {
          services.push(
            <div>
              Jupyter 密码:
              <span
                className="select-all cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(row.original.services['jupyter-password'] || '')
                  toast(<p>密码已复制到剪贴板</p>)
                }}
              >
                {row.original.services['jupyter-password']}
              </span>
            </div>,
          )
          if (row.original.services['ssh']) {
            services.push(<div>SSH 地址: <SelectorAble>{row.original.services['ssh']}</SelectorAble></div>)
          }
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
