import React, {useRef} from 'react'

const defaultValue = {
  ws: null,
}

const WebScoketContext = React.createContext<any>(defaultValue)

export default function WebSocketProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const webSocketUrl = 'wss://api.upbit.com/websocket/v1'
  let ws = useRef<WebSocket | null>(null)

  if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl)

    ws.current.onopen = () => {
      console.log('connected to ' + webSocketUrl)

      ws.current!.send(
        JSON.stringify([
          {ticket: 'test'},
          {type: 'ticker', codes: ['KRW-BTC', 'KRW-ETH']},
        ]),
      )
    }
    ws.current.onclose = (error) => {
      console.log('disconnect from ' + webSocketUrl)
      console.log(error)
    }
    ws.current.onerror = (error) => {
      console.log('connection error ' + webSocketUrl)
      console.log(error)
    }
  }

  return (
    <WebScoketContext.Provider value={{ws}}>
      {children}
    </WebScoketContext.Provider>
  )
}

export const useWebSocket = () => React.useContext(WebScoketContext)
