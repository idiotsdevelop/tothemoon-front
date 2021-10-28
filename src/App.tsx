import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import MarketPage from './pages/MarketPage'
import styled from 'styled-components'

const Helmet = styled.div`
  position: fixed;
  background-color: blue;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    // <Helmet>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/market" component={MarketPage} />
      </Switch>
    </BrowserRouter>
    // </Helmet>
  )
}

export default App
