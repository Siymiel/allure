import { useNavigate } from "react-router-dom"

const VendorSection = ({ store }) => {
  const navigate = useNavigate()
  return (
    <section className="mt-10 max-w-full px-20">
        <section className="grid grid-cols-2 gap-8">
            <section className="grid">
                <div className="flex items-center space-x-2 pb-4 divide-x divide-gray-800">
                  <div className="hover:bg-gray-100 rounded px-5 py-1 cursor-pointer" onClick={() => navigate(-1)}>
                    <p className="text-base font-light">Back</p>
                  </div>
                  <h4 className="text-2xl font-light pl-3">Vendor Details</h4>
                </div>
                 <div className="flex items-center space-x-4">
                    <img className='h-24 w-24 rounded-full object-center object-cover' src={store?.logo} alt="store-logo"/>
                    <p className="text-3xl font-light">{store?.name}</p>
                 </div>
                 <p className="text-sm font-light tracking-wide mt-2">{store?.desc}</p>

            </section>
            <form className="grid">
                <h4 className="text-2xl font-light pb-4">Contact Vendor</h4>
                <input type="text" placeholder="FullName" className="px-4 py-1 text-sm font-light"/>
                <input type="email" placeholder="Email" className="px-4 py-1 text-sm font-light mt-4"/>
                <textarea className="mt-4 text-sm font-light" rows="5" placeholder="Message"></textarea>
                <button className="text-sm px-6 py-1 rounded bg-[#C3129B] text-center uppercase mt-5 font-light text-white">Send Message</button>
            </form>
        </section>
    </section>
  )
}

export default VendorSection