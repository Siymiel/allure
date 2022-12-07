import { CiFaceSmile } from 'react-icons/ci'
import { FaHandSparkles } from 'react-icons/fa'
import { GrUserFemale } from 'react-icons/gr'
import { HiOutlineUserCircle } from 'react-icons/hi'

const NavCategories = () => {
  return (
    <>
        <ul className='py-2 px-4 border border-gray-100 rounded max-w-md space-y-4'>
        <li className='flex items-center space-x-2 font-light text-black'>
          <CiFaceSmile className='w-6 h-6 text-[#C3129B]'/>
          <span>Makeup</span>
        </li>
        <li className='flex items-center space-x-2 font-light text-black'>
          <FaHandSparkles className='w-6 h-6 text-[#C3129B]'/>
          <span>Nails</span>
        </li>
        <li className='flex items-center space-x-2 font-light text-black'>
          <HiOutlineUserCircle className='w-6 h-6 text-[#C3129B]'/>
          <span>Skin Care</span>
        </li>
        <li className='flex items-center space-x-2 font-light text-black'>
          <GrUserFemale className='w-6 h-6 text-[#C3129B] fill-current'/>
          <span>Hair Products</span>
        </li>
      </ul>
    </>
  )
}

export default NavCategories