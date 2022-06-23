import React from 'react'
import styled from 'styled-components'

const HomeHolder = ({ description, alt_description, urls }) => {
  const { regular } = urls
  return (
    <Wrapper>
      <img src={regular} alt='' />
      <div>
        <p>{`${description || alt_description || 'Wonderful picture ...'}`}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    max-width: 100vw;
  }
`

export default HomeHolder
