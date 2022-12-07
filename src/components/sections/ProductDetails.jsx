import styled from "styled-components";
import { mobile } from "../../responsive";
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

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
  padding-left: 48px;
  padding-top: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const ProductDetails = () => {

  return (
    <Container>
      <BackButton>Go Back</BackButton>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
        </ImgContainer>
        <InfoContainer>
          <Title className="tracking-wide">Product Title</Title>
          <Desc className="tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium 
          </Desc>
          <div className="flex space-x-4 items-baseline">
            <Price>Ksh 2999</Price>
            <p className="line-through text-xl font-light">Ksh 3400</p>
            <div className="px-3 py-1 rounded-full bg-red-400 text-white grid items-center justify-center">
                <p className="text-xs font-light uppercase">11% off</p>
            </div>
          </div>
          <AddContainer className="mt-10">
            <AmountContainer>
              <GrFormSubtract className="w-6 h-6" style={{"cursor": "pointer"}} />
              <Amount>1</Amount>
              <GrFormAdd className="w-6 h-6" style={{"cursor": "pointer"}}/>
            </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
