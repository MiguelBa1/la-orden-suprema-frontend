import { axiosInstance } from '@lib/axiosInstance'

export async function buyCoins(coins: number) {
  const { data } = await axiosInstance.post('/transactions/buy-coins', { coins })

  return data
}
