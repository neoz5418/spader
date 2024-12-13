import { Layout } from '@/components/custom/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { useCurrentWorkspace } from '@/hooks/use-setting.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const { currentWorkspace, isLoading } = useCurrentWorkspace()
  useEffect(() => {
    if (currentWorkspace) {
      navigate(`/workspaces/${currentWorkspace.name}/instances`)
    }
  }, [currentWorkspace, navigate])
  if (!currentWorkspace || isLoading) {
    return <></>
  }
  return (
    <Layout>
      <Layout.Body>
        <Tabs
          orientation="vertical"
          defaultValue="overview"
          className="space-y-4"
        >
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  {/* TODO: add background to card */}
                  <CardTitle className="text-2xl font-bold">
                    算力容器
                  </CardTitle>
                  <CardDescription>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm font-light">算力实例是一种灵活高效的云计算服务，支持各种场景，比如通用计算、大数据处理、AI
                    训练等。
                  </div>
                  <div
                    className="text-sm font-light">你可以按需调整资源，用更低的成本获得更强的性能，快速应对业务需求。简单好用，可靠省心！
                  </div>
                  <div>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      <a href="./instances">算力实例</a></button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}
