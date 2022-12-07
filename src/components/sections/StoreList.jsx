import React from 'react'
import StoreCard from '../cards/StoreCard'
import { HiOutlineSortDescending } from 'react-icons/hi'

const StoreList = ({ currentpage }) => {
  const page = currentpage
  return (
    <section className='mt-20'>
      
        {page === "home" && (
        <div className='text-center text-4xl font-light uppercase'>
            <h2>Our Store List</h2>
        </div>
        )}
        {page === "storelisting" && (
          <div className='px-10 text-2xl pb-5 font-light mt-20 flex items-center justify-between'>
            <h3>Showing all 6 results</h3>
            <HiOutlineSortDescending className='w-7 h-7'/>
          </div>
        )}

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