import { axiosInstance } from '@lib/axiosInstance.ts'
import { GeneralMissionsList } from '@pages/assassin'

export async function getGeneralMissionsList() {
  const { data } = await axiosInstance.get<GeneralMissionsList>('/missions/general')

  return data
}
