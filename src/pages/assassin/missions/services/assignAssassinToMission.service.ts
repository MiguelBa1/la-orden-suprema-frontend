import { MissionStatus } from '@models/enums'
import { MissionDetails, missionDetailsMock } from '@pages/assassin'
import { usersMock } from '@data/usersMock.ts'

type AssignMissionProps = {
  missionId: number
  assassinId: number
}

export function assignAssassinToMission({ missionId, assassinId }: AssignMissionProps) {
  return new Promise<MissionDetails>((resolve, reject) => {
    const user = usersMock.find((user) => user.id === assassinId)

    if (!user) {
      return reject('Asesino no encontrado')
    }

    const missionIndex = missionDetailsMock.findIndex((mission) => mission.id === missionId)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionDetailsMock[missionIndex].status = MissionStatus.ASSIGNED
    missionDetailsMock[missionIndex].assigned_at = new Date().toISOString().split('T')[0]
    missionDetailsMock[missionIndex].assigned_to = {
      id: user.id,
      name: user.name
    }

    resolve(missionDetailsMock[missionIndex])
  })
}
