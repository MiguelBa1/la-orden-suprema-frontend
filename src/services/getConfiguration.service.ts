import { axiosInstance } from '@lib/axiosInstance'

type Configuration = {
  MONEY_PER_COIN: number;
  INFORMATION_PRICE: number;
}

export async function getConfiguration() {
  const { data } = await axiosInstance.get<Configuration>('/configuration')

  return data
}
