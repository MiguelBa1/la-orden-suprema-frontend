import { axiosInstance } from '@lib/axiosInstance'

export async function getCountries() {
  const { data } = await axiosInstance.get<string[]>('/countries')

  return data
}
