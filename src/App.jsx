import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import { Home } from './Pages/Home/Home'
import { Shop } from './Pages/Shop/Shop'
import { Cart } from './Pages/Cart/Cart'
import { Checkout } from './Pages/Checkout/Checkout'
import {Navigation} from './Pages/Shared/Navigation/Navigation'
import { Login } from './Pages/Login/Login/Login'
import { Register } from './Pages/Login/Register/Register'
import { ProductDetails } from './Pages/ProductList/ProductDetails';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


function App() {

  return (
    <div className="App">
      <AuthProvider>
     <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/shop/:productId">
          <ProductDetails></ProductDetails>
          </Route>
          <Route path="/cart">
          <Cart></Cart>
          </Route>
          <Route path="/checkout">
          <Checkout></Checkout>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  )
}

export default App
