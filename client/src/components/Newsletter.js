import React from 'react'
import { styled } from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #f8f6f0;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: 4.5rem;
    ${mobile({ fontSize: "3rem" })};
`
const Desc = styled.div`
    font-size: 1.5rem;
    font-weight: 370;
    margin-bottom: 2rem;
    ${mobile({ textAlign: "center" })};
`
const InputContainer = styled.div`
    width: 50%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })};
`
const Input = styled.input`
    flex: 9;
    border: none;
    padding-left: 1rem;
    font-size: 1rem;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    transition: all 1s ease;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter