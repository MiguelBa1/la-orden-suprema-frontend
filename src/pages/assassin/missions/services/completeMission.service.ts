import { MissionStatus } from '@models/enums'
import { MissionDetails, missionDetailsMock } from '@pages/assassin'

type CompleteMissionProps = {
  id: number
  image_url: string
}

export function completeMission({ id, image_url }: CompleteMissionProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const missionIndex = missionDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionDetailsMock[missionIndex].status = MissionStatus.COMPLETED
    missionDetailsMock[missionIndex].image_url = image_url

    resolve(missionDetailsMock[missionIndex])
  })
}
