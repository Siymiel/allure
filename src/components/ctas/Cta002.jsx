import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Cta002 = () => {
  return (
    <div className='bg-cover bg-center w-full h-96 rounded-xl grid items-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1484860348026-73c1044c9148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGFmcmljYW4lMjB3b21hbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60')" }}>
        <div>
        <div className='px-10'>
            <p className='text-[#7F5646] pb-3 font-semibold text-lg'>Fenty Products</p>
            <h2 className='text-white font-extrabold text-4xl'>Fenty Face</h2>
            <h2 className='text-white font-extrabold text-4xl'>Shade Finder</h2>
            <p className='pt-3 font-semibold text-[#7F5646]'>Discover your <br/> foundation shade # <br/> for your skin tone</p>
        </div>
        <div className='pt-5 ml-10'>
            <button className='py-2 px-5 bg-[#7F5646] uppercase font-medium rounded-md text-white text-sm flex space-x-3 items-center'>
              Take Quiz Now <MdOutlineKeyboardArrowRight className='fill-white w-7 h-5'/></button>
        </div>
        </div>
    </div>
  )             
}

export default Cta002