import { AssassinsList } from '@pages/assassin'
import { axiosInstance } from '@lib/axiosInstance.ts'

type GetAssassinsListParams = {
  alias?: string;
}

export async function getAssassinsList(params: GetAssassinsListParams) {
  const { data } = await axiosInstance.get<AssassinsList>('/assassins', { params })

  return data
}
