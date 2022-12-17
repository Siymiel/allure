import React from 'react'
// import { Link } from 'react-router-dom'
// 
const VendorCard = () => {
  return (
    <div className='px-2'>
    <div className="max-w-md">
        <div className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://images.pexels.com/photos/7561034/pexels-photo-7561034.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="category img"
                  className="h-64 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-2 text-md font-light text-gray-900">Vendor</h3>
        </div>
    </div>
    </div>
  )
}

export default VendorCard

