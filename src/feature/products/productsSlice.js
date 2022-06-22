import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
const initialState = {
  list: [],
  isLoading: false,
}

export const getProductsThunk = createAsyncThunk(
  'products/getProductsThunk',
  async (_, thunkAPI) => {
    const searchURL = `https://api.unsplash.com/photos/`
    const secretKey = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    const url = `${searchURL}${secretKey}`

    try {
      const result = await axios.get(url)
      return result.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.errors.find((item) => item)
      )
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProductsThunk.pending]: (state) => {
      state.isLoading = true
    },
    [getProductsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.list = payload
    },
    [getProductsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export default productsSlice.reducer
