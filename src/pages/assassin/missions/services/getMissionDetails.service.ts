import { MissionDetails, missionDetailsMock } from '@pages/assassin'

export function getMissionDetails(id: number) {
  return new Promise<MissionDetails>((resolve, reject) => {
    setTimeout(() => {

      const missionDetails = missionDetailsMock.find((mission) => mission.id === id)

      if (!missionDetails) {
        reject(new Error('Misión no encontrada'))
      }

      if (missionDetails && missionDetails.id === id) {
        resolve(missionDetails)
      }
    }, 500)
  })
}
