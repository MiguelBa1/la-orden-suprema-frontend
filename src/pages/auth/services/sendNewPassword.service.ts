import { axiosInstance } from '@lib/axiosInstance'

type SendNewPasswordProps = {
  email: string
  password: string
  resetToken: string
}

export async function sendNewPassword({ email, password, resetToken }: SendNewPasswordProps) {
  const { data } = await axiosInstance.post('/forgot-password/reset', {
    email,
    password,
    token: resetToken
  })

  return data
}
