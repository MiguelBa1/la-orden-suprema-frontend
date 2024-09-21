import { axiosInstance } from '@lib/axiosInstance'
import { AssassinDetails } from '@pages/admin'

export async function getAssassinDetails(id?: string) {
  if (!id) {
    throw new Error('No id provided')
  }

  const { data } = await axiosInstance.get<AssassinDetails>(`/assassins/${id}`)

  return data
}
