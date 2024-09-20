import { axiosInstance } from '@lib/axiosInstance'
import { TransactionList } from '@pages/assassin'

export async function getTransactionsList() {
  const { data } = await axiosInstance.get<TransactionList>('/transactions')

  return data
}
