import React from 'react'
import logo from '../Logo.png'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    display: flex;
    font-size: 2rem;
    flex: 1;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
`
const Logo = styled.img`
    height: 9vh;
    width: 11vw;
`
const Desc = styled.div`
    margin: 1.5rem 0;
    word-wrap: break-word;
`
const SocialContainer = styled.div`
    max-width: 50%;
    display: flex;
    align-items: center;
`
const SocialIcon = styled.div`
    padding: 7px;
    margin-right: 8px;
    color: white;
    background-color: ${props => props.color};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 3px 2px 12px rgba(0,0,0,0.5);
`
const Center = styled.div`
    flex: 1;
    padding: 2rem;
    margin: 1rem 3rem;
    height: 70%;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    ${mobile({ display: "none" })};
`
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 650;
    margin: 0.5em 0 1.5em 0;
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
    margin-bottom: 0.75rem;
    cursor: pointer;

    &:hover {
        color: teal;
    }
`
const Right = styled.div`
    flex: 1;
    padding: 2rem;
    font-size: 1rem;
    margin: 1rem 3rem;
    ${mobile({ backgroundColor: "#fff8f8" })};
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
                <Logo src={logo} /> 
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