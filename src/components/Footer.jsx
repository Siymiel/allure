import React from 'react'
import SubmitButton from './utils/SubmitButton'

const Footer = () => {
  return (
    <footer className='mt-20 pb-10 bg-cover bg-center' style={{backgroundImage: "url('https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <section className="grid grid-cols-4 gap-6 px-10 pt-20">
            <div>
                <div className='w-56'>
                    <img className='w-full h-20 object-contain object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_footer_logo.png" alt="logo"/>
                </div>
                <p className='text-md pt-4 text-white font-light'>Allure Technology, Inc. is a platform that hosts independent beauty companies and specialists providing them with inside access to markets on the go.</p>
                <h3 className='text-3xl font-light pt-4 text-white'>Follow us</h3>
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
        <div>

        </div>
    </footer>
  )
}

export default Footer