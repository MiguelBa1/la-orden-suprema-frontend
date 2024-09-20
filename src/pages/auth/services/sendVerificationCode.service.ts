import { axiosInstance } from '@lib/axiosInstance'
import { ResponseMessage } from '@models/api'

type SendVerificationCodeProps = {
  code: string
  email: string
}

export async function sendVerificationCode({ code, email }: SendVerificationCodeProps) {
  const { data } = await axiosInstance.post<ResponseMessage & { resetToken: string}>('/forgot-password/code', { code, email })

  return data
}
