import React from 'react'
import { styled } from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.h1`
  margin: 3vw;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 3vw;
  display: flex;
  align-items: center;
  ${mobile({ width: "25%", flexDirection: "column", alignItems: "flex-start"})};
`
const FilterText = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 1.4rem;
  ${mobile({ fontSize:"0.9em", margin: "0 5px 5px 0" })};
`
const Select = styled.select`
  padding: 10px;
  margin-right: 1.4rem;
  ${mobile({ width:"100px",padding: "8px", marginRight: "0" })};
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList