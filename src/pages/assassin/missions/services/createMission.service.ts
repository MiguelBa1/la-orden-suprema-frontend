import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

type CreateMissionPayload = {
  description: string
  details: string
  paymentType: string
  coinsAmount?: number
  assignedTo?: string
}

export async function createMission(payload: CreateMissionPayload) {
  const { data } = await axiosInstance.post<ResponseMessage>('/missions', payload)

  return data
}
