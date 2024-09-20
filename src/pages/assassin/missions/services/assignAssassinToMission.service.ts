import { axiosInstance } from '@lib/axiosInstance'
import { ResponseMessage } from '@models/api'

type AssignAssassinToMissionProps = {
  missionId: string
}

export async function assignAssassinToMission({ missionId }: AssignAssassinToMissionProps) {
  const { data } = await axiosInstance.put<ResponseMessage>(`/missions/${missionId}/assign`)

  return data
}
