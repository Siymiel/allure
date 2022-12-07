import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetails from '../components/sections/ProductDetails'
import Announcements from '../components/Announcements'

const Product = () => {
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