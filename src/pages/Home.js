import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import HomeHolder from '../components/HomeHolder'

const Home = () => {
  const { list } = useSelector((state) => state.products)
  return (
    <Wrapper>
      {list?.map((item) => {
        return <HomeHolder key={item.id} {...item}></HomeHolder>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (min-width: 768px) {
    margin-top: 4.2rem;
  }
`
export default Home
