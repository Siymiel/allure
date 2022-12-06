import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ByCategory from '../components/sections/ByCategory'
import StoreList from '../components/sections/StoreList'
import Footer from '../components/Footer'
import Cta001 from '../components/ctas/Cta001'
import Cta002 from '../components/ctas/Cta002'
import CueTheNew from '../components/sections/CueTheNew'
import BestSelling from '../components/sections/BestSelling'
import SellerOfTheMonth from '../components/sections/SellerOfTheMonth'

const Home = () => {
  return (
    <main>
      <Header />
      <Slider />
      <ByCategory />
      <CueTheNew />
      <StoreList />
      <BestSelling />
      <div className='grid grid-cols-2 gap-8 mt-20 max-w-7xl mx-auto px-10'>
        <Cta001 />
        <Cta002 />
      </div>
      <SellerOfTheMonth />
      <Footer />
    </main>
  )
}

export default Home