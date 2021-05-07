import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
