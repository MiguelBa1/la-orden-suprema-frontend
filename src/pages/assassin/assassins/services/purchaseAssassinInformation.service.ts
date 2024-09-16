import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

export async function purchaseAssassinInformation(assassinId?: string) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/assassins/${assassinId}/purchase-information`)

  return data
}
