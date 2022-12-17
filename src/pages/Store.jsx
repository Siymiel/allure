import Header from "../components/Header"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"
import Hero from "../components/Hero"
import VendorSection from "../components/sections/VendorSection"
import { getStore } from '../redux/apis/storeApiCalls'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom" 

const Store = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const storeId = location.pathname.split('/')[2]
  const store = useSelector((state) => state.stores?.store)

  useEffect(() => {
    getStore(dispatch, storeId)
  }, [dispatch, storeId]);

  return (
    <main>
      <Announcements />
      <Header />
      <Hero store={store}/>
      <VendorSection store={store}/>
      <Footer />
    </main>
  )
}

export default Store