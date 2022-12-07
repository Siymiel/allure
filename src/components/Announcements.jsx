import { BsCart4, BsTruck } from 'react-icons/bs'
import { RiLuggageCartLine } from 'react-icons/ri'

const Announcements = () => {
  return (
  <div className='flex items-center justify-between px-10 py-2 text-white bg-black bg-opacity-75'>
      <div className='flex items-center space-x-1 font-light'>
        <BsCart4 className='fill-[#C3129B]'/>
        <span className='text-xs tracking-wider'>15 days free return of purchased products.</span>
      </div>
      <div className='flex items-center space-x-1 font-light'>
        <RiLuggageCartLine className='fill-[#C3129B]'/>
        <span className='text-xs tracking-wider'>Place your order, pay on delivery!</span>
      </div>
      <div className='flex items-center space-x-1 font-light'>
        <BsTruck className='fill-[#C3129B]'/>
        <span className='text-xs tracking-wider'>We do delivery country wide.</span>
      </div>
    </div>
  )
}

export default Announcements