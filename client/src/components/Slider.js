import React, { useState } from "react";
import { styled } from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {sliderItems} from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
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
    flex-direction: row;
    align-items: center;
    transition: all 1.5s ease;
    transform: translateX(${(props)=> props.slideindex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: #${(props)=> props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1; 
  padding: 50px;
  margin: auto 15vw;
`;

const Title = styled.h1`
    font-size: 4.5rem;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    background: linear-gradient(to right, teal 50%, #fff 50%);
    background-size: 200% 100.5%;
    background-position: right bottom;
    color: #020202;
    border-color: teal;
    box-shadow: 3px 3px 2px rgba(0,0,0,0.3);
    transition: all .3s ease-out;
    &:hover {
        background-position: left bottom;
        color: white;
    }
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex<2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>

            <Wrapper slideindex={slideIndex}>
                {sliderItems.map((item)=> (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;
