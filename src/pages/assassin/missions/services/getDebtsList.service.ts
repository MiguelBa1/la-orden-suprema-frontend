import { axiosInstance } from '@lib/axiosInstance.ts'
import { DebtsList } from '@pages/assassin'

export async function getDebtsList() {
  const { data } = await axiosInstance.get<DebtsList>('/blood-debts/users')

  return data
}
