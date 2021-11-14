import styled from 'styled-components'
import {ReactComponent as StarIcon} from '../public/images/svg/star.svg'

interface Props {
  coin: any
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-bottom: 1px solid #757575;
`

const AssetWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 0 9px 3px;
`

const Asset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 5px;
`

const AssetName = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: #efefef;
`

const AssetTicker = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
`

type SCProps = {
  rise: boolean
}

const CurrentPrice = styled.div<SCProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: ${(props) => (props.rise ? '#56BB7C' : '#ec4e6c')};
`

const ChangeWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`

const Change = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`

const ChangeRate = styled.div<SCProps>`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: ${(props) => (props.rise ? '#56BB7C' : '#ec4e6c')};
`

const ChangePrice = styled.div<SCProps>`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: ${(props) => (props.rise ? '#56BB7C' : '#ec4e6c')};
`

const Trade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TradeNumber = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: #efefef;
`

const TradeUnit = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
`

const CoinListDetail: React.FC<Props> = ({coin}) => {
  const rise = coin.change !== 'FALL'

  return (
    <Wrapper>
      <AssetWrapper>
        <StarIcon />
        <Asset>
          {/* <AssetName>{coin.asset.name}</AssetName> */}
          <AssetName>비트코인</AssetName>
          <AssetTicker>{coin.code}</AssetTicker>
        </Asset>
      </AssetWrapper>
      <CurrentPrice rise={rise}>
        {coin.trade_price.toLocaleString()}
      </CurrentPrice>
      <ChangeWrapper>
        <Change>
          <ChangeRate rise={rise}>
            {rise ? '+' : '-'}
            {(coin.change_rate * 100).toFixed(2)}%
          </ChangeRate>
          <ChangePrice rise={rise}>
            {rise ? '+' : '-'}
            {coin.change_price.toLocaleString()}
          </ChangePrice>
        </Change>
      </ChangeWrapper>
      <Trade>
        <TradeNumber>
          {Math.floor(coin.acc_trade_price_24h / 1000000).toLocaleString()}
        </TradeNumber>
        {/* <TradeUnit>{coin.trade.unit}</TradeUnit> */}
        <TradeUnit>백만</TradeUnit>
      </Trade>
    </Wrapper>
  )
}

export default CoinListDetail
