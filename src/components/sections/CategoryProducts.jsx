import React from 'react'
import ProductCard from '../cards/ProductCard'
// import { HiOutlineSortDescending } from 'react-icons/hi'
import { useSelector } from 'react-redux'
// import { getLatestProducts } from '../../redux/apis/productsApiCalls'

const CategoryProducts = () => {
  const categoryProducts = useSelector(state => state.products?.products)
  // const dispatch = useDispatch()
  // const param = "new";

  // const handleGetLastestProducts = () => {
    // getLatestProducts(dispatch, param)
  // }

  return (
    <section>
      <div className='px-10 text-2xl pb-5 font-light mt-20 flex items-center justify-between'>
        <h3>Products under this category ({categoryProducts ? categoryProducts.length : 0})</h3>
        <select className='py-1 text-sm'>
          <option>Latest</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
    <section className={`grid ${categoryProducts.length > 0 ? 'grid-cols-4' : 'grid-cols-1'} gap-6 px-10`}>
      {categoryProducts.length > 0 ?
      categoryProducts.map(product => (
        <ProductCard key={product?._id} product={product}/>
      )) :
      <p className='text-2xl font-light text-center'>No products found for this category</p>
      }
    </section>
    </section> 
  )
}

export default CategoryProducts