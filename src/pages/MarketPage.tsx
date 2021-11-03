import styled from 'styled-components'
import CoinDetail from '../components/CoinDetail'
import CoinList from '../components/CoinList'
import CoinOrder from '../components/CoinOrder'
import CoinTrade from '../components/CoinTrade'
import CoinTradeSettings from '../components/CoinTradeSettings'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CoinListContainer = styled.div`
  margin: 1vw;
`

const CoinInfoContainer = styled.div`
  margin: 1vw 1vw 1vw 0;
`

const CoinTradeContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const MarketPage = () => {
  return (
    <Wrapper>
      <CoinListContainer>
        <CoinList />
      </CoinListContainer>
      <CoinInfoContainer>
        <CoinDetail />
        <CoinTradeContainer>
          <CoinOrder />
          <CoinTrade />
          <CoinTradeSettings />
        </CoinTradeContainer>
      </CoinInfoContainer>
    </Wrapper>
  )
}

export default MarketPage
