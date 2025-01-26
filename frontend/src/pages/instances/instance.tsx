'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  MoreVertical,
  ChevronDown,
  Pencil,
  Copy,
  Square,
  Play,
  Trash2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { InstancePublicType } from '@/gen/ts/InstancePublicType'
import { CPU, Currency, Disk, Memory, Price } from '@/utils/format'
import { deleteInstance, PriceType, startInstance, stopInstance } from '@/gen'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { toast } from '@/components/ui/use-toast'
import { Link } from 'react-router-dom'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface InstanceItemProps {
  title: string
  id: string
  specs: {
    gpu: string
    cpu: string
    ram: string
  }
  version: string
  status: string
  volumeInfo: {
    disk: string
    podVolume: string
    path: string
  }
  networkMetrics: {
    io: string
    download: string
    upload: string
  }
  logs: string[]
  pricePerHour: string
}

export default function InstanceItem(instance: InstancePublicType) {
  const [showStopDialog, setShowStopDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [confirmName, setConfirmName] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  console.log('instance', instance)

  const price_per_hour = useMemo(() => {
    console.log('selectedMethod', instance.lease_period)
    if (!instance.price) {
      return 0
    }
    const lease_type = instance.lease_period || 'real_time'
    const price = instance?.price[lease_type]
    return price
  }, [instance])

  const status = useMemo(() => {
    switch (instance.status) {
      case 'provisioning':
        return { label: '调度中', color: 'bg-yellow-500' }
      case 'staging':
        return { label: '启动中', color: 'bg-yellow-500' }
      case 'running':
        return { label: '运行中', color: 'bg-green-500' }
      case 'stopping':
        return { label: '关机中', color: 'bg-red-500' }
      case 'terminated':
        return { label: '已关机', color: 'bg-gray-500' }
      default:
        return null
    }
  }, [instance])

  const jupyterLabTools = useMemo(() => {
    if (!instance.services) {
      return {
        jupyterLabHost: '',
        jupyterLabToken: '',
        jupyterLabUrl: '',
      }
    }
    let jupyterLabUrl = ''
    const jupyterLabHost = instance.services['jupyter-lab']
    const jupyterLabToken = instance.services['jupyter-password']
    if (jupyterLabHost) {
      jupyterLabUrl = `http://${jupyterLabHost}`
    }
    if (jupyterLabToken) {
      jupyterLabUrl += `?password=${jupyterLabToken}`
    }
    return {
      jupyterLabUrl,
      jupyterLabHost,
      jupyterLabToken,
    }
  }, [instance])

  const showToast = (message: string) => {
    toast({
      description: message,
    })
    // refetch() @TODO: refetch
  }

  const handleStop = () => {
    if (confirmName !== instance.name) {
      showToast('实例名称不匹配')
      return
    }
    console.log('stop instance', instance.workspace, instance.name)
    stopInstance(instance.workspace, instance.name)
      .then(() => {
        setShowStopDialog(false)
        setConfirmName('')
        showToast(`实例 ${instance.name} 停止成功`)
      })
      .catch((error) => {
        console.log('stop instance error', error)
      })
  }

  const handleDelete = () => {
    if (confirmName !== instance.name) {
      showToast('实例名称不匹配')
      return
    }
    deleteInstance(instance.workspace, instance.name)
      .then(() => {
        setShowDeleteDialog(false)
        setConfirmName('')
        showToast(`实例 ${instance.name} 删除成功`)
      })
      .catch((error) => {
        console.log('delete instance error', error)
      })
  }

  return (
    <Card className='p-4'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-start space-x-4'>
            <div className='pt-1'>
              {/* Status indicator with tooltip */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={cn('h-2 w-2 rounded-full', status?.color)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{status?.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>
              <div className='flex items-center space-x-2'>
                <h3 className='font-medium'>
                  名称: {instance?.display_name || instance?.name}
                </h3>
                {/* <Button variant='ghost' size='icon' className='h-4 w-4'>
                  <Pencil className='h-3 w-3' />
                </Button> */}
              </div>
              <p className='text-xs text-muted-foreground'>
                资源ID: {instance?.uid}
              </p>
            </div>
          </div>

          <div className='flex items-center space-x-12'>
            <div className='text-sm'>
              <p>
                GPU: {instance.accelerator} * {instance.gpu_display_name}
              </p>
              <p className='text-muted-foreground'>
                CPU: {CPU(instance.cpu)} 内存: {Memory(instance.memory)}
              </p>
            </div>

            <div className='text-sm'>
              <p>镜像: {instance.image}</p>
              <p className='text-muted-foreground'>
                计费方式:{' '}
                {instance.lease_period === 'real_time'
                  ? '实时计费'
                  : '固定周期'}
                {instance.auto_renew_period &&
                  ` • 自动续费: ${instance.auto_renew_period === 'real_time' ? '开启' : instance.auto_renew_period}`}
              </p>
            </div>

            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  isExpanded && 'rotate-180 transform'
                )}
              />
              <span className='sr-only'>Toggle details</span>
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div className='space-y-4 pt-2'>
            <div className='space-y-2'>
              {/* Storage Info and Creation Time in same line */}
              <div className='flex items-center justify-between text-sm'>
                <p>
                  磁盘: {Disk(instance.disk_size)} • {instance.disk_type}
                </p>
                <p className='text-muted-foreground'>
                  创建时间: {instance.create_time}
                </p>
              </div>
            </div>

            <div className='flex items-center justify-between pt-2'>
              <div className='flex items-center space-x-2'>
                <Button size='sm' type='button' variant='secondary'>
                  计费方式:{' '}
                  {instance.lease_period === 'real_time'
                    ? '实时计费'
                    : '固定周期'}
                </Button>
                <Button
                  className={cn('text-muted-foreground')}
                  variant='outline'
                  size='sm'
                  type='button'
                >
                  {Price(price_per_hour, instance.lease_period || 'real_time')}
                </Button>
              </div>
              <div className='flex items-center gap-2'>
                {jupyterLabTools.jupyterLabUrl && (
                  <JupyterLabLink {...jupyterLabTools} />
                )}
                <Button
                  disabled={
                    instance.status !== 'running' &&
                    instance.status !== 'terminated'
                  }
                  variant='outline'
                  size='icon'
                  onClick={() => {
                    if (instance.status === 'running') {
                      setShowStopDialog(true)
                    }
                    if (instance.status === 'terminated') {
                      startInstance(instance.workspace, instance.name)
                        .then(() => showToast(`实例 ${instance.name} 启动成功`))
                        .catch((error) =>
                          console.log('start instance error', error)
                        )
                    }
                  }}
                >
                  {instance.status === 'running' ? (
                    <Square className='h-4 w-4' />
                  ) : (
                    <Play className='h-4 w-4' />
                  )}
                </Button>
                <Dialog open={showStopDialog} onOpenChange={setShowStopDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>确认停止实例</DialogTitle>
                            <DialogDescription>
                                请输入实例名称 "{instance.name}" 以确认停止操作。
                            </DialogDescription>
                        </DialogHeader>
                        <Input
                            value={confirmName}
                            onChange={(e) => setConfirmName(e.target.value)}
                            placeholder="输入实例名称"
                        />
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setShowStopDialog(false);
                                    setConfirmName("");
                                }}
                            >
                                取消
                            </Button>
                            <Button variant="destructive" onClick={handleStop}>
                                停止
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Button
                    variant="outline"
                    size="icon"
                    className="text-red-600 hover:bg-red-100 hover:text-red-700"
                    onClick={() => setShowDeleteDialog(true)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
                <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>确认删除实例</DialogTitle>
                            <DialogDescription>
                                请输入实例名称 "{instance.name}"
                                以确认删除操作。此操作不可恢复。
                            </DialogDescription>
                        </DialogHeader>
                        <Input
                            value={confirmName}
                            onChange={(e) => setConfirmName(e.target.value)}
                            placeholder="输入实例名称"
                        />
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setShowDeleteDialog(false);
                                    setConfirmName("");
                                }}
                            >
                                取消
                            </Button>
                            <Button variant="destructive" onClick={handleDelete}>
                                删除
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

interface JupyterLabLinkProps {
  jupyterLabUrl: string
  jupyterLabHost: string
  jupyterLabToken: string
}

export function JupyterLabLink({
  jupyterLabUrl,
  jupyterLabHost,
  jupyterLabToken,
}: JupyterLabLinkProps) {
  return (
    <Button className='' variant='outline' size='sm' type='button'>
      <Link
        to={jupyterLabUrl}
        target='_blank'
        className='text-sky-400 underline decoration-sky-500 hover:text-sky-500'
      >
        JupyterLab
      </Link>
    </Button>
  )
}

export function JupyterLabLink2({
  jupyterLabUrl,
  jupyterLabHost,
  jupyterLabToken,
}: JupyterLabLinkProps) {
  return (
    <div className='flex items-center gap-2'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={jupyterLabUrl}
              target='_blank'
              className='text-sky-400 underline decoration-sky-500 hover:text-sky-500'
            >
              JupyterLab
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>JupyterLab 地址: {jupyterLabHost}</p>
            <p>JupyterLab 密码: {jupyterLabToken}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button
        className='text-blue-600 hover:bg-blue-100 hover:text-blue-700'
        variant='ghost'
        size='icon'
        onClick={() => {
          navigator.clipboard.writeText(jupyterLabUrl)
          toast({
            description: '已复制到剪贴板',
          })
        }}
      >
        <Copy />
      </Button>
    </div>
  )
}
