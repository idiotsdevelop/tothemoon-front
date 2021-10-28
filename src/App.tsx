import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import MarketPage from './pages/MarketPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/market" component={MarketPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
