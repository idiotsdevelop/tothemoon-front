import axios from 'axios'
import React, {useEffect, useState} from 'react'

const defaultValue = {
  markets: [],
  korMargets: [],
  btcMarkets: [],
}

const GlobalContext = React.createContext<any>(defaultValue)

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [markets, setMarkets] = useState([])
  const [korMargets, setKorMargets] = useState([])
  const [btcMarkets, setBtcMarkets] = useState([])

  const fetchMarkets = async () => {
    const {data: markets} = await axios.get(
      'https://api.upbit.com/v1/market/all?isDetails=false',
    )

    const korMargets = markets.filter((market: any) =>
      market.market.includes('KRW-'),
    )
    const btcMarkets = markets.filter((market: any) =>
      market.market.includes('BTC-'),
    )

    setMarkets(markets)
    setKorMargets(korMargets)
    setBtcMarkets(btcMarkets)
  }

  useEffect(() => {
    fetchMarkets()
  }, [])

  return (
    <GlobalContext.Provider value={{markets, korMargets, btcMarkets}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => React.useContext(GlobalContext)
