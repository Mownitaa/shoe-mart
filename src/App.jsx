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
import PrivateRoute from './Pages/Login/Routes/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
 
function App() {

  return (
    <div className="App">
      <AuthProvider>
     <Router>
        <Navigation></Navigation>
        <Switch>
          <PrivateRoute exact path="/">
          <Home></Home>
          </PrivateRoute>
          <PrivateRoute path="/home">
          <Home></Home>
          </PrivateRoute>
          <Route exact path="/shop">
          <Shop></Shop>
          </Route>
          <PrivateRoute path="/shop/:productId">
          <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute path="/cart">
          <Cart></Cart>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
          <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/dashboard">
          <Dashboard></Dashboard>
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
