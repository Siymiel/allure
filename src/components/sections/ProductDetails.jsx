import styled from "styled-components";
import { mobile } from "../../responsive";
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import { addProduct } from "../../redux/features/cartFeature";
import { useState } from "react";
import toast from 'react-hot-toast';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #c3129b;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 13px;
  font-weight: 400;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid;
  background-color: white;
  cursor: pointer;
  font-weight: 200;
  font-size: 15px;
  border-radius: 5px;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const BackButton = styled.div`
  font-size: 16px;
  cursor: pointer;
`;

const ProductDetails = () => {

  const product = useSelector(state => state.products?.product)
  const user = useSelector(state => state.user?.currentUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const productId = location.pathname.split('/')[2];

  const [productQuantity, setProductQuantity] = useState(1);

  const productsInCart = useSelector(state => state.cart.products)
  const cartProds = Object.values(productsInCart)

  const checkProduct =  () => {
    const boolean = cartProds.map(prod => {
      if(prod._id === productId) {
        return true
      } else {
        return false
      }
    })
    return boolean[0]
  }


  const handleQuantity = (type) => {
    if (type === "dec") {
      productQuantity > 1  && setProductQuantity(productQuantity - 1);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };

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

  return (
    <Container>
      <div className="hover:bg-gray-100 py-1 px-4 transition-all rounded w-24 mt-2 ml-10" onClick={() => navigate(-1)}>
        <BackButton>Go Back</BackButton>
      </div>
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title className="tracking-wide">{product?.title}</Title>
          <Desc className="tracking-wide">
            {product?.desc}
          </Desc>
          <div className="flex space-x-4 items-baseline">
            <Price>Ksh {product?.price}</Price>
            <p className="line-through text-xl font-light">Ksh 4400</p>
            <div className="px-3 py-1 rounded-full bg-red-400 text-white grid items-center justify-center">
                <p className="text-xs font-light uppercase">11% off</p>
            </div>
          </div>
          <AddContainer className="mt-10">
            <AmountContainer>
              <GrFormSubtract className="w-6 h-6" style={{"cursor": "pointer"}} onClick={() => handleQuantity("dec")}/>
              <Amount>{productQuantity}</Amount>
              <GrFormAdd className="w-6 h-6" style={{"cursor": "pointer"}} onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
              {
              checkProduct() === true ? 
              <Button onClick={() => toast("Product already added to cart", { icon: "👍" })}>ADD TO CART</Button> :
              <Button  onClick={handleAddToCart}>ADD TO CART</Button>
            }
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
