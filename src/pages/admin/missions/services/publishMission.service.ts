import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

type PublishMissionProps = {
  id: string
}

export async function publishMission({ id }: PublishMissionProps) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${id}/publish`)

  return data
}
