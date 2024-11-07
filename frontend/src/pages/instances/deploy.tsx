import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useFieldArray, useForm } from 'react-hook-form'
import { Button } from '@/components/custom/button'
import ContentSection from '@/components/custom/content-section'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Layout } from '@/components/custom/layout'
import {
  createInstancePathParamsSchema,
} from '@/gen/zod/createInstanceSchema.gen'
import {
  createInstanceRequestSchema,
  CreateInstanceRequestSchema,
} from '@/gen/zod/createInstanceRequestSchema.gen'
import {useAuth} from "@/hooks/use-auth"
import { createInstanceBody } from '@/gen/spaderApi.zod';
import { useCreateInstanceHook } from '@/gen/hooks/useCreateInstanceHook'

type ProfileFormValues = z.infer<typeof createInstancePathParamsSchema>

// This can come from your database or API.
//export const createInstanceRequestSchema = z.object({ "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "display_name": z.union([z.string(), z.null()]).optional(), "gpu_count": z.number().int(), "gpu_type": z.string(), "file_storages": z.array(z.string()).optional(), "image": z.string() });
const defaultValues: Partial<CreateInstanceRequestSchema> = {
  name: ""
}

export default function DeployForm() {
  const form = useForm<CreateInstanceRequestSchema>({
    resolver: zodResolver(createInstanceRequestSchema),
    defaultValues,
    mode: 'onChange',
  })

  const {user:currentUser} = useAuth()
  console.log(currentUser)

  const {mutate: createInstance} = useCreateInstanceHook(currentUser?.email || "", "default")

  function onSubmit(data: createInstanceBody) {
    console.log(data)
    const response = createInstance(data)
    console.log(response)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
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
          title='创建容器实例'
          desc='选择一个容器实例规格'
        >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onSubmitError)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名称</FormLabel>
                  <FormControl>
                    <Input placeholder='instance name' {...field} />
                  </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='gpu_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GPU类型</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='选择一个GPU类型' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='A100'>A100</SelectItem>
                      <SelectItem value='A10'>A10</SelectItem>
                      <SelectItem value='A40'>A40</SelectItem>
                      <SelectItem value='4090'>4090</SelectItem>
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
              name='gpu_count'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>数量</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='选择GPU数量' />
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
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>镜像</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='选择一个镜像' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='pytorch:2.0.1-py3.10-rocm5.7-ubuntu18.04'>pytorch:2.0.1-py3.10-rocm5.7-ubuntu18.04</SelectItem>
                      <SelectItem value='pytorch:2.0.1-py3.10-rocm5.7-ubuntu20.04'>pytorch:2.0.1-py3.10-rocm5.7-ubuntu20.04</SelectItem>
                      <SelectItem value='pytorch:2.0.1-py3.10-rocm5.7-ubuntu22.04'>pytorch:2.0.1-py3.10-rocm5.7-ubuntu22.04</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    选择一个镜像
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="outline" type='submit'>创建</Button>
            </form>
          </Form>
        </ContentSection>
      </Layout.Body>
    </Layout>
  )
}
