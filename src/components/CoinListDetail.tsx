import React from 'react'
import styled from 'styled-components'
import {ReactComponent as StarIcon} from '../public/images/svg/star.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 8px 10px 3px;
`

type SCProps = {
  rise: boolean
}

const AssetContainer = styled.div`
  display: flex;
  align-items: center;
`

const Asset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 5px;
`

const Name = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: #efefef;
`

const Ticker = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
`

const CurrentPrice = styled.div<SCProps>`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: ${(props) => (props.rise ? '#56BB7C' : '#ec4e6c')};
`

const Change = styled.div`
  display: flex;
  flex-direction: column;
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

const Volume = styled.div`
  display: flex;
`

const VolumeNumber = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  color: #efefef;
`

const VolumeUnit = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
`

interface Props {
  coin: any
}

const CoinListDetail: React.FC<Props> = ({coin}) => {
  return (
    <Wrapper>
      <AssetContainer>
        <StarIcon />
        <Asset>
          <Name>{coin.asset.name}</Name>
          <Ticker>{coin.asset.ticker}</Ticker>
        </Asset>
      </AssetContainer>
      <CurrentPrice rise={coin.rise}>
        {coin.currentPrice.toLocaleString()}
      </CurrentPrice>
      <Change>
        <ChangeRate rise={coin.rise}>
          {coin.rise ? '+' : '-'}
          {coin.change.rate.toFixed(2)}%
        </ChangeRate>
        <ChangePrice rise={coin.rise}>
          {coin.rise ? '+' : '-'}
          {coin.change.price.toLocaleString()}
        </ChangePrice>
      </Change>
      <Volume>
        <VolumeNumber>
          {Math.floor(coin.volume.number / 1000000).toLocaleString()}
        </VolumeNumber>

        <VolumeUnit>{coin.volume.unit}</VolumeUnit>
      </Volume>
    </Wrapper>
  )
}

export default CoinListDetail
