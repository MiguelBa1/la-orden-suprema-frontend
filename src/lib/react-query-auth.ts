import { configureAuth } from 'react-query-auth'
import { loginUserMock } from '@services/index'
import { User, Credential } from '@models/api'

const getUser = async (): Promise<User | null> => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

const loginFn = async (credential: Credential) => {
  const user = await loginUserMock(credential)
  localStorage.setItem('user', JSON.stringify(user))
  return user
}

const logoutFn = async (): Promise<void> => {
  localStorage.removeItem('user')
}

export const { useUser, useLogin, useLogout, AuthLoader } = configureAuth({
  userFn: getUser,
  loginFn: loginFn,
  logoutFn: logoutFn,
  registerFn: function (): Promise<User | null> {
    throw new Error('Function not implemented.')
  }
})
