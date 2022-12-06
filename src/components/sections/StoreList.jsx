import React from 'react'
import StoreCard from '../cards/StoreCard'

const StoreList = () => {
  return (
    <section className='mt-20'>
        <div className='text-center text-4xl font-light uppercase'>
            <h2>Our Store List</h2>
        </div>
        <section className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-10 mt-10'>
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
        </section>
    </section>
  )
}

export default StoreList