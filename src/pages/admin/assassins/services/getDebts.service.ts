import { axiosInstance } from '@lib/axiosInstance'
import { Debts } from '@pages/admin'

export async function getDebts(assassinId?: string) {
  if (!assassinId) {
    throw new Error('No assassinId provided')
  }

  const { data } = await axiosInstance.get<Debts>(`assassins/${assassinId}/debts`)

  return data
}
