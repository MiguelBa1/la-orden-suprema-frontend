import { axiosInstance } from '@lib/axiosInstance'
import { ResponseMessage } from '@models/api'

type PayMissionProps = {
  missionId: string;
  assassinId: string | null;
}

export async function payMission({ missionId, assassinId }: PayMissionProps) {
  if (!assassinId) {
    throw new Error('Assassin ID is required')
  }

  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${missionId}/pay`, {
    userId: assassinId
  })

  return data
}
