import { axiosInstance } from '@lib/axiosInstance'
import { User } from '@models/api'

export async function getUserService() {
  const { data } = await axiosInstance.get<User>('/me')

  return data
}

