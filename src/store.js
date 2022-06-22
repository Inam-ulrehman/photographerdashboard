import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './feature/products/productsSlice'
import userSlice from './feature/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
})

export default store
