import Header from "../components/Header"
import Footer from "../components/Footer"
import StoreListingHero from "../components/StoreListingHero"
import StoreListing from '../components/sections/StoreList'
import Announcements from '../components/Announcements'

const StoreList = () => {
  return (
    <main>
        <Announcements />
        <Header />
        <StoreListingHero title="Store Listings" imageUrl="https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"/>
        <StoreListing currentpage="storelisting" />
        <Footer />
    </main>
  )
}

export default StoreList