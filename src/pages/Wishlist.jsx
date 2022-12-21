import Header from "../components/Header"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"
// import { useDispatch } from "react-redux"
// import { removeFromWishlist } from "../redux/features/wishlistFeature"

const Whistlist = () => {
  // const dispatch = useDispatch()

  return (
    <main>
      <Announcements />
      <Header />
      <Footer />
    </main>
  )
}

export default Whistlist