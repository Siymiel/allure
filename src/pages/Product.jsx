import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetails from '../components/sections/ProductDetails'
import Announcements from '../components/Announcements'
import { useDispatch } from "react-redux";
import { getProduct } from '../redux/apis/productsApiCalls'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const productId = location.pathname.split('/')[2]

  useEffect(() => {
    getProduct(dispatch, productId)
  }, [dispatch, productId])

  return (
    <main>
        <Announcements />
        <Header />
        <ProductDetails />
        <Footer />
    </main>
  )
}

export default Product