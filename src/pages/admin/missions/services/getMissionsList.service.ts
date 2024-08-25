import { missionsListMock, MissionsList } from '@pages/admin'
import { MissionStatus } from '@models/enums'

type GetMissionsListParams = {
  status?: MissionStatus;
  createdBy?: string;
  assignedTo?: string;
}

export function getMissionsList(_params: GetMissionsListParams) {
  return new Promise<MissionsList>((resolve) => {
    setTimeout(() => {
      resolve(missionsListMock)
    }, 500)
  })
}

