import { useForm } from 'react-hook-form'
import { Button } from '@/components/custom/button'
import ContentSection from '@/components/custom/content-section'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Layout } from '@/components/custom/layout'
import { createInstanceRequestSchema, CreateInstanceRequestSchema } from '@/gen/zod/createInstanceRequestSchema.gen'
import { useAuth } from '@/hooks/use-auth'
import { useCreateInstanceHook } from '@/gen/hooks/useCreateInstanceHook'
import { useState } from 'react'


// This can come from your database or API.
const defaultValues: Partial<CreateInstanceRequestSchema> = {
  name: '',
}

export default function DeployForm() {
  const [zone, setZone] = useState('default')
  const form = useForm<CreateInstanceRequestSchema>({
    resolver: zodResolver(createInstanceRequestSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { user: currentUser } = useAuth()
  console.log(currentUser)

  const { mutate: createInstance } = useCreateInstanceHook(currentUser?.name || '', zone)

  function onSubmit(data: any) {
    console.log(data)
    const response = createInstance(data)
    console.log(response)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  function onSubmitError(error: any) {
    console.log(error)
  }

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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>区域</FormLabel>
                    <Select onValueChange={setZone} defaultValue={zone}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择主机部署的区域" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beijing">北京</SelectItem>
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
                      <Input placeholder="instance name" {...field} />
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
                        <SelectItem value="A100">A100</SelectItem>
                        <SelectItem value="A10">A10</SelectItem>
                        <SelectItem value="A40">A40</SelectItem>
                        <SelectItem value="4090">4090</SelectItem>
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
              <Button variant="outline" type="submit">创建</Button>
            </form>
          </Form>
        </ContentSection>
      </Layout.Body>
    </Layout>
  )
}
