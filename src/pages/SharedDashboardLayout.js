import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNavbar from '../components/navbar/MobileNavbar'
import Navbar from '../components/navbar/Navbar'

const SharedDashboardLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
        <MobileNavbar />
      </nav>
      <Outlet />
    </div>
  )
}

export default SharedDashboardLayout
