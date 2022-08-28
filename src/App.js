import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"; import './App.css';
import Header from './Components/Header/Header';
import Pagess from "./Pages/Pages";
import Data from "./Components/FlashDeals/Data";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from "react";
import Cart from './Components/Cart/Cart';
import Sdata from "./Components/Shop/Sdata";

function App() {
  // step 1 : fetch data from database

  const { productItems } = Data
  const { shopItems } = Sdata

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find(item => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map(item => (item.id === product.id ?
        { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }

  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find(item => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter(item => item.id !== product.id))

    } else {
      setCartItem(cartItem.map(item => item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item))
    }
  }
  return (
    < >

      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path='/' exact>
            <Pagess productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
          </Route>
          <Route path='/cart'>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
