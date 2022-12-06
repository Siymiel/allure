import React from 'react'
import SubmitButton from './utils/SubmitButton'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { RxTwitterLogo } from 'react-icons/rx'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mt-20 pb-10 bg-cover bg-center relative' style={{backgroundImage: "url('https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <section className="grid grid-cols-4 gap-6 px-10 pt-20 relative z-10">
            <div>
                <div className='w-56'>
                    <img className='w-full h-20 object-contain object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_footer_logo.png" alt="logo"/>
                </div>
                <p className='text-md pt-4 text-white font-light'>Allure Technology, Inc. is a platform that hosts independent beauty companies and specialists providing them with inside access to markets on the go.</p>
                <h3 className='text-2xl  font-light pt-4 text-white'>Follow us</h3>
                <ul className='pt-4 flex items-center space-x-4'>
                    <li>
                        <CiFacebook className='w-9 h-9 text-white'/>
                    </li>
                    <li>
                        <RxTwitterLogo className='w-9 h-9 text-white'/>
                    </li>
                    <li>
                        <FaInstagram className='w-9 h-9 text-white'/>
                    </li>
                    <li>
                        <CiLinkedin className='w-9 h-9 text-white'/>
                    </li>
                </ul>
            </div>

            <div className='text-white'>
                <h5 className='text-xl font-light uppercase'>Super Deals</h5>
                <ul className='pt-5 text-sm font-light space-y-3'>
                    <li>Mid-Season sale</li>
                    <li>50% Off (Up to Kshs 5000)</li>
                    <li>30% Off on all audio item</li>
                    <li>Gift and Card</li>
                </ul>
            </div>
            
            <div className='text-white'>
                <h5 className='text-xl font-light uppercase'>Help & Information</h5>
                <ul className='pt-5 text-sm font-light space-y-3'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>My Account</li>
                    <li>Best Sale</li>
                    <li>Partnership</li>
                    <li>Collection</li>
                </ul>
            </div>
            
            <div className='text-white'>
                <h5 className='text-xl font-light uppercase'>Stay Updated</h5>
                <p className='text-md pt-4 text-white font-light'>Join our mailing list for exclusive access to sales, new stocks, and tips on the best beauty and cosmetics.</p>
                <SubmitButton />
            </div>
        </section>
        <div className='flex items-center justify-between font-light text-sm text-white border-t border-gray-100 pt-1 z-10 relative px-10 mt-4'>
            <p>© Allure Technology, Inc. 2022. All Rights Reserved.</p>
            <div>
                <p className='text-xl font-light'>Payment Method:</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer