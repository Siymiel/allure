import Header from "../components/Header"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"
import { useSelector } from "react-redux"
import WishCard from '../components/cards/WishCard'
import { Link } from 'react-router-dom'
import { clearWishlist } from "../redux/features/wishlistFeature"
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist)
  const dispatch = useDispatch()

  const handleClearWishlist = () => {
    toast((t) => (
      <div>
        <span className="text-sm font-light">Are you sure you want to clear your wishlist?</span>
        <div className="flex items-center space-x-2 pt-2">
          <button className="text-sm font-light px-5 py-0.5 bg-red-400 text-white" 
          onClick={() => {
            dispatch(clearWishlist())
            toast.dismiss(t.id)
            toast.success("Items removed from wishlist")
          }}>
            Yes
          </button>
          <button className="text-sm font-light px-5 py-0.5 bg-blue-400 text-white" onClick={() => toast.dismiss(t.id)}>
            No
          </button>
        </div>
      </div>
    ));
  }

  return (
    <main>
      <Announcements />
      <Header />
      <section className="max-w-7xl mx-auto px-5">
        <div className="py-5 flex justify-between items-center">
          <p className="font-light">Total items: {wishlist?.length}</p>
          <div className="flex items-center space-x-5">
            <Link to="/products">
              <button className="py-1 px-5 rounded border text-sm font-light bg-gray-200">Add Items</button>
            </Link>
            {
              wishlist.length < 1 ?
              "" :
              <button onClick={handleClearWishlist} className="py-1 px-5 rounded border text-sm font-light text-white bg-[#C3129B]">Clear list</button>
            }
          </div>
        </div>
        <section className="grid grid-cols-4 gap-6 mt-5">
        {
          wishlist.length > 0 ?
          wishlist.map((item, index) => (
            <WishCard key={index} product={item}/>
          )) :
          <p className="text-3xl font-light text-center mt-20">Wish list is empty</p>
        }
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Wishlist