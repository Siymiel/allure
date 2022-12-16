import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import CategoryProducts from './pages/CategoryProducts';
import Product from './pages/Product';
import Cart from './pages/Cart';
import StoreList from './pages/StoreList';
import Faqs from './pages/Faqs';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux'

const App = () => {
  const token = useSelector(state => state.user?.currentUser?.accessToken);
  return (
   <>
    <Routes>
      <Route exact path="/login" element={token ? <Navigate replace to="/"/> : <Login />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/category/:slug" element={<CategoryProducts />}/>
      <Route exact path="/product/:slug" element={<Product />}/>
      <Route exact path="/cart" element={<Cart />}/>
      <Route exact path="/store-listings" element={<StoreList />}/>
      <Route exact path="/questions" element={<Faqs />}/>
      <Route exact path="/store/:slug" element={<Store />}/>
    </Routes>
   </>
  )
}

export default App