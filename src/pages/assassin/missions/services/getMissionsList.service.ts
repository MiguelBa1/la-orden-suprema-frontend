import { axiosInstance } from '@lib/axiosInstance'
import { MissionsList } from '@pages/assassin'

export async function getMissionsList() {
  const { data } = await axiosInstance.get<MissionsList>('/missions/assigned')

  return data
}
