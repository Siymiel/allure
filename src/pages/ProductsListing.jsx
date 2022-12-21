import Header from "../components/Header"
import Footer from "../components/Footer"
// import StoreListingHero from "../components/StoreListingHero"
import Announcements from '../components/Announcements'
import { useSelector } from "react-redux"
import ProductCardHome from "../components/cards/ProductCardHome"

const ProductsListing = () => {
  const products = useSelector(state => state.products.products)

  return (
    <main>
        <Announcements />
        <Header />
        <section className="max-w-7xl mx-auto">
          <div className="py-5 flex justify-between items-center">
          <p className="font-light">All Products({products?.length})</p>
          <div className="flex items-center space-x-5">
              <button className="py-1 px-5 rounded border text-sm font-light bg-gray-200">Add Items</button>
              <button className="py-1 px-5 rounded border text-sm font-light text-white bg-[#C3129B]">Clear list</button>
          </div>
        </div>
          <section className="grid grid-cols-4 gap-6 pt-10">
          {
            products.map(product => (
              <ProductCardHome key={product.id} product={product} />
            ))
          }
          </section>
        </section>
        <Footer />
    </main>
  )
}

export default ProductsListing 