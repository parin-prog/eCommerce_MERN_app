import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userRedux'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`
const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })};
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })};
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`
const Logout = styled.button`
  font-size: 1em;
  padding: 5px 8px;
  margin: 0 10px;
  border: 0.8px outset teal;

  &:hover{
    transition: all 0.1s ease-out;
    transform: scale(1.03);
    color: black;
  }
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    dispatch(logout());
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "15px" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>
          <Link to="/" style={{color:"black", textDecoration:"none"}}>CUTS.</Link>
          </Logo>
        </Center>

        <Right>
          {!currentUser ? <>
            <MenuItem>
              <Link to="/register" style={{textDecoration:"none", color:"black"}}>REGISTER</Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ textDecoration: "none", color: "black" }} to="/login">SIGN IN</Link>
            </MenuItem>
          </> : <Logout onClick={handleLogout}>Logout</Logout>}
          <Link style={{ color: "black" }} to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar