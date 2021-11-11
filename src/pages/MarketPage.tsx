import {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import CoinList from '../components/CoinList'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr 0.9fr 1fr;
  grid-template-rows: minmax(100vh, 100vh) minmax(50vh, 50vh);
  grid-template-areas:
    'list chart chart chart'
    'list orderbook trade tradesettings';
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
`

const CoinListContainer = styled.div`
  grid-area: list;
  background-color: #121721;
  border-radius: 7px;
`

const CoinChartContainer = styled.div`
  grid-area: chart;
  background-color: #121721;
  border-radius: 7px;
`

const OrderBookContainer = styled.div`
  grid-area: orderbook;
  background-color: #121721;
  border-radius: 7px;
`

const TradeContainer = styled.div`
  grid-area: trade;
  background-color: #121721;
  border-radius: 7px;
`

const TradeSettings = styled.div`
  grid-area: tradesettings;
  background-color: #121721;
  border-radius: 7px;
`

const MarketPage = () => {
  const coinListContainerRef = useRef<HTMLDivElement>(null)
  const [coinListHeight, setCoinListHeight] = useState(0)

  useEffect(() => {
    if (coinListContainerRef.current) {
      setCoinListHeight(coinListContainerRef.current?.clientHeight)
    }
  }, [coinListContainerRef])

  return (
    <Wrapper>
      <CoinListContainer ref={coinListContainerRef}>
        <CoinList coinListHeight={coinListHeight} />
      </CoinListContainer>
      <CoinChartContainer>차트</CoinChartContainer>
      <OrderBookContainer>호가</OrderBookContainer>
      <TradeContainer>거래</TradeContainer>
      <TradeSettings>자동 거래 설정</TradeSettings>
    </Wrapper>
  )
}

export default MarketPage
