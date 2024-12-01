import { HTMLAttributes, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
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
import { cn } from '@/lib/utils'
import { useSendOneTimePasswordHook } from '@/gen/hooks/useSendOneTimePasswordHook'
import { SendOneTimePasswordRequestSchema } from '@/gen/zod/sendOneTimePasswordRequestSchema.gen'
import {
  registerUserRequestSchema,
  RegisterUserRequestSchema,
} from '@/gen/zod/registerUserRequestSchema.gen'
import { PinInput, PinInputField } from '@/components/custom/pin-input'
import { PasswordInput } from '@/components/custom/password-input'
import { Separator } from '@/components/ui/separator'
import { useRegisterUserHook } from '@/gen/hooks/useRegisterUserHook'
import { RegisterUserRequest } from '../../../../../../../spader-ai/spader-console/src/gen/spaderApi.schemas'
import { z } from '@/utils/zod'
import { useToast } from '@/components/ui/use-toast'
import SignUpSuccess from '@/components/signup-success'
import useInterval from '@/hooks/use-interval'
import { Card } from '@/components/ui/card'
import { PhoneInput } from '@/components/phone-input.tsx'
import validator from "validator";

interface SignUpFormProps extends HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isPending, startTransition] = useTransition()
  const [userRequest, setUserRequest] = useState<RegisterUserRequest | null>(
    null
  )
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [step, setStep] = useState<'register' | 'verify' | 'success'>(
    'register'
  )
  const { mutateAsync: sendOneTimePasswordMutationAsync } =
    useSendOneTimePasswordHook()
  const { mutateAsync: registerUserMutationAsync } = useRegisterUserHook()
  const navigate = useNavigate()
  const { toast } = useToast()

  // 扩展现有的 schema
  const extendedRegisterUserRequestSchema = registerUserRequestSchema.extend({
    phone_number: z
      .string()
      .min(1, 'Invalid phone number')
      .refine(
        (phone) => validator.isMobilePhone(phone, ['zh-CN']),
        'Invalid phone number'
      ),
  })

  // <div>注册邮件已经发送到邮箱 {message}，请查收</div>
  const registerForm = useForm<RegisterUserRequestSchema>({
    resolver: zodResolver(extendedRegisterUserRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone_number: '',
      password: '',
      one_time_password_validate_type: 'email',
      one_time_password: '',
    },
  })

  const otpSchema = z.object({ one_time_password: z.string() })
  type OTPSchemaSchema = z.infer<typeof otpSchema>
  const verifyForm = useForm<OTPSchemaSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      one_time_password: '',
    },
  })

  async function onRegisterSubmit(data: RegisterUserRequestSchema) {
    console.log(data)
    let request: SendOneTimePasswordRequestSchema = {
      type: 'email',
      email: data.email,
    }
    data.phone_number

    try {
      const response = await sendOneTimePasswordMutationAsync(request)
      console.log(response)
    } catch {
      // error is handled by useAuth hook
      return
    }

    const userRequest: RegisterUserRequest = {
      ...data,
      one_time_password_validate_type: 'email',
      one_time_password: data.one_time_password,
    }
    setUserRequest(userRequest)
    setStep('verify')
  }

  async function onVerifySubmit(data: OTPSchemaSchema) {
    console.log('verify submit', data, userRequest)
    if (!userRequest) return
    const request: RegisterUserRequest = {
      ...userRequest,
      one_time_password_validate_type: 'email',
      one_time_password: data.one_time_password,
    }
    console.log('request', request)

    try {
      const response = await registerUserMutationAsync(request)
      console.log(response)
    } catch {
      // error is handled by useAuth hook
    }
    setStep('success')
  }
  const onInvalid = (errors: any) => console.error(errors)

  if (step === 'success') {
    return <SignUpSuccess />
  }
  if (step === 'verify') {
    return (
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            <h1 className='text-xl font-medium'>欢迎注册 Spader 账户</h1>
          </div>
          <Card className='p-6'>
            <div className='mb-2 flex flex-col space-y-2 text-left'>
              <h1 className='text-lg font-semibold tracking-tight'>
                Hello {registerForm.watch('email')}
              </h1>
              <p className='text-sm text-muted-foreground'>
                请输入邮箱收到的验证码
              </p>
            </div>
            <div className={cn('grid gap-6', className)} {...props}>
              <Form key='verifyForm' {...verifyForm}>
                <form
                  onSubmit={verifyForm.handleSubmit(onVerifySubmit, onInvalid)}
                >
                  <div className='grid gap-2'>
                    <FormField
                      control={verifyForm.control}
                      name='one_time_password'
                      render={({ field }) => (
                        <FormItem className='space-y-1'>
                          <FormControl>
                            <PinInput
                              {...field}
                              className='flex h-10 justify-between'
                              onComplete={() => {
                                setDisabledBtn(false)
                                console.log('complete')
                              }}
                              onIncomplete={() => {
                                setDisabledBtn(true)
                                console.log('incomplete')
                              }}
                            >
                              {Array.from({ length: 7 }, (_, i) => {
                                if (i === 3)
                                  return (
                                    <Separator key={i} orientation='vertical' />
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
                    <Button
                      className='mt-2'
                      disabled={disabledBtn}
                      loading={isPending}
                    >
                      Verify
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              如果你已经注册，请直接
              <Link
                to='/sign-in'
                className='underline underline-offset-4 hover:text-primary'
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
    <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
        <div className='mb-4 flex items-center justify-center'>
          <h1 className='text-xl font-medium'>欢迎注册 Spader 账户</h1>
        </div>
        <Card className='p-6'>
          <div className='mb-2 flex flex-col space-y-2 text-left'>
            <h1 className='text-lg font-semibold tracking-tight'>
              Create an account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email and password to create an account. <br />
              Already have an account?{' '}
              <Link
                to='/sign-in'
                className='underline underline-offset-4 hover:text-primary'
              >
                Sign In
              </Link>
            </p>
          </div>
          <div className={cn('grid gap-6', className)} {...props}>
            <Form key='registerForm' {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(
                  onRegisterSubmit,
                  onInvalid
                )}
              >
                <div className='grid gap-2'>
                  <FormField
                    control={registerForm.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel>用户名</FormLabel>
                        <FormControl>
                          <Input placeholder='输入您的用户名' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel>邮箱</FormLabel>
                        <FormControl>
                          <Input placeholder='输入您的邮箱' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name='phone_number'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel>手机号</FormLabel>
                        <FormControl>
                          {/*<Input placeholder='输入您的手机号' {...field} />*/}
                          <PhoneInput
                            placeholder='输入您的手机号'
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
                    name='password'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <PasswordInput placeholder='********' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className='mt-2' loading={isPending}>
                    Create Account
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
            By creating an account, you agree to our{' '}
            <a
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  )
}
