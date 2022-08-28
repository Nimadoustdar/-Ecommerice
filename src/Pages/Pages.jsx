import React from 'react'
import Annocument from '../Components/Annocument/Annocument'
import Disount from '../Components/Disount/Disount'
import FlashDeals from '../Components/FlashDeals/FlashDeals'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/HomePage/Home'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import Shop from '../Components/Shop/Shop'
import TopCate from '../Components/top/TopCate'
import Wrapper from '../Components/Wrapper/Wrapper'

const Pages = ({ productItems, addToCart, cartItem, shopItems }) => {
  return (
    < >
      <Home cartItem={cartItem} />
      <FlashDeals
        productItems={productItems}
        addToCart={addToCart}
        cartItem={cartItem}
      />
      <TopCate />
      <NewArrivals />
      <Disount />
      <Shop
        shopItems={shopItems}
        addToCart={addToCart}
      />
      <Annocument/>
      <Wrapper/>
      <Footer/>
    </>
  )
}

export default Pages