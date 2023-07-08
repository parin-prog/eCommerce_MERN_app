import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'

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
  border: ${props=>props.type === "filled" && "black"};
  padding: ${props=>props.type === "filled" && "12px"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
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
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 5px 0;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
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
  border-radius: 50%;
  background-color: ${props=>props.color}
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
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
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
  const cart = useSelector(state=>state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/');
      } catch{}
    }
    stripeToken && cart.total>0 && makeRequest();
  }, [stripeToken])
  
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
              <Info>
                {cart.products.map(product=>(<>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName><b>Product:</b> {product.title}</ProductName>
                      <ProductID><b>ID:</b> {product._id}</ProductID>
                      <ProductColor color={product.color}/>
                      <ProductSize><b>Size:</b> {product.size}</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddIcon />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
                </>))}
                
                
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                  name="CUTS. Clothing"
                  image="https://th.bing.com/th/id/OIP.B7HRUkwpkD3XWX08wC2R2wAAAA?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total*100}
                  token={onToken}
                  stripeKey="pk_test_51N4dcHSJ0SDe3t6UcTuJFWrcYuDBHgGk7nckjdEqboqgi3VSPFkw48porW4PukoyR7kdWFOGJerjXVxuqsNpDK8B00mVxkfEA6">
                  <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart