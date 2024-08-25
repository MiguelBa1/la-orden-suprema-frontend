import { MissionStatus } from '@models/enums'
import { MissionDetails, missionsDetailsMock } from '@pages/assassin'
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

    const missionIndex = missionsDetailsMock.findIndex((mission) => mission.id === missionId)

    if (missionIndex === -1) {
      return reject('Misión no encontrada')
    }

    missionsDetailsMock[missionIndex].status = MissionStatus.ASSIGNED
    missionsDetailsMock[missionIndex].assignedAt = new Date().toISOString().split('T')[0]
    missionsDetailsMock[missionIndex].assignedTo = {
      id: user.id,
      name: user.name
    }

    resolve(missionsDetailsMock[missionIndex])
  })
}
