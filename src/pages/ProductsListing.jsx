import Header from "../components/Header"
import Footer from "../components/Footer"
// import StoreListingHero from "../components/StoreListingHero"
import StoreListing from '../components/sections/StoreList'
import Announcements from '../components/Announcements'

const ProductsListing = () => {
  return (
    <main>
        <Announcements />
        <Header />
        <StoreListing currentpage="listing" />
        <Footer />
    </main>
  )
}

export default ProductsListing 