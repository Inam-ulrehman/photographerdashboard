import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { navLink } from '../../utils/data'
import { AiOutlineMenuFold, AiOutlineLogout } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { LogOutUser } from '../../feature/user/userSlice'

const MobileNavbar = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState(true)

  const handleClick = () => {
    setValue(!value)
  }
  return (
    <Wrapper>
      <button type='button' onClick={handleClick} className='btn'>
        <AiOutlineMenuFold />
      </button>
      <ul className={value ? 'hide' : ''}>
        {navLink.map((items) => {
          const { id, name, path, icon } = items
          return (
            <li className='link' key={id}>
              <NavLink onClick={handleClick} className='links' to={path}>
                {icon}
                {name}
              </NavLink>
            </li>
          )
        })}
        <li>
          <NavLink onClick={() => dispatch(LogOutUser())} to='/'>
            <AiOutlineLogout />
            logOut
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  ul {
    height: 350px;
    background-color: var(--primary-1);
    width: 100%;
    position: fixed;
    display: grid;
    margin: 0;
    justify-content: center;
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
  }
  .hide {
    display: none;
  }
`

export default MobileNavbar
