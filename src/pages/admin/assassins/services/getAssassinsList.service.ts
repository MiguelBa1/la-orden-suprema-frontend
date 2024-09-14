import { axiosInstance } from '@lib/axiosInstance'
import { AssassinsList } from '@pages/admin'

type GetAssassinsListParams = {
  name?: string;
  alias?: string;
  status?: string;
  email?: string;
  location?: string;
}

export async function getAssassinsList(params: GetAssassinsListParams) {
  const { data } = await axiosInstance.get<AssassinsList>('/assassins', { params })

  return data
}
