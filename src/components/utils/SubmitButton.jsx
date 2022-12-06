import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const SubmitButton = () => {
  return (
    <div className='pt-5 flex'>
        <input type="email" className='py-2 px-4 text-sm font-light rounded-l' placeholder="Email Address"/>
        <div className='p-2 px-2 bg-[#C3129B] grid items-center rounded-t-r rouded-b-r'>
            <HiArrowRight className="w-4 h-4 text-white"/>
        </div>
    </div>
  )
}

export default SubmitButton