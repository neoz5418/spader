import useInterval from '@/hooks/use-interval'
import { IconPlanet } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

export default function SignUpSuccess() {
  const navigate = useNavigate()
  useInterval(() => {
    navigate('/sign-in')
  }, 1500)
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <IconPlanet size={72} />
        <h1 className='text-4xl font-bold leading-tight'>注册成功!!!</h1>
        <p className='text-center text-muted-foreground'>
          即将跳转到登录页面
        </p>
      </div>
    </div>
  )
}
