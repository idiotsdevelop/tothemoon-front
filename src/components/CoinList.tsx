import styled from 'styled-components'
import {ReactComponent as SearchIcon} from '../public/images/svg/search.svg'
import {ReactComponent as ToolIcon} from '../public/images/svg/tool.svg'
import {ReactComponent as OrderIcon} from '../public/images/svg/order.svg'
import CoinListDetail from './CoinListDetail'

const Wrapper = styled.div`
  overflow: scroll;
  max-width: 20vw;

  max-height: 100vh;
  background-color: #121721;
  border-radius: 7px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-bottom: 1px solid #757575;
`

const SearchInput = styled.input`
  margin-left: 7px;
  border: none;
  background-color: #121721;
  font-size: 12px;
  line-height: 17px;
  color: #bbbcc0;

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-size: 12px;
    line-height: 17px;
    font-weight: 700;
  }
  flex-grow: 1;
`

const MarketTypeContainer = styled.div`
  display: flex;
  padding: 8px 10px 0 10px;
  justify-content: space-between;
  border-bottom: 1px solid #757575;
`

const MarketType = styled.div`
  font-size: 11px;
  line-height: 16px;
  font-weight: 700;
  padding-bottom: 7px;
  box-shadow: 0 -2px 0 #757575 inset;
`

const Headers = styled.div`
  display: flex;
  padding: 8px 8px 6px 10px;
  justify-content: space-between;
  border-bottom: 1px solid #757575;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.div`
  font-size: 8px;
  line-height: 12px;
  font-weight: 700;
  padding-right: 2px;
`

const DetailContainer = styled.div`
  & > :not(:last-child) {
    border-bottom: 0.5px solid #757575;
  }
`

const marketTypes = [
  {title: '원화 마켓'},
  {title: 'BTC 마켓'},
  {title: '보유자산'},
  {title: '즐겨찾기'},
]

const listHeaders = [
  {title: '자산'},
  {title: '현재가'},
  {title: '변동률'},
  {title: '거래대금(24H)'},
]

const coins = [
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
  {
    asset: {
      name: '비트코인',
      ticker: 'BTC/KRW',
    },
    currentPrice: 75110000,
    change: {
      rate: 2.01,
      price: 1537000,
    },
    volume: {
      number: 265006,
      unit: '백만',
    },
    increase: false,
  },
  {
    asset: {
      name: '이더리움',
      ticker: 'ETH/KRW',
    },
    currentPrice: 5053000,
    change: {
      rate: 0.56,
      price: 28000,
    },
    volume: {
      number: 143769,
      unit: '백만',
    },
    increase: true,
  },
]

const CoinList = () => {
  return (
    <Wrapper>
      <SearchContainer>
        <SearchIcon />
        <SearchInput placeholder="검색" />
        <ToolIcon />
      </SearchContainer>
      <MarketTypeContainer>
        {marketTypes.map((type, index) => (
          <MarketType key={index}>{type.title}</MarketType>
        ))}
      </MarketTypeContainer>
      <Headers>
        {listHeaders.map((header, index) => (
          <Header key={index}>
            <HeaderText>{header.title}</HeaderText>
            <OrderIcon />
          </Header>
        ))}
      </Headers>
      <DetailContainer>
        {coins.map((coin, index) => (
          <CoinListDetail key={index} coin={coin} />
        ))}
      </DetailContainer>
    </Wrapper>
  )
}

export default CoinList
