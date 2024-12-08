import { useForm } from 'react-hook-form'
import { Button } from '@/components/custom/button'
import ContentSection from '@/components/custom/content-section'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { Layout } from '@/components/custom/layout'
import { createInstanceRequestSchema, CreateInstanceRequestSchema } from '@/gen/zod/createInstanceRequestSchema.gen'
import { useAuth } from '@/hooks/use-auth'
import { useCreateInstanceHook } from '@/gen/hooks/useCreateInstanceHook'
import { useEffect, useState } from 'react'
import { useListWorkspaceZoneGpuTypesHook } from '@/gen/hooks/useListWorkspaceZoneGpuTypesHook'
import { useCurrentWorkspace } from '@/hooks/use-setting.ts'
import { toast } from '@/hooks/use-toast.ts'
import { useListWorkspaceZonesHook } from '@/gen'
import { useNavigate, useParams } from 'react-router-dom'


// This can come from your database or API.
const defaultValues: Partial<CreateInstanceRequestSchema> = {
  name: '',
}

export default function DeployForm() {
  const { currentWorkspace } = useCurrentWorkspace()
  const [zone, setZone] = useState('beijing')
  const { workspace } = useParams()
  const navigate = useNavigate()
  const { data: { items: zones = [] } = {} } = useListWorkspaceZonesHook(currentWorkspace?.name || '', {}, {
    query: {
      enabled: !!currentWorkspace,
    },
  })
  const { data: { items: gpuTypes = [] } = {} } = useListWorkspaceZoneGpuTypesHook(currentWorkspace?.name || '', zone, {}, {
    query: {
      enabled: !!currentWorkspace,
    },
  })

  const form = useForm<CreateInstanceRequestSchema>({
    resolver: zodResolver(createInstanceRequestSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { user: currentUser } = useAuth()
  console.log(currentUser)

  const { mutate: createInstance, error, data } = useCreateInstanceHook(currentUser?.name || '', zone)

  function onSubmit(data) {
    createInstance(data)
  }

  function onSubmitError(error: any) {
    toast({
      variant: 'destructive',
      title: '创建失败',
      description: error.message,
    })
  }

  useEffect(() => {
    if (data) {
      toast({
        title: '创建成功',
        description: JSON.stringify(data),
      })      
      navigate(`/workspaces/${workspace}/instances`)
    }
  }, [data])

  return (
    <Layout>
      <Layout.Body>
        <ContentSection
          title="创建容器实例"
          desc="选择一个容器实例规格"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onSubmitError)} className="space-y-8">
              <FormField
                name="zone"
                render={() => (
                  <FormItem>
                    <FormLabel>区域</FormLabel>
                    <Select onValueChange={setZone} defaultValue={zone}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择主机部署的区域" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {zones.map((zone) => <SelectItem
                          value={zone.name}>{zone.display_name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      选择主机部署的区域
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>名称</FormLabel>
                    <FormControl>
                      <Input placeholder="主机名称" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gpu_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GPU类型</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择一个GPU类型" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {gpuTypes.map((gpuType) => <SelectItem
                          value={gpuType.name}>{gpuType.display_name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      选择一个GPU类型
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gpu_count"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>数量</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))}
                            defaultValue={field.value?.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择GPU数量" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="8">8</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      选择一个GPU数量
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>镜像</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择一个镜像" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          value="pytorch:2.0.1-py3.10-rocm5.7-ubuntu18.04">pytorch:2.0.1-py3.10-rocm5.7-ubuntu18.04</SelectItem>
                        <SelectItem
                          value="pytorch:2.0.1-py3.10-rocm5.7-ubuntu20.04">pytorch:2.0.1-py3.10-rocm5.7-ubuntu20.04</SelectItem>
                        <SelectItem
                          value="pytorch:2.0.1-py3.10-rocm5.7-ubuntu22.04">pytorch:2.0.1-py3.10-rocm5.7-ubuntu22.04</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      选择一个镜像
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <p className="text-red-500">{error.message}</p>}
              <Button variant="outline" type="submit">创建</Button>
            </form>
          </Form>
        </ContentSection>
      </Layout.Body>
    </Layout>
  )
}
