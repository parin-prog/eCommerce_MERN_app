import React from 'react'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    height: 50vh;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
`
const Logo = styled.h1`
    font-size: 2.5rem;
`
const Desc = styled.div`
    margin: 1.5rem 0;
    word-wrap: break-word;
`
const SocialContainer = styled.div`
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SocialIcon = styled.div`
    padding: 8px;
    color: white;
    background-color: ${props=>props.color};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 3px 2px 12px rgba(0,0,0,0.5);

`
const Center = styled.div`
    flex: 1;
    padding: 2rem;
    margin-left: 3rem;
    height: 70%;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 650;
    margin: 0.5rem 0 2rem 0;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 0.5rem;
    cursor: pointer;

    &:hover {
        color: teal;
    }
`
const Right = styled.div`
    flex: 1;
    padding: 2rem;
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    color: #0f0f3f;
`
const Payment = styled.img`
    margin: 1rem 0 0 0;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHEIN.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis alias magnam aut, soluta amet accusantium at hic repellat impedit officiis? Quos facere eos distinctio voluptas aliquid debitis qui illo consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus, dolores quibusdam rem eligendi alias assumenda laboriosam repudiandae harum, optio nostrum quis totam laborum nisi. Natus optio corporis vel odit?
            </Desc>
            <SocialContainer>
                <SocialIcon color="#2626c2">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="#ff236a">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="#10abff">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="red">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Wishlist</ListItem>
                </List>
            
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon />&nbsp; 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <PhoneIcon />&nbsp; +1 234 56 78
            </ContactItem>
            <ContactItem>
                <EmailIcon />&nbsp; contact@shien.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.jpg" />
        </Right>
    </Container>
  )
}

export default Footer