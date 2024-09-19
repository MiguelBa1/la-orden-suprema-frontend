import { axiosInstance } from '@lib/axiosInstance'

export async function sendEmail(email: string) {
  const { data } = await axiosInstance.post('/forgot-password', { email })

  return data
}
