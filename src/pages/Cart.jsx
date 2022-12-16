import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect } from "react";
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Announcements from '../components/Announcements'
import { deleteProduct, addProductQty, decProductQty, removeProduct } from "../redux/features/cartFeature";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  font-weight: 100;
  font-size: 15px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const Text = styled.span`
  cursor: pointer;
  color: brown;
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 100;
  cursor: pointer;
`;

const Cart = () => {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const handleQuantity = (id, type) => {
    if (type === "asc") {
      dispatch(addProductQty(id))
    } else {
      dispatch(decProductQty(id))
    }
  }

  useEffect(() => {  
    handleQuantity()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRemove = (id) => {
    dispatch(deleteProduct(id))
  }

  const handleClearCart = () => {
    dispatch(removeProduct())
  }

  return ( 
    <Container>
        <Announcements />
        <Header />
      <Wrapper>
        <Top>
          <Link to="/products">
            <TopButton className="font-light">CONTINUE SHOPPING</TopButton>
          </Link>
          <TopButton type="filled" onClick={handleClearCart}>CLEAR CART</TopButton>
        </Top>
        <Bottom>
          <Info>
              {cart.products?.map(product => (
              <>
                <Product key={product._id}>
                  <ProductDetail>
                    <Image className="object-center object-cover" src={product.img} />
                    <Details>
                      <ProductName className="pl-4">
                        <p className="font-medium">Title:</p> {product.title}
                      </ProductName>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      {
                      product.productQuantity > 1 ?
                      <GrFormSubtract onClick={() => handleQuantity(product._id, "desc")}/>
                      :
                      ""
                      }
                      <ProductAmount>{product.productQuantity}</ProductAmount>
                      <GrFormAdd onClick={() => handleQuantity(product._id, "asc")}/>
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.productQuantity}</ProductPrice>
                  <Text onClick={() => handleRemove(product._id)}>Remove</Text>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem className="font-light">
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>KSh {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem className="font-light">
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem className="font-light">
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>KSh {cart.total}</SummaryItemPrice>
            </SummaryItem>
              <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
