import './App.css';
import NavBar from './components/NavBar'
import Products from './components/Products'
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart'
import ProductContextProvider from './context/productsContext'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
export default () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  )
};
