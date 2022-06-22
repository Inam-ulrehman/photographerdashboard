import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Dashboard,
  Home,
  Landing,
  Login,
  Products,
  SharedLayout,
  Page404,
  SharedDashboardLayout,
  SingleProduct,
  ProtectedRoute,
} from './pages'
import { getProductsThunk } from './feature/products/productsSlice'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
    // eslint-disable-next-line
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path='login' element={<Login />} />
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <SharedDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path='/home/dashboard' element={<Dashboard />} />
            <Route path='/home/products' element={<Products />} />
            <Route
              path='/home/products/:productId'
              element={<SingleProduct />}
            />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
