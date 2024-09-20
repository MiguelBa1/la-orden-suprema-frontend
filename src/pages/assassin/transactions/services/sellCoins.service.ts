import { axiosInstance } from '@lib/axiosInstance'

export async function buyCoins(coins: number) {
  const { data } = await axiosInstance.post('/transactions/sell-coins', { coins })

  return data
}