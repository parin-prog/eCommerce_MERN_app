import React from 'react'
import { styled } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 19vw;
height: 45vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fdfd;
position: relative;

&:hover ${Info}{
    opacity: 1;
    transition: all 0.4s ease-out;
}
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image = styled.img`
height: 75%;
z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    color: black;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    
    &:hover{
        background-color: #e9f5f5;
        transition: all 0.4s ease-out;
        transform: scale(1.1);
    }
`

const Product = ({ item }) => {
    const dispatch = useDispatch();

    const addToCart = (product)=>{
        const {_id, color, size, price} = product;
        dispatch(addProduct({_id, quantity: 1, color, size, price}));        // adding to cart
    }

    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon onClick={()=>addToCart(item)} />
                </Icon>
                <Icon>
                    <Link style={{color:"black"}} to={`/product/${item._id}`}>
                    <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product