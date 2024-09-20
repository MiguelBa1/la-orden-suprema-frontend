import { axiosInstance } from '@lib/axiosInstance.ts'
import { ResponseMessage } from '@models/api'

type PayMissionProps = {
  id: string
}

export async function payMission({ id }: PayMissionProps) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${id}/pay`)

  return data
}
