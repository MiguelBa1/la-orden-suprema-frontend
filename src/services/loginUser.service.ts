import { axiosInstance } from '@lib/axiosInstance'
import { Credential, Token } from '@models/api'

export async function loginUser({ email, password }: Credential) {
  const { data } = await axiosInstance.post<Token>('/login', { email, password })

  return data
}
