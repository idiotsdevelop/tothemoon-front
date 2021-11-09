import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as LogoIcon} from '../public/images/svg/logo.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  background-color: #000000;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
`

const Title = styled.div`
  margin-left: 10px;
  color: white;
  font-weight: bold;
  line-height: 36px;
  font-size: 25px;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 70px;
`

const Menu = styled.div`
  margin-right: 30px;
  color: white;
  font-weight: 500;
  line-height: 22px;
  font-size: 15px;
`

const menues = [
  {title: '거래소', router: '/market'},
  {title: '고객센터', router: '/customer-center'},
]

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" style={{textDecoration: 'none'}}>
        <HomeContainer>
          <LogoIcon />
          <Title>ToTheMoon</Title>
        </HomeContainer>
      </Link>
      <MenuContainer>
        {menues.map((menu, index) => (
          <Link to={menu.router} style={{textDecoration: 'none'}}>
            <Menu key={index}>{menu.title}</Menu>
          </Link>
        ))}
      </MenuContainer>
    </Wrapper>
  )
}

export default Header
