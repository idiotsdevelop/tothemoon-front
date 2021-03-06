import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header'
import GlobalProvider from './contexts/global'
import CustomerCenterPage from './pages/CustomerCenterPage'
import IndexPage from './pages/IndexPage'
import MarketPage from './pages/MarketPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalProvider>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/market" component={MarketPage} />
          <Route path="/customer-center" component={CustomerCenterPage} />
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
