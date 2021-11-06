import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header'
import WebSocketProvider from './contexts/webSocket'
import IndexPage from './pages/IndexPage'
import MarketPage from './pages/MarketPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <WebSocketProvider>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/market" component={MarketPage} />
        </Switch>
      </WebSocketProvider>
    </BrowserRouter>
  )
}

export default App
