import { axiosInstance } from '@lib/axiosInstance'
import { MissionsList } from '@pages/assassin'

type GetMissionsListProps = {
  status?: string;
  assignedTo?: string;
}

export async function getMissionsList({ status, assignedTo }: GetMissionsListProps) {
  const { data } = await axiosInstance.get<MissionsList>('/missions/assigned', {
    params: {
      status,
      assignedTo
    }
  })

  return data
}
