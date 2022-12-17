import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavCategories = () => {
  const categories = useSelector(state => state.categories?.categories)


  return (
    <>
      <ul className='py-2 px-4 border border-gray-100 rounded max-w-md'>
        {
          categories.length > 0 ?
          categories.map(cat => (
            <li className='flex items-center space-x-2 font-light text-black hover:bg-gray-200 cursor-pointer text-sm p-2' key={cat?._id}>
              <Link to={`/category/${cat?._id}`}>
                <span>{cat?.name}</span>
              </Link>
            </li>
          ))
          :
          <li className='text-sm font-light'>No Categories</li>
        }
    </ul>
    </>
  )
}

export default NavCategories