import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <h3 className='title'> 404 Page not found.... </h3>
      <Link to='/' className='btn'>
        {' '}
        Back to home
      </Link>
    </div>
  )
}

export default Page404
