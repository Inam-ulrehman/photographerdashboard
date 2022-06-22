import { AiFillHome, AiFillDashboard, AiOutlineLogout } from 'react-icons/ai'
import { TbApi } from 'react-icons/tb'
// navLink

export const navLink = [
  { id: 1, name: 'Home', path: '/home', icon: <AiFillHome /> },
  {
    id: 2,
    name: 'Dashboard',
    path: '/home/dashboard',
    icon: <AiFillDashboard />,
  },
  { id: 3, name: 'Api', path: '/home/products', icon: <TbApi /> },
  { id: 4, name: 'Logout', path: '/', icon: <AiOutlineLogout /> },
]
