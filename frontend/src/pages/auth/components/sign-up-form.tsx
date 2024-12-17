import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { cn } from '@/lib/utils'
import { useSendOneTimePasswordHook } from '@/gen/hooks/useSendOneTimePasswordHook'
import { registerUserRequestSchema } from '@/gen/zod/registerUserRequestSchema.gen'
import { sendOneTimePasswordRequestSchema } from '@/gen/zod/sendOneTimePasswordRequestSchema.gen'
import { PinInput, PinInputField } from '@/components/custom/pin-input'
import { PasswordInput } from '@/components/custom/password-input'
import { Separator } from '@/components/ui/separator'
import { useRegisterUserHook } from '@/gen/hooks/useRegisterUserHook'
import SignUpSuccess from '@/components/signup-success'
import { Card } from '@/components/ui/card'
import { PhoneInput } from '@/components/phone-input.tsx'
import * as validator from 'validator'
import { z } from 'zod'
import { ErrorResourceConflictType, RegisterUserRequestType, SendOneTimePasswordRequestType } from '@/gen'

export function SignUpForm({ className, ...props }) {
  const [disableVerifyBtn, setDisableVerifyBtn] = useState(true)
  const [registerUserRequest, setRegisterUserRequest] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: '',
  } as SendOneTimePasswordRequestType)
  const [step, setStep] = useState<'register' | 'verify' | 'success'>(
    'register',
  )
  const {
    mutateAsync: registerAsync,
    isPending: isRegisterPending,
    error: registerError,
  } = useSendOneTimePasswordHook()
  const { mutateAsync: verifyAsync, isPending: isVerifyPending, error: verifyError } = useRegisterUserHook()

  const verifyForm = useForm({
    resolver: zodResolver(registerUserRequestSchema),
  })

  const registerForm = useForm({
    resolver: zodResolver(sendOneTimePasswordRequestSchema.extend({
      phone_number: z.string().min(1, 'Invalid phone number').refine((phone: string) => validator.isMobilePhone(phone, ['zh-CN']), 'Invalid phone number'),
    })),
  })

  async function onRegisterSubmit(data: SendOneTimePasswordRequestType) {
    return registerAsync(data).then(() => {
      setRegisterUserRequest(data)
      setStep('verify')
    }).catch((e) => {
      console.error(e)
    })
  }

  async function onVerifySubmit(data: RegisterUserRequestType) {
    return verifyAsync(data).then(() => {
      setStep('success')
    })
  }

  const onInvalid = (errors: any) => {
    console.error(errors)
    console.log(registerForm.formState)
  }

  if (step === 'success') {
    return <SignUpSuccess />
  }
  if (step === 'verify') {
    return (
      <div
        className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div className="mb-4 flex items-center justify-center">
            <h1 className="text-xl font-medium">欢迎注册 Spader 账户</h1>
          </div>
          <Card className="p-6">
            <div className="mb-2 flex flex-col space-y-2 text-left">
              <h1 className="text-lg font-semibold tracking-tight">
                你好,
              </h1>
              <p className="text-sm text-muted-foreground">
                请输入邮箱收到的验证码
              </p>
            </div>
            <div className={cn('grid gap-6', className)} {...props}>
              <Form key="verifyForm" {...verifyForm}>
                <form
                  onSubmit={verifyForm.handleSubmit(onVerifySubmit, onInvalid)}
                >
                  <div className="grid gap-2">
                    <FormField
                      control={verifyForm.control}
                      name="one_time_password"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormControl>
                            <PinInput
                              {...field}
                              className="flex h-10 justify-between"
                              onComplete={() => {
                                setDisableVerifyBtn(false)
                              }}
                              onIncomplete={() => {
                                setDisableVerifyBtn(true)
                              }}
                            >
                              {Array.from({ length: 7 }, (_, i) => {
                                if (i === 3)
                                  return (
                                    <Separator key={i} orientation="vertical" />
                                  )
                                return (
                                  <PinInputField
                                    key={i}
                                    component={Input}
                                    className={`${verifyForm.getFieldState('one_time_password').invalid ? 'border-red-500' : ''}`}
                                  />
                                )
                              })}
                            </PinInput>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <input value={registerUserRequest.email || ""}
                           type={'hidden'} {...verifyForm.register('email')} />
                    <input value={registerUserRequest.name}
                           type={'hidden'} {...verifyForm.register('name')} />
                    <input value={registerUserRequest.phone_number}
                           type={'hidden'} {...verifyForm.register('phone_number')} />
                    <input value={registerUserRequest.password}
                           type={'hidden'} {...verifyForm.register('password')} />
                    <input value={'email'}
                           type={'hidden'} {...verifyForm.register('one_time_password_validate_type')} />
                    {verifyError && <div>{verifyError.message.type}</div>}
                    <Button
                      className="mt-2"
                      disabled={disableVerifyBtn}
                      loading={isVerifyPending}
                      type={'submit'}
                    >
                      验证
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              如果你已经注册，请直接
              <Link
                to="/sign-in"
                className="underline underline-offset-4 hover:text-primary"
              >
                登录
              </Link>
            </p>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div
      className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-xl font-medium">欢迎注册 SpaderAI</h1>
        </div>
        <Card className="p-6">
          <div className="mb-2 flex flex-col space-y-2 text-left">
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
              请输入您的邮箱和密码以创建账户。<br />
              已经有账户了？{' '}
              <Link
                to="/sign-in"
                className="underline underline-offset-4 hover:text-primary"
              >
                登录
              </Link>
            </p>
          </div>
          <div className={cn('grid gap-6', className)} {...props}>
            <Form key="registerForm" {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(
                  onRegisterSubmit,
                  onInvalid,
                )}
              >
                <div className="grid gap-2">
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>用户名</FormLabel>
                        <FormControl>
                          <Input placeholder="输入您的用户名" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>邮箱</FormLabel>
                        <FormControl>
                          <Input placeholder="输入您的邮箱" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>手机号</FormLabel>
                        <FormControl>
                          <PhoneInput
                            placeholder="输入您的手机号"
                            {...field}
                            countries={['CN']}
                            defaultCountry={'CN'}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>密码</FormLabel>
                        <FormControl>
                          <PasswordInput placeholder="输入您的密码" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {registerError && <div>{registerError.message.type}</div>}
                  <input value={'email'} type={'hidden'} {...registerForm.register('type')} />
                  <Button className="mt-2" loading={isRegisterPending}
                          type="submit">
                    创建账户
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
            创建账户即表示您同意我们的{' '}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              服务条款
            </a>{' '}
            和{' '}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              隐私政策
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  )
}
