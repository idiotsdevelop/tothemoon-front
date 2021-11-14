import axios from 'axios'
import {createContext, useEffect, useReducer, useContext} from 'react'

const defaultValue = {
  state: {},
  dispatch: null,
}

const GlobalContext = createContext<any>(defaultValue)

const getRealTimeData = (realTimeData: any, data: any) => {
  if (realTimeData) {
    if (!realTimeData.map((list: any) => list.code).includes(data.code)) {
      return realTimeData.concat(data)
    } else {
      const idx = realTimeData.findIndex((list: any) => list.code === data.code)
      realTimeData[idx] = data
      return realTimeData
    }
  } else {
    const tmpArr: any[] = []
    realTimeData = tmpArr.concat(data)
    return realTimeData
  }
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_MARKET':
      return {
        ...state,
        markets: action.payload,
      }
    case 'GET_REAL_TIME_DATA':
      return {
        ...state,
        realTimeData: getRealTimeData(state.realTimeData, action.payload),
      }
    default: {
      return state
    }
  }
}

const initialState = {
  markets: null,
  marketType: 'korea',
  realTimeData: null,
}

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchMarkets = async () => {
    const {data} = await axios.get(
      'https://api.upbit.com/v1/market/all?isDetails=false',
    )

    const markets = data
      .filter((market: any) => market.market.includes('KRW-'))
      .map((market: any) => market.market)

    dispatch({type: 'GET_MARKET', payload: markets})

    const ws = new WebSocket('wss://api.upbit.com/websocket/v1')

    ws.onopen = () => {
      ws.send(
        JSON.stringify([
          {
            ticket: 'test',
          },
          {
            type: 'ticker',
            // codes: ['KRW-BTC'],
            codes: markets,
          },
        ]),
      )
    }
    ws.onmessage = async (e: MessageEvent) => {
      const {data} = e
      const text = await new Response(data).text()

      dispatch({type: 'GET_REAL_TIME_DATA', payload: JSON.parse(text)})
    }
  }

  useEffect(() => {
    fetchMarkets()
  }, [])

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
