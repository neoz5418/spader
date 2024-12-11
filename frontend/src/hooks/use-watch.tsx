import { createContext, useContext, useEffect, useState } from 'react'
import { useCurrentWorkspace } from '@/hooks/use-setting.ts'
import { getAccessToken } from '@/utils/tokens.ts'

export const EventsContext = createContext([])

export function useEvents() {
  return useContext(EventsContext)
}

export function WatchEvents({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [events, setEvents] = useState([])
  const { currentWorkspace: current } = useCurrentWorkspace()
  const token = getAccessToken();
  useEffect(() => {
    if (!current || !token) return;
    const workspace = current.name
    const ws = new WebSocket('/apis/workspace/v1/watch/workspaces/' + workspace + '?token=' + token)
    ws.onopen = () => console.log('ws opened')
    ws.onclose = () => console.log('ws closed')
    ws.onmessage = (msg) => {
      const event = JSON.parse(msg.data)
      setEvents((events)=> {
        return events.slice(-99).concat([event as never])
      })
    }

    return () => {
      ws.close()
    }
  }, [current, token])
  return <EventsContext.Provider value={events}>
    {children}
  </EventsContext.Provider>
}
