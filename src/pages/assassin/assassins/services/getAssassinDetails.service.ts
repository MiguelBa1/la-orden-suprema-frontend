import { axiosInstance } from '@lib/axiosInstance.ts'
import { AssassinDetails } from '@pages/assassin'

export async function getAssassinDetails(id?: string) {
  const { data } = await axiosInstance.get<AssassinDetails>(`/assassins/${id}`)

  return data
}
