import React from 'react'
import CategoryCard from '../cards/CategoryCard'

const ByCategory = () => {
  return (
    <section className='mt-20'>
        <div className='text-center text-4xl font-light uppercase'>
            <h2>Shop by Category</h2>
        </div>
        <section className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-10 mt-10'>
            <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
            <CategoryCard url="https://images.pexels.com/photos/998405/pexels-photo-998405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Nails"/>
            <CategoryCard url="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Skin Care"/>
            <CategoryCard url="https://images.pexels.com/photos/7449901/pexels-photo-7449901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Hair Products"/>
        </section>
    </section>
  )
}

export default ByCategory