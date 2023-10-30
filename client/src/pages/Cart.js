import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'
import { useSelector, useDispatch } from 'react-redux'
import { publicRequest } from '../requestMethods'
import { Link, useNavigate } from 'react-router-dom'
import { addProduct, clearCart, removeProduct } from '../redux/cartRedux'
import PayButton from '../components/PayButton'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "black"};
  padding: ${props => props.type === "filled" && "12px"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`
const Info = styled.div`
  flex: 3;
`
const Prod = styled.div``
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 7px 0;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
  cursor: pointer;
  ${mobile({ width: "55%" })};
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  box-shadow: 0px 0px 2px 0px;
  border-radius: 50%;
  background-color: ${props => props.color}
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: "5px 15px" })};
`
const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: 10px;
`
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ margin: "30px 0" })};
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);

  const continueShop = () => {
    navigate(-1);                // get back
  }

  const emptyCart = () => {
    if (cart.items) {
      const clear = window.confirm("Are you sure you want to clear all products from cart? Because this action can led to remove all your selected choice of products.")
      if (clear) {
        dispatch(clearCart());      // clear cart
      }
    }
  }

  const addingProduct = (product) => {
    const { _id, color, size, price } = product;
    dispatch(addProduct({ _id, quantity: 1, color, size, price }));      // add by 1 quantity

  }
  const removingProduct = (product) => {
    const { _id, color, size, price } = product;
    dispatch(removeProduct({ _id, quantity: 1, color, size, price }));  // remove by 1 quantity
  }

  const fetchProductData = async (id) => {
    try {
      const res = await publicRequest.get(`/products/find/${id}`);      // api call for each product
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllProductsData = async () => {
      const results = await Promise.all(
        cart.products.map((cartProduct) => fetchProductData(cartProduct._id))
      );
      setProductsData(results);
    };
    fetchAllProductsData();
  }, [cart.products]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={continueShop}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.items})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={emptyCart}>Clear Cart</TopButton>
        </Top>

        <Bottom>
          <Info>
            {cart.items > 0 && productsData.map((productData, index) => {
              const cartProduct = cart.products[index];
              return (<Prod key={index}>
                <Product>
                  <ProductDetail>
                    <Link to={`/product/${cartProduct._id}`}>
                      <Image src={productData.img} />
                    </Link>
                    <Details>
                      <ProductName><b>Product:</b> {productData.title ?? ""}</ProductName>
                      <ProductID><b>ID:</b> {cartProduct._id ?? 0}</ProductID>
                      <ProductColor color={cartProduct.color ?? ""} />
                      <ProductSize><b>Size:</b> {cartProduct.size ?? ""}</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddIcon onClick={() => addingProduct(cartProduct)} />
                      <ProductAmount>{cartProduct.quantity ?? 0}</ProductAmount>
                      <RemoveIcon onClick={() => removingProduct(cartProduct)} />
                    </ProductAmountContainer>
                    <ProductPrice>$ {cartProduct.price * cartProduct.quantity ?? 0}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </Prod>);
            })}


          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {cart.estShipping}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ {cart.discount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total ?? 0}</SummaryItemPrice>
            </SummaryItem>
              {currentUser?._id ? (
                <PayButton cartItems={cart.products} />
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                >
                  Login to Check out
                </Button>
              )}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart