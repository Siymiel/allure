import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSliders } from '../../redux/apis/slidersApiCalls'

const Container = styled.div`
  width: 100%;
  height: 77vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 55px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 1px solid;
  background-color: transparent;
  cursor: pointer;
`;

const HeroSlider = () => {
  const dispatch = useDispatch();
  const sliderItems = useSelector(state => state.sliders?.sliders)


  useEffect(() => {
    getSliders(dispatch)
  }, [dispatch])

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems?.length > 0 ? 
        sliderItems?.map((item) => (
          <Slide bg={item.bg} key={item._id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title className='-mt-20 uppercase'>{item.title}</Title>
              <Desc className="uppercase">{item.desc}</Desc>
              <Link to="/products">
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))
        : 
        ""
        }
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};

export default HeroSlider;
