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
            <select className="py-1 text-sm font-light">
              <option>Latest</option>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
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