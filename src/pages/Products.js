import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductsHolder from '../components/ProductsHolder'

const Products = () => {
  const { products } = useSelector((state) => state)
  const { list, isLoading } = products
  if (isLoading) {
    return (
      <div>
        <h3 className='title'>Loading....</h3>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      {list?.map((items) => {
        const {
          id,

          color,
        } = items

        return (
          <article
            className='products-container'
            key={id}
            style={{ backgroundColor: color, gap: '2rem' }}
          >
            <ProductsHolder {...items} />
          </article>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media (min-width: 768px) {
    margin-top: 4.2rem;
  }
  .products-container {
    margin-top: 1rem;
  }
`
export default Products
