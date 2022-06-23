import { React } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

import { navLink } from '../../utils/data'
import { LogOutUser } from '../../feature/user/userSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper className='link-container'>
      {navLink.map((items) => {
        const { id, name, path, icon } = items
        return (
          <NavLink key={id} className='links' to={path}>
            {icon}
            {name}
          </NavLink>
        )
      })}
      <NavLink to='/' onClick={() => dispatch(LogOutUser())}>
        <AiOutlineLogout />
        logOut
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--primary-1);
  display: flex;

  transition: var(--transition);
  svg {
    margin-right: 1rem;
  }
  a {
    padding: 1rem;
    border-radius: var(--radius);
    :hover {
      background-color: var(--primary-8);
      color: var(--white);
      transition: var(--transition);
    }
  }
`
export default Navbar
