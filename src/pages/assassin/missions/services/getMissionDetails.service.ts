import { axiosInstance } from '@lib/axiosInstance'
import { MissionDetails } from '@pages/assassin'

export async function getMissionDetails(id?: string) {
  if (!id) {
    throw new Error('Mission ID is required')
  }

  const { data } = await axiosInstance.get<MissionDetails>(`/missions/${id}`)

  return data
}
