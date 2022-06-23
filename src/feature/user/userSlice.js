import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUser } from '../../utils/axios'
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isLoading: false,
  isMember: true,
  serverUser: getUserFromLocalStorage() || null,
}

// Axios.post() RegisterUserThunk
export const registerUserThunk = createAsyncThunk(
  'user/registerUserThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.post('/auth/register', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
// Axios.post() loginUserThunk
export const loginUserThunk = createAsyncThunk(
  'user/loginUserThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.post('/auth/login', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.ms)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getFormInputValues: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    changeFormToggleState: (state) => {
      state.isMember = !state.isMember
    },
    LogOutUser: (state) => {
      state.serverUser = null
      removeUserFromLocalStorage()
    },
  },
  extraReducers: {
    [registerUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.name = payload.name
      state.serverUser = payload
      toast.success(`Hello there ${payload.name}`)
      setUserInLocalStorage(payload)
    },
    [registerUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
    [loginUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [loginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.name = payload.name
      state.serverUser = payload
      toast.success(`Welcome back ${payload.name}`)
      setUserInLocalStorage(payload)
    },
    [loginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { getFormInputValues, changeFormToggleState, LogOutUser } =
  userSlice.actions

export default userSlice.reducer
