import { axiosInstance } from '@lib/axiosInstance'
import { MissionHistory } from '@pages/admin'

export async function getMissionsHistory(assassinId?: string) {
  if (!assassinId) {
    throw new Error('No assassinId provided')
  }

  const { data } = await axiosInstance.get<MissionHistory[]>(`/assassins/${assassinId}/missions`)

  return data
}
