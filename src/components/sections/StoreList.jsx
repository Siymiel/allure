import React, { useState, useEffect } from 'react'
import StoreCard from '../cards/StoreCard'
import { HiOutlineSortDescending } from 'react-icons/hi'
import axios from 'axios'


const StoreList = ({ currentpage }) => {
  const page = currentpage

  const [stores, setStores] = useState([])
  const fetchStores = async () => {
    try {
      const res = await axios.get('/api/v1/stores')
      setStores(res.data)
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    fetchStores()
  }, [])

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
          {
            stores.map(store => 
            <StoreCard 
              key={store._id} 
              title={store.name}
              storeImg={store.image}
              />
              )
          }
            
          </section>
    </section>
  )
}

export default StoreList