import styled from "styled-components";
import { BsCart3 } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { MdFavoriteBorder } from 'react-icons/md'
import { Link } from "react-router-dom";
import { addProduct } from '../../redux/features/cartFeature'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useState } from "react";
import { addToWishlist } from "../../redux/features/wishlistFeature";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  min-width: 270px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;


const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductCardHome = ({ product }) => {
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
      toast("Producted already added to wishlist!", { icon: "🙄" })
    } else {
      dispatch(addToWishlist(product))
      toast.success("Product added to wishlist!")
    }
  }

  return (
    <Container>
        <div className="absolute z-10 top-2 left-2 bg-gray-800 text-white text-xs uppercase font-light py-1 px-3">
            <span>12% off</span>
        </div>
      <Circle />
      <Image src={product?.img} alt="Product Img"/>
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

export default ProductCardHome