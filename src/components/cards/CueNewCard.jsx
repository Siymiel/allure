import { BsCart3 } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { MdFavoriteBorder } from 'react-icons/md'
import { Link } from "react-router-dom";
import { addProduct } from '../../redux/features/cartFeature'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useState, useEffect } from "react";
import { addToWishlist } from "../../redux/features/wishlistFeature";
import { Info, Container, Circle, Image, Icon } from '../../styles'

const CueNewCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user?.currentUser)
  const [productQuantity] = useState(1);
  const productsInCart = useSelector(state => state.cart.products)
  const cartProds = Object.values(productsInCart)
  const wishlistProducts = useSelector(state => state.wishlist.wishlist)

  const checkProduct =  (productId) => {
    const boolean = cartProds.map(prod => {
      if(prod._id === productId) {
        return true
      } else {
        return false
      }
    })
    return boolean[0]
  }

  useEffect(() => {
    checkProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddToCart = () => {
    if(user) {
      if (product) {
        dispatch(addProduct({ ...product, productQuantity }));
        toast.success("Product added to cart!")
      } else {
        toast.error("Error selecting product!")
      } 
    } else {
      navigate('/login')
      toast.error('Sign in to continue.');
    }
  }

const handleAddToWishlist = () => {
    if (wishlistProducts.includes(product)) {
      toast("Product already added to wishlist!", { icon: "👍" })
    } else {
      dispatch(addToWishlist(product))
      toast.success("Product added to wishlist!")
    }
  }

  return (
    <Container>
      <div className="absolute z-10 top-2 left-2 bg-gray-800 text-white text-xs uppercase font-light py-1 px-3">
        <span>11% off</span>
      </div>
      <Circle />
      <Image src={product?.img} />
      <Info>
        {
          checkProduct(product?._id) === true ?
          <Icon onClick={() => toast("Product already added to cart", { icon: '👍'})}>
            <BsCart3/>
          </Icon> :
          <Icon onClick={handleAddToCart}>
            <BsCart3/>
          </Icon>
        }
        <Icon>
          <Link to={`/product/${product?._id}`}>
            <RiSearchLine />
          </Link>
        </Icon>
        <Icon onClick={() => handleAddToWishlist(product)}>
          <MdFavoriteBorder />
        </Icon>
      </Info>
    </Container>
  )
}

export default CueNewCard