import { UserAuthForm } from './components/sign-in-form'
import Logo from '@/assets/icon-white.svg'

export default function SignIn() {

  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            Spader AI
          </div>
          <img
            src={Logo}
            className='relative m-auto'
            width={301}
            height={60}
            alt='Vite'
          />

          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;一体化的云服务。
                在一朵云上开发、训练和扩展AI模型。&rdquo;
              </p>
              <footer className='text-sm'>Spader.AI</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>登录 Spader AI</h1>
              <p className='text-sm text-muted-foreground'>
                请输入您的邮箱和密码，以登录您的账户。
              </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              点击登录，即表示您同意我们的
              <a
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                服务条款
              </a>
              和
              <a
                href='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                隐私政策
              </a>
              。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
