import { MissionStatus } from '@models/enums'
import { MissionDetails, missionDetailsMock } from '@pages/assassin'

type PayMissionProps = {
  id: number
}

export function payMission({ id }: PayMissionProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const missionIndex = missionDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionDetailsMock[missionIndex].status = MissionStatus.PAID

    resolve(missionDetailsMock[missionIndex])
  })
}
