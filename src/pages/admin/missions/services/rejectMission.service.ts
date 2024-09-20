import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

type RejectMissionProps = {
  id: string
}

export async function rejectMission({ id }: RejectMissionProps) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${id}/reject`)

  return data
}
