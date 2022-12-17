import Header from "../components/Header"
import Footer from "../components/Footer"
import StoreListingHero from "../components/StoreListingHero"
import CatProducts from "../components/sections/CategoryProducts"
import Announcements from '../components/Announcements'
import { getCategoryProducts } from "../redux/apis/productsApiCalls"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const CategoryProducts = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const categoryId = location.pathname.split('/')[2]
  
  useEffect(() => {
    getCategoryProducts(dispatch, categoryId)
  }, [dispatch, categoryId])

  return (
    <main>
        <Announcements />
        <Header />
        <StoreListingHero title="Category Name" imageUrl="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <CatProducts />
        <Footer />
    </main>
  )
}

export default CategoryProducts