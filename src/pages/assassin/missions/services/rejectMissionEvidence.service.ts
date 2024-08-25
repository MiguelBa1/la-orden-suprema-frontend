import { MissionStatus } from '@models/enums'
import { MissionDetails, missionsDetailsMock } from '@pages/assassin'

type RejectMissionEvidenceProps = {
  id: number
}

export function rejectMissionEvidence({ id }: RejectMissionEvidenceProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const missionIndex = missionsDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionsDetailsMock[missionIndex].status = MissionStatus.ASSIGNED
    missionsDetailsMock[missionIndex].imageUrl = null

    resolve(missionsDetailsMock[missionIndex])
  })
}
