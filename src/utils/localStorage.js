// User in localStorage

export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result && JSON.parse(result)
  return user
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}
