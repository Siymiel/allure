import React, { useState } from 'react'
import { HiOutlineUser, HiOutlineUserCircle } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import { CgMenuGridO } from 'react-icons/cg'
import { CiFaceSmile } from 'react-icons/ci'
import { FaHandSparkles } from 'react-icons/fa'
import { GrUserFemale } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom'
import { Badge } from "@material-ui/core";

const Header = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <header className='border-t border-gray-400 sticky top-0 z-30 bg-white transition-all'>
    <section className=' max-w-6xl mx-auto'>
      <div className='flex items-center justify-between py-4'>
        <Link to="/">
          <img className='w-full h-8 object-cover object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_header_logo-1.png" alt="logo"/>
        </Link>

        <div className="flex items-center justify-center">
          <div className="flex border border-[#C3129B] rounded">
              <input type="text" className="px-4 py-2 border-0 w-96 text-sm font-light" placeholder="Search for products..." />
              <button className="flex items-center justify-center px-4 border-l border-[#C3129B]">
                  <svg className="w-6 h-6 text-[#C3129B]" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
              </button>
          </div>
        </div>   

        <ul className='flex items-center space-x-3'>
          <li>
            <HiOutlineUser className='w-5 h-5'/>
          </li>
          <li className='pl-2'>
            <MdFavoriteBorder className='w-5 h-5'/>
          </li>
          <li className='pl-2'>
            <Link to="/cart">
               <Badge badgeContent={0} color="primary">
                  <BsCart3 className='w-5 h-5'/>
               </Badge>
            </Link>
          </li>
        </ul>
      </div>
    </section>

    <nav className='text-sm font-semibold flex justify-between bg-black py-3 text-white px-10'>
      <button className='flex items-center space-x-1' variant="contained" onClick={handleClick}>
        <CgMenuGridO className='h-4 w-5'/>
        <p className='font-light'>Categories</p>
      </button>
      <ul className='flex items-center space-x-5 font-light'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>
          <Link to="/store-listings">
            Find a Store
          </Link>
        </li>
        <li>
          <Link to="/questions">
            FAQs
          </Link>
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center space-x-2">
        <div class="w-7 h-7 rounded-full bg-[#C3129B] grid items-center justify-center">
          <FiPhoneCall />
        </div>
        <p className="text-xs font-light text-white">Call us: +254(0)759 817 749</p>
      </div>
    </nav>
    <Popover
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      className="mt-24"
    >
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
    </Popover>

    </header>
  )
}

export default Header