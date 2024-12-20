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
import { useTranslation } from 'react-i18next'
import { ErrorResourceConflictType, RegisterUserRequestType, SendOneTimePasswordRequestType } from '@/gen'

export function SignUpForm({ className, ...props }: { className?: string }) {
  const { t } = useTranslation('custom')  // 指定使用 custom 命名空间
  const [formError, setFormError] = useState('')
  const [disableVerifyBtn, setDisableVerifyBtn] = useState(true)
  const [registerUserRequest, setRegisterUserRequest] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: ''
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

  // const requestSchema = sendOneTimePasswordRequestSchema.extend({
  //   phone_umber: z.string().refine((phone: string) => validator.isMobilePhone(phone, ['zh-CN']), { params: { i18n: "invalid_phone_number" } }),
  //   confirm_password: z.string().min(8, { params: { i18n: "invalid_password" } }),
  // })
  // const registerForm = useForm({
  //   resolver: zodResolver(requestSchema),
  // })
  const registerForm = useForm({
    resolver: zodResolver(sendOneTimePasswordRequestSchema.extend({
      phone_number: z.string().min(1, 'Invalid phone number').refine((phone: string) => validator.isMobilePhone(phone, ['zh-CN']), { params: { i18n: "invalid_phone_number" } }),
      password: z.string().min(8)
      .refine( (val) => val.match(/[A-Z]/),{params: { i18n: "invalid_password_uppercase" }})
      .refine( (val) => val.match(/[a-z]/),{params: { i18n: "invalid_password_lowercase" }}),
      confirm_password: z.string(),
      email: z.string().email(),
    }).refine(({ password, confirm_password }) => password === confirm_password , {
      params: { i18n: "password_mismatch" },
      path: ['confirm_password']
    })),
  })

  async function onRegisterSubmit(data: SendOneTimePasswordRequestType) {
    setFormError('')
    return registerAsync(data).then(() => {
      setRegisterUserRequest(data)
      setStep('verify')
    }).catch((e) => {
      console.log(e,verifyForm)
      setFormError(t(e.type))
      console.log(e.type, t(e.type))
      registerForm.setError('root', { 
        type: 'custom',
        message: t(e.type)
      })
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
                    {formError && <div>1111{formError}1111</div>}
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
                  <FormField
                    control={registerForm.control}
                    name="confirm_password"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>确认密码</FormLabel>
                        <FormControl>
                          <PasswordInput placeholder="确认您的密码" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* 显示根级别的表单错误 */}
                  {registerForm.formState.errors.root && (
                    <div className="text-[0.8rem] font-medium text-destructive">
                      {registerForm.formState.errors.root.message}
                    </div>
                  )}
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
