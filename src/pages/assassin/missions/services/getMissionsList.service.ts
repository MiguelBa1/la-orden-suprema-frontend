import { missionsListMock, MissionsList } from '@pages/assassin'
import { MissionStatus } from '@models/enums'

type MissionListProps = {
  status?: MissionStatus,
  createdBy?: string
  assignedTo?: string
}

export function getMissionsList({ status, createdBy, assignedTo }: MissionListProps) {
  return new Promise<MissionsList>((resolve, reject) => {
    setTimeout(() => {
      const missionsList = missionsListMock.filter((mission) => {
        let match = true

        if (status !== undefined) {
          match = match && mission.status === status
        }

        if (createdBy !== undefined) {
          match = match && mission.createdBy === createdBy
        }

        if (assignedTo !== undefined) {
          match = match && mission.assignedTo === assignedTo
        }

        return match
      })

      if (!missionsList) {
        reject(new Error('No se encontraron misiones'))
      }

      if (missionsList) {
        resolve(missionsList)
      }
    }, 500)
  })
}
