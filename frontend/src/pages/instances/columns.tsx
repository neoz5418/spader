import { ColumnDef } from '@tanstack/react-table'
import {
  InstancePublicType,
  startInstance,
  stopInstance,
  deleteInstance,
  useStartInstanceHook,
  useStopInstanceHook,
} from '@/gen'
import { toast } from '@/hooks/use-toast.ts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Square, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useState } from 'react'

function Copyable({ text }: { text: string }) {
  return (
    <span
      className={'cursor-pointer select-all'}
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          toast({
            description: '已复制到剪贴板',
          })
        })
      }}
    >
      {text}
    </span>
  )
}

export const getInstancesColumns = (refetch: () => void) => {
  const showToast = (message: string) => {
    toast({
      description: message,
    })
    refetch()
  }
  return [
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
      header: '状态',
      cell: ({ row }) => {
        switch (row.original.status) {
          case 'provisioning':
            return <Badge variant='secondary'>启动中</Badge>
          case 'running':
            return <Badge variant='default'>运行中</Badge>
          case 'stopping':
            return <Badge variant='destructive'>运行中</Badge>
          case 'staging':
            return <Badge variant='secondary'>启动中</Badge>
          case 'terminated':
            return <Badge variant='outline'>已释放</Badge>
          default:
            return null
        }
      },
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
            services.push(
              <div>
                Jupyter 地址:{' '}
                <Copyable
                  text={row.original.services['jupyter-lab'] as string}
                />
              </div>
            )
          }
          if (row.original.services['jupyter-password']) {
            services.push(
              <div>
                Jupyter 密码:{' '}
                <Copyable
                  text={row.original.services['jupyter-password'] as string}
                />
              </div>
            )
          }
          if (row.original.services['ssh']) {
            services.push(
              <div>
                SSH 地址: <Copyable text={row.original.services['ssh']} />
              </div>
            )
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
    {
      id: 'actions',
      header: '操作',
      cell: ({ row }) => {
        const instance = row.original
        const [showDeleteDialog, setShowDeleteDialog] = useState(false)

        const handleDelete = () => {
          // TODO: 实现删除逻辑
          console.log('deleting', instance.name)
          deleteInstance(instance.workspace, instance.name)
            .then(() => { 
              setShowDeleteDialog(false)
              showToast(`实例 ${instance.name} 删除成功`)
            })
            .catch((error) => {
              console.log('delete instance error', error)
            })
        }

        return (
          <>
            <div className='flex items-center gap-2'>
              <Button
                disabled={
                  instance.status !== 'running' &&
                  instance.status !== 'terminated'
                }
                variant='ghost'
                size='icon'
                onClick={() => {
                  console.log('instance', instance.status)
                  // TODO: 实现启动/停止逻辑
                  if (instance.status === 'running') {
                    stopInstance(instance.workspace, instance.name)
                      .then((ret) => {
                        showToast(`实例 ${instance.name} 停止成功`)
                        // row.original.status = 'stopping'
                      })
                      .catch((error) => {
                        console.log('stop instance error', error)
                      })
                  }
                  if (instance.status === 'terminated') {
                    startInstance(instance.workspace, instance.name)
                      .then((ret) => {
                        showToast(`实例 ${instance.name} 启动成功`)
                        // row.original.status = 'running'
                      })
                      .catch((error) => {
                        console.log('start instance error', error)
                      })
                  }
                }}
              >
                {instance.status === 'running' ? (
                  <Square className='h-4 w-4' />
                ) : (
                  <Play className='h-4 w-4' />
                )}
              </Button>

              <Button
                variant='ghost'
                size='icon'
                className='text-red-600 hover:bg-red-100 hover:text-red-700'
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash2 className='h-4 w-4' />
              </Button>
            </div>

            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>确认删除实例</DialogTitle>
                  <DialogDescription>
                    您确定要删除实例 "{instance.name}" 吗？此操作不可恢复。
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant='outline'
                    onClick={() => setShowDeleteDialog(false)}
                  >
                    取消
                  </Button>
                  <Button variant='destructive' onClick={handleDelete}>
                    删除
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )
      },
    },
  ]
}
