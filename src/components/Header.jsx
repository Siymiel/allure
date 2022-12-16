import React, { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { FiPhoneCall } from 'react-icons/fi'
import Popover from '@mui/material/Popover';
import SearchButtonHome from './utils/SearchButtonHome'
import {Logo} from './utils/Logo'
import NavLinks from './utils/NavLinks'
import NavCategories from './utils/NavCategories';
import NavActionButtons from './utils/NavActionButtons';


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
          <Logo />
          <SearchButtonHome />
          <NavActionButtons />
        </div>
      </section>

      <nav className='text-sm font-semibold flex justify-between bg-black py-3 text-white px-10'>
        <button className='flex items-center space-x-1' variant="contained" onClick={handleClick}>
          <CgMenuGridO className='h-5 w-5'/>
          <p className='font-light'>Categories</p>
        </button>
        <NavLinks />
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-[#C3129B] grid items-center justify-center">
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
        <NavCategories />
      </Popover>
    </header>
  )
}

export default Header