import { Card } from '@/components/ui/card'
import { ForgotForm } from './components/forgot-form'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <>
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            <h1 className='text-xl font-medium'>忘记密码</h1>
          </div>
          <Card className='p-6'>
            <p className='text-sm text-muted-foreground'>
              请输入您的注册邮箱，我们将向您发送密码重置的邮件。
            </p>
            <ForgotForm />
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              没有账户？{' '}
              <Link
                to='/sign-up'
                className='underline underline-offset-4 hover:text-primary'
              >
                注册
              </Link>
              。
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
