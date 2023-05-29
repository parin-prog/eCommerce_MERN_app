import React from 'react'
import Announcement from '../components/Announcement'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    margin: 2rem;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 340;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 2.6rem;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 2.6rem 0;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 1.6rem;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;

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


const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://img.freepik.com/premium-photo/brunette-long-floral-dress-with-hat-poses-camera-studio_307890-8516.jpg?w=360" />
            </ImgContainer>
            <InfoContainer>
                <Title>Navy Blue Frock</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consequatur error laborum voluptatibus dolores natus nobis pariatur aliquid itaque, sint excepturi perspiciatis eveniet quisquam exercitationem soluta nesciunt? Nihil, modi facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita deserunt cupiditate tempore iure est dolorum odio. Nihil sapiente mollitia aspernatur facilis maxime molestiae error aliquid eos aut? Sequi, assumenda. Numquam!</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product