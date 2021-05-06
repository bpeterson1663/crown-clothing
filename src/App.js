import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
