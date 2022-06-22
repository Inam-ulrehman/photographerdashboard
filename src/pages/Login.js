import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormRow from '../components/FormRow'
import { toast } from 'react-toastify'
import {
  changeFormToggleState,
  getFormInputValues,
  loginUserThunk,
  registerUserThunk,
} from '../feature/user/userSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state)

  // handleSubmit
  const handleSubmit = (e) => {
    const { name, email, password, isMember } = user
    e.preventDefault()
    if (!email || !password || (!isMember && !name)) {
      return toast.warn('Please fill in all the details....', {
        position: 'top-center',
      })
    }
    if (isMember) {
      return dispatch(loginUserThunk({ email, password }))
    }
    dispatch(registerUserThunk({ name, email, password }))
    return
  }

  // handleChange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getFormInputValues({ name, value }))
  }

  // handleToggle
  const handleFormToggle = () => {
    dispatch(changeFormToggleState())
  }

  const { serverUser } = user
  useEffect(() => {
    if (serverUser) {
      setTimeout(() => {
        dispatch(navigate('/home'))
      }, 2000)
    }
    // eslint-disable-next-line
  }, [serverUser])
  return (
    <main className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='title'>{user.isMember ? 'Login' : 'Register'}</h3>
        <div className='title-underline'></div>
        {/* Name input */}
        {!user.isMember && (
          <FormRow
            name='name'
            id='name'
            type='text'
            value={user.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          name='email'
          id='email'
          type='email'
          value={user.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          name='password'
          id='password'
          type='password'
          value={user.password}
          handleChange={handleChange}
        />
        <button
          disabled={user.isLoading}
          type='submit'
          className='btn btn-block'
        >
          {user.isMember ? 'Login' : 'Register'}
        </button>
        <p>
          {user.isMember ? 'Are you Register ? ' : 'Are you Member ? '}{' '}
          <button type='button' onClick={handleFormToggle} className='btn'>
            {user.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </main>
  )
}

export default Login
