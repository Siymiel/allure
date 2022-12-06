import React from 'react'
import CategoryCard from '../cards/CategoryCard'

const BestSelling = () => {
  return (
    <section className='pt-20'>
        <div className='flex justify-between px-10 pb-5'>
            <h3 className='text-3xl font-light capitalize'>Best Selling Product</h3>
            <p>View all</p>
        </div>
        <section className='flex space-x-6 max-w-7xl mx-auto px-10'>
            <div style={{ height: '570px' }}>
            <div className='w-80 h-full bg-cover bg-center rounded-xl' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBhZHZlcnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')" }}>
            </div>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
                <CategoryCard url="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600" title="Gifts"/>
            </div>
        </section>
    </section>
  )
}

export default BestSelling