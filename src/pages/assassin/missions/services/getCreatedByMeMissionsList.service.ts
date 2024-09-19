import { axiosInstance } from '@lib/axiosInstance.ts'
import { CreatedByMeMissionsList } from '@pages/assassin'
import { MissionStatus } from '@models/enums'

type GetCreatedByMeMissionsListParams = {
  status?: MissionStatus;
}

export async function getCreatedByMeMissionsList(params: GetCreatedByMeMissionsListParams) {
  const { data } = await axiosInstance.get<CreatedByMeMissionsList>('/missions/created-by-me', { params })

  return data
}
