import { configureAuth } from 'react-query-auth'
import { loginUser, getUserService } from '@services/index'
import { User, Credential } from '@models/api'

const getUser = async (): Promise<User | null> => {
  return await getUserService()
}

const loginFn = async (credential: Credential) => {
  const token = await loginUser(credential)
  localStorage.setItem('token', JSON.stringify(token))
  return await getUser()
}

const logoutFn = async (): Promise<void> => {
  localStorage.removeItem('token')
}

export const { useUser, useLogin, useLogout, AuthLoader } = configureAuth({
  userFn: getUser,
  loginFn: loginFn,
  logoutFn: logoutFn,
  registerFn: function (): Promise<User | null> {
    throw new Error('Function not implemented.')
  }
})
