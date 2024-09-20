import { MissionDetails } from '@pages/admin'
import { axiosInstance } from '@lib/axiosInstance.ts'

export async function getMissionDetails(id?: string) {
  const { data } = await axiosInstance.get<MissionDetails>(`/missions/${id}`)

  return data
}
