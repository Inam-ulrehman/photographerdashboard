import React from 'react'
import styled from 'styled-components'

const ProductsHolder = ({
  id,
  created_at,
  color,
  urls,
  likes,
  link,
  description,
  alt_description,
}) => {
  const { small } = urls
  return (
    <Wrapper>
      <div className='img-box'>
        <img src={small || ''} alt='' />
      </div>
      <div className='body-box'>
        <div className='heading'>
          <p>
            {description || alt_description || 'Great artist and good work'}
          </p>
          <p>
            Total likes: <span>{likes}</span>
          </p>
          <p>{}</p>
        </div>
        <div className='footer'></div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  .img-box {
    width: 200px;
    height: 200px;

    overflow: hidden;
    .img {
      width: 100%;
      height: 200px;
      display: block;
      object-fit: cover;
    }
  }
  .heading {
    color: var(--primary-8);
    padding: 1rem;
    span {
      background-color: var(--primary-1);
      border-radius: var(--radius);
      padding: 2px 8px;
    }
  }
`
export default ProductsHolder
