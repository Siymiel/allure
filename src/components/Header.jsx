import React, { useState } from 'react'
import { HiOutlineUser, HiOutlineUserCircle } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import { CgMenuGridO } from 'react-icons/cg'
import { CiFaceSmile } from 'react-icons/ci'
import { FaHandSparkles } from 'react-icons/fa'
import { GrUserFemale } from 'react-icons/gr'
import Popover from '@mui/material/Popover';

const Header = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <header className='border-t border-gray-400'>
    <section className=' max-w-6xl mx-auto'>
      <div className='flex items-center justify-between py-4'>
        <div>
          <img className='w-full h-8 object-cover object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_header_logo-1.png" alt="logo"/>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex border border-[#C3129B] rounded">
              <input type="text" className="px-4 py-1 w-96 text-sm" placeholder="Search for products..." />
              <button className="flex items-center justify-center px-4 border-l border-[#C3129B]">
                  <svg className="w-6 h-6 text-[#C3129B]" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
              </button>
          </div>
        </div>   

        <ul className='flex items-center space-x-2 divide-x divide-[#C3129B]'>
          <li>
            <HiOutlineUser className='w-5 h-5'/>
          </li>
          <li className='pl-2'>
            <MdFavoriteBorder className='w-5 h-5'/>
          </li>
          <li className='pl-2'>
            <BsCart3 className='w-5 h-5'/>
          </li>
        </ul>
      </div>
    </section>

    <nav className='text-sm font-semibold flex justify-between bg-black py-3 text-white px-10'>
      <button className='flex items-center space-x-1' variant="contained" onClick={handleClick}>
        <CgMenuGridO className='h-4 w-5'/>
        <p>Categories</p>
      </button>
      <ul className='flex items-center space-x-5'>
        <li>Home</li>
        <li>About</li>
        <li>Find a Store</li>
        <li>FAQs</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
    <Popover
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <ul className='py-2 px-4 border border-gray-100 rounded max-w-md space-y-2'>
        <li className='flex items-center space-x-2 text-sm font-medium'>
          <CiFaceSmile className='w-4 h-4 text-[#C3129B]'/>
          <span>Makeup</span>
        </li>
        <li className='flex items-center space-x-2 text-sm font-medium'>
          <FaHandSparkles className='w-4 h-4 text-[#C3129B]'/>
          <span>Nails</span>
        </li>
        <li className='flex items-center space-x-2 text-sm font-medium'>
          <HiOutlineUserCircle className='w-4 h-4 text-[#C3129B]'/>
          <span>Skin Care</span>
        </li>
        <li className='flex items-center space-x-2 text-sm font-medium'>
          <GrUserFemale className='w-4 h-4 text-[#C3129B] fill-current'/>
          <span>Hair Products</span>
        </li>
      </ul>
    </Popover>

    </header>
  )
}

export default Header