import { useWorkspaces } from '@/hooks/use-setting.ts'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Workspaces() {
  const { workspaces, isLoading } = useWorkspaces()
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoading) {
      return
    }
    if (!workspaces || workspaces.length === 0) {
      return
    }
    navigate(`/workspaces/${workspaces[0].name}`)
  }, [navigate, workspaces, isLoading])
  return <div></div>
}
