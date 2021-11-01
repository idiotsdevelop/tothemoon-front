import styled from 'styled-components'
import CoinList from '../components/CoinList'

const CoinListContainer = styled.div`
  margin: 10px;
`

const MarketPage = () => {
  return (
    <CoinListContainer>
      <CoinList />
    </CoinListContainer>
  )
}

export default MarketPage
