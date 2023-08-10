import React, { useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    color: white;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 1s;

    &:hover{
      background-color: #019393;
    }
`

const Announcement = () => {
  const [style, setStyle] = useState({});
  const hideIt = ()=>{
    setStyle({display:"none"})
  }
  return (
    <Container onLoad={hideIt} style={{style}}>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement