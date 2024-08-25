import { MissionStatus } from '@models/enums'
import { MissionDetails, missionsDetailsMock } from '@pages/assassin'

type PayMissionProps = {
  id: number
}

export function payMission({ id }: PayMissionProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const missionIndex = missionsDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionsDetailsMock[missionIndex].status = MissionStatus.PAID

    resolve(missionsDetailsMock[missionIndex])
  })
}
