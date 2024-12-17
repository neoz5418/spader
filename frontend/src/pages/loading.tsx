import { useNavigate } from 'react-router-dom'
import Loader from '@/components/loader'
import { useCurrentUser } from '@/hooks/use-setting'
import { useEffect } from 'react'

export default function Loading() {
  const navigate = useNavigate()
  const { currentUser, isLoading } = useCurrentUser()
  useEffect(() => {
    if (isLoading) return;
    if (currentUser) {
    navigate(`/workspaces/`)
  } else {
    navigate('/sign-in')
  }
  }, [currentUser, navigate, isLoading])
  if (isLoading) {
    return <div className="relative h-full overflow-hidden bg-background">
      <Loader />
    </div>
  }
}
