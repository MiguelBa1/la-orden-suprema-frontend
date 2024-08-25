import { MissionDetails, missionsDetailsMock } from '@pages/assassin'

export function getMissionDetails(id: number) {
  return new Promise<MissionDetails>((resolve, reject) => {
    setTimeout(() => {
      const missionsDetails = missionsDetailsMock.find((mission) => mission.id === id)

      if (!missionsDetails) {
        reject(new Error('Misión no encontrada'))
      }

      if (missionsDetails && missionsDetails.id === id) {
        resolve(missionsDetails)
      }
    }, 500)
  })
}
