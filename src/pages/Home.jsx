import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ByCategory from '../components/sections/ByCategory'
import StoreList from '../components/sections/StoreList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Header />
      <Slider />
      <ByCategory />
      <StoreList />
      <Footer />
    </main>
  )
}

export default Home