import { MissionsList } from '@pages/admin'
import { MissionStatus } from '@models/enums'
import { axiosInstance } from '@lib/axiosInstance.ts'

type GetMissionsListParams = {
  status?: MissionStatus;
  createdBy?: string;
}

export async function getMissionsList(params: GetMissionsListParams) {
  const { data } = await axiosInstance.get<MissionsList>('/missions/admin', { params })

  return data
}

