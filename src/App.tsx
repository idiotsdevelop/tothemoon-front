import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header'
import GlobalProvider from './contexts/global'
import WebSocketProvider from './contexts/webSocket'
import IndexPage from './pages/IndexPage'
import MarketPage from './pages/MarketPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalProvider>
        <WebSocketProvider>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/market" component={MarketPage} />
          </Switch>
        </WebSocketProvider>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
