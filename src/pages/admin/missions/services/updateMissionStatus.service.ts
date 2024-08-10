import { MissionDetails, missionsDetailsMock } from '@pages/admin'
import { MissionStatus } from '@models/enums'

type UpdateMissionStatusProps = {
  id: number;
  status: MissionStatus;
}

export const updateMissionStatus = async ({ id, status }: UpdateMissionStatusProps): Promise<MissionDetails> => {
  return new Promise((resolve, reject) => {
    const missionIndex = missionsDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionsDetailsMock[missionIndex].status = status

    if (status === MissionStatus.ASSIGNED) {
      missionsDetailsMock[missionIndex].imageUrl = null
    }

    resolve(missionsDetailsMock[missionIndex])
  })
}
