import { MissionStatus } from '@models/enums'
import { MissionDetails, missionsDetailsMock } from '@pages/assassin'

type CompleteMissionProps = {
  id: number
  imageUrl: string
}

export function completeMission({ id, imageUrl }: CompleteMissionProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const missionIndex = missionsDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionsDetailsMock[missionIndex].status = MissionStatus.COMPLETED
    missionsDetailsMock[missionIndex].imageUrl = imageUrl

    resolve(missionsDetailsMock[missionIndex])
  })
}
