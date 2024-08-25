import { MissionStatus } from '@models/enums'
import { MissionDetails, missionDetailsMock } from '@pages/assassin'

type RejectMissionEvidenceProps = {
  id: number
}

export function rejectMissionEvidence({ id }: RejectMissionEvidenceProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const missionIndex = missionDetailsMock.findIndex((mission) => mission.id === id)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionDetailsMock[missionIndex].status = MissionStatus.ASSIGNED
    missionDetailsMock[missionIndex].imageUrl = null

    resolve(missionDetailsMock[missionIndex])
  })
}
