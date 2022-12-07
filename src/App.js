import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CategoryProducts from './pages/CategoryProducts';
import Product from './pages/Product';
import Cart from './pages/Cart';
import StoreList from './pages/StoreList';

const App = () => {
  return (
   <>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/category/:slug" element={<CategoryProducts />}/>
      <Route exact path="/product/:slug" element={<Product />}/>
      <Route exact path="/cart" element={<Cart />}/>
      <Route exact path="/store-listings" element={<StoreList />}/>
    </Routes>
   </>
  )
}

export default App