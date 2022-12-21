import styled from "styled-components";
import { BsCart3 } from 'react-icons/bs'
import { RiSearchLine } from 'react-icons/ri'
import { CgPlayListRemove } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../redux/features/wishlistFeature";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

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
  margin: 5px;
  min-width: 280px;
  height: 350px;
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

const WishCard = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemoveItem = (id) => {
        dispatch(removeFromWishlist(id))
        toast.success("Item removed from wishlist")
    }

    return (
        <Container>
        <div className="absolute z-10 top-2 left-2 bg-gray-800 text-white text-xs uppercase font-light py-1 px-3">
            <span>15% off</span>
        </div>
        <Circle />
        <Image src={product?.img} />
        <Info>
            <Icon>
            <BsCart3/>
            </Icon>
            <Icon>
            <Link to={`/product/${product?._id}`}>
                <RiSearchLine />
            </Link>
            </Icon>
            <Icon onClick={() => handleRemoveItem(product?._id)} hint="Remove item from wishlist">
            <CgPlayListRemove />
            </Icon>
        </Info>
        </Container>
    )
}

export default WishCard