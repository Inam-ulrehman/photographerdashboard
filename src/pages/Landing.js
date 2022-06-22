import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='section'>
      <h3 className='title'>Welcome to our site</h3>
      <div className='title-underline'></div>
      <h5 className='title'>
        This is a secure site you must <br />
        <Link className='btn ' to='/login'>
          Login/Register
        </Link>
      </h5>
    </section>
  )
}

export default Landing
