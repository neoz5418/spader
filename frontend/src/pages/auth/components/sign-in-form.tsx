import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandFacebook, IconBrandGithub, IconRegistered } from '@tabler/icons-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password-input'
import { cn } from '@/lib/utils'
import  { bodyTokenApisOidcV1TokenPostSchema as bodyLoginLoginAccessTokenSchema } from "../../../gen/zod"
import type { BodyTokenApisOidcV1TokenPostSchema as BodyLoginLoginAccessTokenSchema } from "../../../gen/zod"

import useAuth from "@/hooks/use-auth"

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}



export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { loginMutation, error, resetError } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm<BodyLoginLoginAccessTokenSchema>({
    resolver: zodResolver(bodyLoginLoginAccessTokenSchema),
    defaultValues: {
      grant_type: 'password',
      email: '',
      password: '',
    },
  })


  async function onSubmit(data: BodyLoginLoginAccessTokenSchema) {
    console.log("onSubmit",error)
    if (isLoading) return

    resetError()

    setIsLoading(true)
    console.log(data)

    try {
      await loginMutation.mutateAsync(data)
    } catch {
      // error is handled by useAuth hook
    }

    setIsLoading(false)
  }
  const onInvalid = (errors: any) => console.error(errors)

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>邮箱</FormLabel>
                  <FormControl>
                    <Input placeholder='name@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <FormLabel>密码</FormLabel>
                    <Link
                      to='/forgot-password'
                      className='text-sm font-medium text-muted-foreground hover:opacity-75'
                    >
                      忘记密码？
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='mt-2' loading={isLoading}>
              登录
            </Button>
           {error && <FormMessage>{error}</FormMessage>}
            <div className='relative my-2'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                onClick={() => {
                  navigate('/sign-up')
                }}
              >
                还没有账号？立即注册
              </Button>
              {/* <Button
                variant='outline'
                className='w-full'
                type='button'
                loading={isLoading}
                leftSection={<IconBrandGithub className='h-4 w-4' />}
              >
                GitHub
              </Button>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                loading={isLoading}
                leftSection={<IconBrandFacebook className='h-4 w-4' />}
              >
                Facebook
              </Button> */}
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
