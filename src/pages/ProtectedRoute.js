import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { serverUser } = useSelector((state) => state.user)
  if (!serverUser) {
    return <Navigate to='/' />
  }
  return <div>{children}</div>
}

export default ProtectedRoute
