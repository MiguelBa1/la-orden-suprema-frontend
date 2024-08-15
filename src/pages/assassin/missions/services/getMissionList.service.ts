import { missionListMock, MissionList } from '@pages/assassin'
import { MissionStatus } from '@models/enums'

type MissionListProps = {
  status?: MissionStatus,
  created_by?: number
  assigned_to?: number
}

export function getMissionList({ status, created_by, assigned_to }: MissionListProps) {
  return new Promise<MissionList>((resolve, reject) => {
    setTimeout(() => {
      const missionList = missionListMock.filter((mission) => {
        let match = true

        if (status !== undefined) {
          match = match && mission.status === status
        }

        if (created_by !== undefined) {
          match = match && mission.created_by.id === created_by
        }

        if (assigned_to !== undefined) {
          match = match && mission.assigned_to !== null && mission.assigned_to.id === assigned_to
        }

        return match
      })

      if (!missionList) {
        reject(new Error('No se encontraron misiones'))
      }

      if (missionList) {
        resolve(missionList)
      }
    }, 500)
  })
}
