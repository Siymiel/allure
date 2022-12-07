import React from 'react'
import ProductCard from '../cards/ProductCard'
import { HiOutlineSortDescending } from 'react-icons/hi'

const CategoryProducts = () => {
  return (
    <section>
      <div className='px-10 text-2xl pb-5 font-light mt-20 flex items-center justify-between'>
        <h3>Showing all 4 results</h3>
        <HiOutlineSortDescending className='w-7 h-7'/>
      </div>
    <section className='grid grid-cols-4 gap-6 px-10'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </section>
    </section>
  )
}

export default CategoryProducts