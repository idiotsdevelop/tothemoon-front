import styled from 'styled-components'
import {ReactComponent as SearchIcon} from '../public/images/svg/search.svg'
import {ReactComponent as ToolIcon} from '../public/images/svg/tool.svg'
import {ReactComponent as OrderIcon} from '../public/images/svg/order.svg'
import CoinListDetail from './CoinListDetail'
import {useEffect, useRef, useState} from 'react'

const Wrapper = styled.div``

const Header = styled.div``

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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

const MarketWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #757575;

  & > :first-child {
    border-bottom: 4px solid #757575;
  }
`

const Market = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 8px 0;

  font-size: 11px;
  line-height: 16px;
  font-weight: 700;
`

const CoinHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-bottom: 1px solid #757575;
`

const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 0 6px 0;
`

const CoinHeaderText = styled.div`
  font-size: 8px;
  line-height: 12px;
  font-weight: 700;
`

type CoinListWrapeprProps = {
  height: number
}

const CoinListWrapper = styled.div<CoinListWrapeprProps>`
  overflow: scroll;
  max-height: ${(props) => props.height}px;
`

const markets = [
  {title: '원화 마켓'},
  {title: 'BTC 마켓'},
  {title: '보유자산'},
  {title: '즐겨찾기'},
]

const headers = [
  {title: '자산'},
  {title: '현재가'},
  {title: '변동률'},
  {title: '거래대금(24H)'},
]

const coin = {
  asset: {
    name: '비트코인',
    ticker: 'BTC-KRW',
  },
  currentPrice: 75110110,
  change: {
    rate: 0.201 * 100,
    price: 1537000,
  },
  trade: {
    number: 265006,
    unit: '백만',
  },
  rise: false,
}

interface Props {
  coinListContainerHeight: number
}

const CoinList: React.FC<Props> = ({coinListContainerHeight}) => {
  const coinListWrapperRef = useRef<HTMLDivElement>(null)
  const [coinListWrapperHeight, setCoinListWrapperHeight] = useState(0)

  useEffect(() => {
    if (coinListWrapperRef.current) {
      setCoinListWrapperHeight(
        coinListContainerHeight - coinListWrapperRef.current?.clientHeight,
      )
    }
  }, [coinListContainerHeight, coinListWrapperRef])

  return (
    <Wrapper>
      <Header ref={coinListWrapperRef}>
        <SearchWrapper>
          <SearchIcon />
          <SearchInput placeholder="검색" />
          <ToolIcon />
        </SearchWrapper>
        <MarketWrapper>
          {markets.map((market, index) => (
            <Market key={index}>{market.title}</Market>
          ))}
        </MarketWrapper>
        <CoinHeaderWrapper>
          {headers.map((header, index) => (
            <CoinHeader key={index}>
              <CoinHeaderText>{header.title}</CoinHeaderText>
              <OrderIcon />
            </CoinHeader>
          ))}
        </CoinHeaderWrapper>
      </Header>
      <CoinListWrapper height={coinListWrapperHeight}>
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
        <CoinListDetail coin={coin} />
      </CoinListWrapper>
    </Wrapper>
  )
}

export default CoinList
