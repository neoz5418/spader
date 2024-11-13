import { Outlet, useNavigate } from 'react-router-dom'
import Loader from '@/components/loader';
import useSetting from '@/hooks/use-setting';
import { useEffect } from 'react';

export default function Loading() {
  const navigate = useNavigate()
  const { workspace } = useSetting()
  useEffect(() => {
    if (workspace) {
      navigate(`/workspaces/${workspace.name}`)
    }
  }, [workspace])

  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <Loader />      
    </div>
  )
}
