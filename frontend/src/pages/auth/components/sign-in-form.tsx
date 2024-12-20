import { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z ,handleFormError} from '@/utils/zod'
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

import {
  token as loginAccessToken,
} from "@/gen/clients"

import {
  type ApiError,
} from "@/core/ApiError"

import {
  useTokenHook
} from '@/gen/hooks/useTokenHook'

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [formError, setFormError] = useState('')
  const { loginSuccess } = useAuth()
  const { mutateAsync: loginAsync, isPending: isLoginPending, error: loginError } = useTokenHook()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const form = useForm<BodyLoginLoginAccessTokenSchema>({
    mode: 'onChange',
    resolver: zodResolver(bodyLoginLoginAccessTokenSchema.extend({
      email: z.string().email(),
      password: z.string().min(1)
    })),
    defaultValues: {
      grant_type: 'password',
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: BodyLoginLoginAccessTokenSchema) {
    setFormError('')

    try{
      const response = await loginAccessToken({
        grant_type: 'password',
        email: data.email,
        password: data.password,
      })
      loginSuccess(response)
      navigate( "/" )
    }catch(err) {
      const error = err as ApiError ;
      // showToast("登录失败", getErrorMessage(error), "error")
      console.log(error, err)
      handleFormError(error, form)
    }
  }

  const onInvalid = (errors: any) => {
    console.log(errors)
    console.log(form.formState)
  }

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
            {/* 显示根级别的表单错误 */}
            {form.formState.errors.root && (
                    <div className="text-[0.8rem] font-medium text-destructive">
                      {form.formState.errors.root.message}
                    </div>
                  )}
            <Button className='mt-2' loading={isLoading}>
              登录
            </Button>
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
