import React, { useEffect } from 'react'
import ProductCardHome from '../cards/ProductCardHome'
import { getProducts } from '../../redux/apis/productsApiCalls'
import { useDispatch, useSelector } from 'react-redux'

const BestSelling = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products?.products)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch]);

  return (
    <section className='pt-20'>
        <div className='flex justify-between px-10 pb-5'>
            <h3 className='text-3xl font-light capitalize'>Best Selling Product</h3>
            <p>View all</p>
        </div>
        <section className='flex space-x-4 max-w-7xl mx-auto px-6'>
            <div style={{ height: '584px' }}>
            <div className='w-80 h-full bg-cover bg-center rounded-xl' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3QlMjBhZHZlcnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')" }}>
            </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                  products.map((product, index) => {
                    return (
                      <ProductCardHome key={product?._id} id={product?._id} imageUrl={product?.img} />
                    )
                  })
                }
            </div>
        </section>
    </section>  
  )
}

export default BestSelling